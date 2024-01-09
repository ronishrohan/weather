/* eslint-disable no-unused-vars */
import "./index.css";
import "@fontsource-variable/bodoni-moda";
import "@fontsource-variable/manrope";
import Navbar from "./components/Navbar";
import Modal from "./components/modal/Modal";
import Today from "./components/Today";
import WeatherCards from "./components/six-day-view/WeatherCards";
import Gradient from "./components/Gradient";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animationDelay = 1.2;
const API_KEY = "7ac740c3a35337c7e81ab9595764b948";

function App() {
  let [loadedData, setLoadedData] = useState(false);
  let [location, setLocation] = useState(["loading...", ""]);
  let [coords, setCoords] = useState([0, 0]);
  let [loaded, setLoaded] = useState(false);
  let [data, setData] = useState();
  let [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    init();
    async function init() {
      await navigator.geolocation.getCurrentPosition(success, error);

      async function success(position) {
        
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        
        let response = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=${API_KEY}`
        );
        let data_in = await response.json();

        setLocation([data_in[0].name, data_in[0].country]);
        setLoadedData(true);
        setCoords([position.coords.latitude, position.coords.longitude]);
        
      }
      function error() {
        console.log("Your browser does not support geolocation api");
        alert(
          "Your browser does not support geolocation api, please use another browser"
        );
      }
      
    }
  }, []);

  useEffect(() => {
    async function getWeatherData(lat, long) {
      let req = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,&current=cloud_cover,relative_humidity_2m,apparent_temperature,weather_code,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&wind_speed_unit=ms&timezone=auto`
      );
      let data_req = await req.json();
      setData(data_req);

      setLoaded(true);
    }

    if(coords[0] && coords[1]){
      getWeatherData(coords[0], coords[1]);
    }
  }, [coords]);

  function handleChangeCoords(lat, long){
    setCoords([lat,long])
  }

  function showModal(){
    setModalOpened(true);
  }
  function hideModal(){
    setModalOpened(false);
  }
  
  return (
    <>
      <AnimatePresence>

      {modalOpened && <Modal handleChangeCoords={handleChangeCoords} hideModal={hideModal} ></Modal>}
      </AnimatePresence>
      <div id="noise"></div>
      <div className="outer-container">
        <motion.div
          id="loading"
          initial={{ opacity: 0, scale: 1, y: 100, fontSize: "72px" }}
          animate={{ opacity: 1, scale: 1, y: 0, fontSize: "24px" }}
          transition={{
            type: "tween",
            ease: "anticipate",
            duration: 1,
            delay: 0.4,
            opacity: {
              delay: 0,
              duration: 0.2,
            },
            y: {
              delay: 0,
              duration: 0.2,
            },
          }}
          exit={{ x: 100 }}
        >
          Hello
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            give us a second
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            type: "tween",
            ease: "anticipate",
            delay: animationDelay,
          }}
          className="inner-container"
        >
          <Gradient></Gradient>
          <AnimatePresence>
            {loaded ? (
              <div id="mid-container">
                <Navbar showModal={showModal}
                  delay={animationDelay + 1}
                >{`${location[0]}, ${location[1]}`}</Navbar>
                <div id="cards-container">
                  <Today
                    delay={animationDelay + 0.6}
                    loaded={loaded}
                    data={data}
                  ></Today>
                  <WeatherCards
                    delay={animationDelay}
                    data={data}
                  ></WeatherCards>
                </div>
              </div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 2.5,
                    type: "tween",
                    ease: "anticipate",
                    duration: 1,
                  }}
                  exit={{ opacity: 0 }}
                  id="loading-main"
                >
                  Loading
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default App;
