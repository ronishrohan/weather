/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./weathercards.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    console.log(props);
    let data = props.data;
    let dayList = [...data.daily.time];
    dayList.shift();
    dayList.forEach((date, index) => {
      let dateObj = new Date(date);
      let day = dateObj.getDay();
      dayList[index] = day;
    });

    setDays(dayList);
  }, [1]);
  console.log(days);
  return (
    <>
      <div id="weather-cards-container">
        {days.map((day, index) => (
          <motion.div
            initial={{ y: "50vh" }}
            animate={{ y: 0 }}
            transition={{duration: 1.5,delay:delay+1 + 0.08*index, type: "tween", ease: "anticipate"}}
            //transition={{duration: 1.5,delay:delay+1 + (0.1*Math.random(index)), type: "tween", ease: "anticipate"}}
            className="weather-card"
            key={index}
          >
            <div className="weather-card-day">{dayNames[day]}</div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default WeatherCards;
