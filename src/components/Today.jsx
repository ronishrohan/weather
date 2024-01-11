/* eslint-disable react/prop-types */
import DigitalClock from "./cards/DigitalClock";
import Overall from "./cards/Overall";
import { motion, AnimatePresence } from "framer-motion";
import WeatherDescription from "./cards/WeatherDescription";
import Details from "./cards/Details";
function Today(props) {
  
  
  let delay = props.delay;
  let loaded = props.loaded;
  let data = props.data;
  

  return (
    <>
      <motion.div
        //initial={{ opacity: 0, y: -60, marginLeft: 500,marginRight: 500, }}
        //animate={{ opacity: 1, y: 0, marginLeft: 0,marginRight: 0 }}
        initial={{opacity:0,y:-60,width: "20%"}}
        animate={{opacity:1,y:0,width: "100%"}}
        transition={{
            type: "tween",
            ease: "anticipate",
            duration: 1.5,
            delay: delay
            
        }}
        id="today-card-container"
      >
        <AnimatePresence>
          {loaded ? (
            <>
              <motion.div layout className="today-card-section" id="left">
                <Overall data={data}></Overall>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ease: "anticipate", duration: 1.5, delay: 0.2 + delay }}
                className="divider"
              ></motion.div>
              <div className="today-card-section" id="mid-left">
                <WeatherDescription data={data} ></WeatherDescription>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ease: "anticipate", duration: 1.3, delay: 0.4 + delay }}
                className="divider"
              ></motion.div>
              <motion.div layout className="today-card-section" id="mid-right">
                <Details data={data}></Details>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ease: "anticipate", duration: 1.4, delay: 0.6 + delay}}
                className="divider"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "anticipate", duration: 1.4, delay: delay + 1 }}
                className="today-card-section"
                id="right"
              >
                <motion.div layout id="digital-clock">
                  <DigitalClock></DigitalClock>
                </motion.div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                key="loading-text-today"
                initial={{ opacity: 0, scale: 1, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                exit={{ opacity: 0 }}
                id="loading-text"
              >
                loading your data
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default Today;
