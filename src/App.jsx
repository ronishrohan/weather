/* eslint-disable no-unused-vars */
import "./index.css";
import "@fontsource-variable/bodoni-moda";
import "@fontsource-variable/manrope";
import Navbar from "./components/Navbar";

import Today from "./components/Today";
import WeatherCards from "./components/six-day-view/WeatherCards";
import Gradient from "./components/Gradient";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const animationDelay = 1;
const API_KEY = "7ac740c3a35337c7e81ab9595764b948";

function App() {
  let [loadedData, setLoadedData] = useState(false);
  let [location, setLocation] = useState(["loading...", ""]);
  let [coords, setCoords] = useState([0, 0]);
  let [loaded, setLoaded] = useState(false);
  let [data, setData] = useState();

  useEffect(() => {
    init();
    async function init() {
      await navigator.geolocation.getCurrentPosition(success, error);

      async function success(position) {
        setCoords([position.coords.latitude, position.coords.longitude]);
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let response = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=${API_KEY}`
        );
        let data_in = await response.json();

        setLocation([data_in[0].name, data_in[0].country]);
        setLoadedData(true);
        async function getWeatherData(lat, long) {
          let req = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,apparent_temperature&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min`
          );
          let data_req = await req.json();
          setData(data_req);
          
          setTimeout(() => {
            setLoaded(true);
          }, 1);
        }

        getWeatherData(lat, long);
      }
      function error() {
        console.log("Your browser does not support geolocation api");
        alert("Your browser does not support geolocation api, please use another browser")
      }
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <div id="noise"></div>
      <div className="outer-container">
        <motion.div
          id="loading"
          initial={{ scale: 2 }}
          animate={{ scale: 1 }}
          transition={{ type: "tween", ease: "anticipate", duration: 1 }}
          exit={{x:100}}
        >
          Hello<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} >give us a second</motion.div>
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
          {loaded ? (
            <div id="mid-container">
              <Navbar
                delay={animationDelay + 1}
              >{`${location[0]}, ${location[1]}`}</Navbar>
              <div id="cards-container">
                <Today
                  delay={animationDelay + 0.6}
                  loaded={loaded}
                  data={data}
                ></Today>
                <WeatherCards delay={animationDelay} data={data}  ></WeatherCards>
              </div>
            </div>
          ) : (
            <>
              <div id="loading-main">LOADING</div>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default App;
