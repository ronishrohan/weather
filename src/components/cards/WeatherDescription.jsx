/* eslint-disable react/prop-types */
import { WMO } from "../vars.jsx";
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
        <div id="weather-code-today">{`${
          WMO[data.current.weather_code]["description"]
        }`}</div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 3.6,
            duration: 1,
            ease: "anticipate",
            type: "tween",
          }}
          id="weather-code-today-svg-container"
        >
          {WMO[data.current.weather_code]["icon"]}
        </motion.div>
      </motion.div>
    </>
  );
}

export default WeatherDescription;
