/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./cards.css";
import { motion } from "framer-motion";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const arrowSVG = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 34 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.875 0C17.9105 0 18.75 0.839475 18.75 1.875V37.3483L30.5492 25.5492C31.2815 24.817 32.4685 24.817 33.2007 25.5492C33.933 26.2815 33.933 27.4685 33.2007 28.2008L18.2007 43.2008C17.8492 43.5525 17.3722 43.75 16.875 43.75C16.3777 43.75 15.9007 43.5525 15.5492 43.2008L0.549169 28.2008C-0.183056 27.4685 -0.183056 26.2815 0.549169 25.5492C1.28139 24.817 2.46859 24.817 3.20082 25.5492L15 37.3483V1.875C15 0.839475 15.8395 0 16.875 0Z"
    />
  </svg>
);
function Overall(props) {
  let data = props.data;
  useEffect(()=> {console.log(data);}, [])

  let date = new Date();
  let daten = date.getDate();
  let month = date.getMonth() + 1;
  daten = daten < 10 ? "0" + daten : daten;
  month = month < 10 ? "0" + month : month;

  function floor(temp) {
    return Math.floor(temp * 10) / 10;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 2,delay: 2, ease: "anticipate" }}
        id="left-container"
      >
        <motion.div id="date-container">
          <div id="day">{days[date.getDay()]}</div>
          <div id="date">{`${daten}/${month}/${date.getFullYear()}`}</div>
        </motion.div>

        <div id="temp-container">
          <div id="temp-average">{`${floor(
            data.current.temperature_2m
          )}°C`}</div>
          <div id="temp-feels-like">{`feels like ${floor(
            data.current.apparent_temperature
          )}°C`}</div>
        </div>
        <div id="high-low-temp-container">
          <div id="high-temp">
            {arrowSVG}
            <div>{`${floor(data.daily.temperature_2m_max[0])}°C`}</div>
          </div>
          <div id="low-temp">
            {arrowSVG}
            <div>{`${floor(data.daily.temperature_2m_min[0])}°C`}</div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Overall;
