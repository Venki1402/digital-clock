import React, {useState, useEffect} from "react";

function DigitalCLock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(intervalId);
        }
    })

    function formatTime(){
        let hr = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let meredium = hr >= 12 ? "PM" : "AM";

        hr = hr%12 || 12;

        return `${padzero(hr)}:${padzero(min)}:${padzero(sec)} ${meredium}`
    }

    function formatDate(){
        return time.toLocaleDateString();
    }

    function padzero(num){
        return (num < 10 ? "0" : "") + num;
    }

    return(
    <div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
            <br />
            <span>{formatDate()}</span>
        </div>
    </div>);
}

export default DigitalCLock;