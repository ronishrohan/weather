/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./weathercards.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WMO } from "../vars";
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function WeatherCards(props) {
  let delay = props.delay;
  let [days, setDays] = useState([]);
  let data = props.data;
  useEffect(() => {
    let dayList = [...data.daily.time];
    dayList.shift();
    dayList.forEach((date, index) => {
      let dateObj = new Date(date);
      let day = dateObj.getDay();
      dayList[index] = day;
    });

    setDays(dayList);
  }, [1]);
  function floor(temp) {
    return Math.floor(temp * 10) / 10;
  }

  return (
    <>
      <div id="weather-cards-container">
        {days.map((day, index) => (
          <motion.div
            initial={{ y: "50vh" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.5,
              delay: delay + 0.6 + 0.08 * index,
              type: "tween",
              ease: "anticipate",
            }}
            //transition={{duration: 1.5,delay:delay+1 + (0.3*Math.random()), type: "tween", ease: "anticipate"}}
            className="weather-card"
            key={index}
          >
            <div className="weather-card-min-max">
              <div className="weather-card-max">
                {`${data.daily.temperature_2m_max[index + 1]}°C`}
              </div>
              /
              <div className="weather-card-min">
                {`${data.daily.temperature_2m_min[index + 1]}°C`}
              </div>
            </div>
            <div className="weather-svg-container">
              <motion.div
                initial={{ opacity: 0, y: 15}}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  delay: 2.2 + 0.1 * index,
                  ease: "anticipate",
                  type: "tween",
                }}
                className="weather-svg-holder"
              >{WMO[data.daily.weather_code[index + 1]]["icon"]}</motion.div>
              <div className="weather-code">{`${
                WMO[data.daily.weather_code[index + 1]]["description"]
              }`}</div>
            </div>

            <div className="weather-card-day">{dayNames[day]}</div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default WeatherCards;
