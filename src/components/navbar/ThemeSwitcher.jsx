import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./navbar.css";
const lightTheme = (
    <svg
        width="18"
        height="18"
        viewBox="0 0 26 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M6.88663 5.64667L4.78663 3.55833L3.14163 5.20333L5.22996 7.29167L6.88663 5.64667ZM3.66663 12.25H0.166626V14.5833H3.66663V12.25ZM14.1666 0.641666H11.8333V4.08333H14.1666V0.641666ZM22.8583 5.20333L21.2133 3.55833L19.125 5.64667L20.77 7.29167L22.8583 5.20333ZM19.1133 21.1867L21.2016 23.2867L22.8466 21.6417L20.7466 19.5533L19.1133 21.1867ZM22.3333 12.25V14.5833H25.8333V12.25H22.3333ZM13 6.41667C9.13829 6.41667 5.99996 9.555 5.99996 13.4167C5.99996 17.2783 9.13829 20.4167 13 20.4167C16.8616 20.4167 20 17.2783 20 13.4167C20 9.555 16.8616 6.41667 13 6.41667ZM11.8333 26.1917H14.1666V22.75H11.8333V26.1917ZM3.14163 21.63L4.78663 23.275L6.87496 21.175L5.22996 19.53L3.14163 21.63Z" />
    </svg>
);
const darkTheme = (
    <svg
        width="14"
        height="14"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M45.3955 31.3132C45.9055 30.0967 44.4483 29.063 43.2243 29.6027C40.7863 30.674 38.144 31.2257 35.472 31.222C25.0095 31.222 16.5289 22.912 16.5289 12.6604C16.5289 9.07229 17.5679 5.72264 19.366 2.88417C20.0743 1.76619 19.2217 0.214168 17.9234 0.545418C7.89805 3.10262 0.5 12.0321 0.5 22.655C0.5 35.2725 10.9377 45.5 23.8148 45.5C33.5633 45.5 41.9143 39.6375 45.3955 31.3132Z"
            fill="white"
        />
    </svg>
);

const variants = {
    expand: {
        scale: 6,
    },
    shrink: {
        scale: 1,
    },
};
let savedTheme;
if(window.sessionStorage.getItem("theme")){
    savedTheme = window.sessionStorage.getItem("theme")
}
else{
    savedTheme = "dark"
}

function ThemeSwitcher() {
    
    useEffect(() => {
        document.querySelector("body").setAttribute("theme", savedTheme);
    }, [])
    
    let [currentTheme, setCurrentTheme] = useState(savedTheme==="dark" ? "light":"dark");
    function changeTheme() {
        setCurrentTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
        document.querySelector("body").setAttribute("theme", currentTheme);
        window.sessionStorage.setItem("theme", currentTheme)
    }
    
    return (
        <>
            <motion.div id="theme-switcher-container" onClick={changeTheme}>
                <motion.div
                    title="switch theme"
                    variants={variants}
                    animate={currentTheme === "dark" ? "expand" : "shrink"}
                    transition={{
                        duration: 0.6,
                        type: "spring",
                    }}
                    id="light-theme"
                >
                    {lightTheme}
                </motion.div>
                <motion.div
                    variants={{
                        show: {
                            scale: 1,
                            rotate: "0deg",
                        },
                        hide: {
                            scale: 0,
                            rotate: "90deg",
                        },
                    }}
                    initial="hide"
                    transition={{
                        duration: 0.5,
                        type: "tween",
                        ease: "backOut",
                    }}
                    animate={currentTheme === "dark" ? "show" : "hide"}
                    id="dark-theme"
                >
                    {darkTheme}
                </motion.div>
            </motion.div>
        </>
    );
}

export default ThemeSwitcher;
