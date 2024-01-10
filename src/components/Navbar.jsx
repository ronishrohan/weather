/* eslint-disable react/prop-types */
import Location from "./navbar/Location";
import ThemeSwitcher from "./navbar/ThemeSwitcher";
import Github from "./navbar/Github";
import { motion } from "framer-motion";
function Navbar(props) {
  let delay = props.delay;
  return (
    <>
      <div className="nav-container">
      <motion.div
          //initial={{ opacity: 0, x:20 }}
          //animate={{ opacity: 1, x:0 }}
          initial={{scale: 0, opacity: 0, rotate: "360deg"}}
          animate={{scale: 1, opacity: 1, rotate: 0}}
          transition={{duration:0.5, delay: 0.6+delay, type: "tween", ease: "backOut", rotate:{
            duration: 1, delay: 0.8+delay, ease: "backInOut"
          }}}
          className="nav-bg"
          id="github-link"
        >
          <Github></Github>
        </motion.div>
        <Location delay={delay} showModal={props.showModal} >{props.children}</Location>
        <motion.div
          //initial={{ opacity: 0, x:20 }}
          //animate={{ opacity: 1, x:0 }}
          initial={{scale: 0, opacity: 0, rotate: "90deg"}}
          animate={{scale: 1, opacity: 1, rotate: 0}}
          transition={{duration:0.6, delay: 0.4+delay, type: "tween", ease: "backOut", rotate:{
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
