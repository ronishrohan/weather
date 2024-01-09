/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
function Location(props) {
  let delay = props.delay;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 1,
          ease: "anticipate",
          delay: 0.15 + delay - 0.2
        }}
        className="middle-nav"
      >
        <div id="location-display">
          <svg
            width="16"
            height="16"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.94 10C19.48 5.83 16.17 2.52 12 2.06V0H10V2.06C5.83 2.52 2.52 5.83 2.06 10H0V12H2.06C2.52 16.17 5.83 19.48 10 19.94V22H12V19.94C16.17 19.48 19.48 16.17 19.94 12H22V10H19.94ZM11 18C7.13 18 4 14.87 4 11C4 7.13 7.13 4 11 4C14.87 4 18 7.13 18 11C18 14.87 14.87 18 11 18Z" />
          </svg>
          <div>{props.children}</div>
        </div>
        <div onClick={props.showModal} id="location-picker">
          <svg
            width="12"
            height="12"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.7227 11.9927L12.8895 11.9864L12.5963 11.6994C13.6391 10.5049 14.2732 8.94861 14.2862 7.25052C14.315 3.46407 11.2691 0.371489 7.48263 0.342683C3.69619 0.313877 0.603603 3.35976 0.574797 7.14621C0.545992 10.9326 3.59188 14.0252 7.37832 14.054C9.07642 14.067 10.6421 13.4565 11.8524 12.4321L12.1349 12.7296L12.1286 13.5628L17.3621 18.866L18.9456 17.3064L13.7227 11.9927ZM7.39437 11.9446C4.76812 11.9246 2.66426 9.7885 2.68424 7.16225C2.70422 4.536 4.84033 2.43214 7.46658 2.45212C10.0928 2.4721 12.1967 4.60822 12.1767 7.23447C12.1567 9.86072 10.0206 11.9646 7.39437 11.9446Z" />
          </svg>
        </div>
      </motion.div>
    </>
  );
}

export default Location;
