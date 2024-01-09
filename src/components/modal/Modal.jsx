import "./modal.css";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
function Modal(props) {
    let queriesRef = useRef();
    async function getCoords(){
        let queries = queriesRef.current.value;
        if(queries){
            let res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${queries}`);
            let data = await res.json();
            console.log(data);
            if(data.length === 0){
                alert("Please enter valid queries and make sure youve entered the right spellings")
                queriesRef.current.value = ""
                return 0;
            }
            else{
                let lat = data[0].lat;
                let long = data[0].lon;
                props.handleChangeCoords(lat,long);
                props.hideModal();
                queriesRef.current.value = ""
            }
        }
    }
  return createPortal(
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, pointerEvents: "none" }}
        id="modal-container"
      >
        <div id="modal-backdrop" onClick={props.hideModal}></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5,}}
          animate={{ opacity: 1,scale:1, y: 0,}}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            type: "tween",
            ease: "anticipate",
            width:{
                delay:0.2
            }
          }}
          onKeyPress={(e)=> {
            if(e.key == "Enter"){
                getCoords()
            }
          }}
          id="modal-body"
        >
          
          <input ref={queriesRef} placeholder="enter search queries here, seperated by commas" type="text" />
          <button id="modal-submit-button" onClick={getCoords} >Search</button>
        </motion.div>
      </motion.div>
    </>,
    document.getElementById("popup")
  );
}

export default Modal;
