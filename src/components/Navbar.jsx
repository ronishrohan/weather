/* eslint-disable react/prop-types */
import Location from "./navbar/Location";
import ThemeSwitcher from "./navbar/ThemeSwitcher";
import { motion } from "framer-motion";
function Navbar(props) {
  let delay = props.delay;
  return (
    <>
      <div className="nav-container">
        <div className="nav-bg" id="burger-menu"></div>
        <Location delay={delay} >{props.children}</Location>
        <motion.div
          //initial={{ opacity: 0, x:20 }}
          //animate={{ opacity: 1, x:0 }}
          initial={{scale: 0, opacity: 0, rotate: "90deg"}}
          animate={{scale: 1, opacity: 1, rotate: 0}}
          transition={{duration:1, delay: 0.6+delay, type: "tween", ease: "backOut", rotate:{
            duration: 1, delay: 0.8+delay, ease: "backInOut"
          }}}
          className="nav-bg"
          id="theme-switcher"
        >
          <ThemeSwitcher></ThemeSwitcher>
        </motion.div>
      </div>
    </>
  );
}

export default Navbar;
