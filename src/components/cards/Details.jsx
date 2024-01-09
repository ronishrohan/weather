import { motion } from "framer-motion";

function Details(props) {
  let data = props.data;

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
        <div id="mrc-left">
          <div className="details-container">
            <div>Wind</div>
            <div
              id="wind-details"
              className="details-text"
            >{`${data.current.wind_speed_10m} m/s`}</div>
          </div>
          <div className="details-container">
            <div>Humidity</div>
            <div
              id="humidity-details"
              className="details-text"
            >{`${data.current.relative_humidity_2m}%`}</div>
          </div>
          <div className="details-container">
            <div>Cloud cover</div>
            <div
              id="cloud-details"
              className="details-text"
            >{`${data.current.cloud_cover}%`}</div>
          </div>
        </div>
        <div id="mrc-right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </div>
      </motion.div>
    </>
  );
}

export default Details;
