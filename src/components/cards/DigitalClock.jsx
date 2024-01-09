import { useEffect, useState } from "react";


function DigitalClock(){
    let [date, setDate] = useState(new Date());
    
    useEffect(() => {
        let interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    let hours = date.getHours()
    let minutes = date.getMinutes()
    
    
    
    return <>
        <div>{hours<10 ? "0"+hours : hours}:{minutes<10 ? "0"+minutes : minutes}</div>
    </>
}

export default DigitalClock;