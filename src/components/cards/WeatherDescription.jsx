/* eslint-disable react/prop-types */
import { WMO } from "../vars";
import { motion } from "framer-motion";

function WeatherDescription(props) {
  let data = props.data;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 2,
          delay: 2.2,
          ease: "anticipate",
        }}
        id="mid-left-container"
      >
        <div id="weather-code-today">{`${WMO[data.current.weather_code]}`}</div>
        <div id="weather-code-today-svg-container">
          <motion.svg
            initial={{y:20, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{delay:3.6, duration:1, ease: "anticipate", type:"tween"}}
            id="weaither-code-today-svg"
            width="10vw"
            height="10vw"
            viewBox="0 0 200 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M161.25 50.5708C155.583 21.6851 130.333 0 100 0C75.9167 0 55 13.7311 44.5833 33.8255C19.5 36.5047 0 57.855 0 83.7264C0 111.44 22.4167 133.962 50 133.962H158.333C181.333 133.962 200 115.208 200 92.0991C200 69.9953 182.917 52.0778 161.25 50.5708Z" />
          </motion.svg>
        </div>
      </motion.div>
    </>
  );
}

export default WeatherDescription;
