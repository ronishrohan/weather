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
              <motion.svg
                initial= {{opacity:0, y:15}}
                animate={{opacity:1, y:0}}
                transition={{
                    duration: 2,
                    delay: 2.2 + 0.1*index,
                    ease: "anticipate",
                    type: "tween"
                }}
                width="7vw"
                height="7vw"
                viewBox="0 0 200 134"
                
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M161.25 50.5708C155.583 21.6851 130.333 0 100 0C75.9167 0 55 13.7311 44.5833 33.8255C19.5 36.5047 0 57.855 0 83.7264C0 111.44 22.4167 133.962 50 133.962H158.333C181.333 133.962 200 115.208 200 92.0991C200 69.9953 182.917 52.0778 161.25 50.5708Z" />
              </motion.svg>
              <div className="weather-code">{`${
              WMO[data.daily.weather_code[index + 1]]
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
