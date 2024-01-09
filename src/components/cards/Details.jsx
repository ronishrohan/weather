/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function Details(props) {
  let data = props.data;
  function getTimeFromDate(dateStr) {
    let date = new Date(dateStr);
    let hours = Math.abs(date.getHours());
    let minutes = date.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 2,
          delay: 2.4,
          ease: "anticipate",
        }}
        id="mid-right-container"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.8,
            duration: 1,
            type: "tween",
            ease: "anticipate",
          }}
          id="mrc-left"
        >
          <div className="details-container">
            <div>Wind</div>
            <div className="details-text">{`${data.current.wind_speed_10m} m/s`}</div>
          </div>
          <div className="details-container">
            <div>Humidity</div>
            <div className="details-text">{`${data.current.relative_humidity_2m}%`}</div>
          </div>
          <div className="details-container">
            <div>Cloud cover</div>
            <div className="details-text">{`${data.current.cloud_cover}%`}</div>
          </div>
        </motion.div>
        <motion.div id="mrc-right">
          <div className="details-container">
            <div>Pressure</div>
            <div className="details-text">{`${data.current.pressure_msl} hPa`}</div>
          </div>
          <div className="details-container">
            <div>Sunrise</div>
            <div className="details-text">{`${getTimeFromDate(
              data.daily.sunrise[0]
            )} am`}</div>
          </div>
          <div className="details-container">
            <div>Sunset</div>
            <div className="details-text">{`${getTimeFromDate(
              data.daily.sunset[0]
            )} pm`}</div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Details;
