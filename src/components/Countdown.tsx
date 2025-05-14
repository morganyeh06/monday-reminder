import '/src/App.css'
import { useState } from 'react';

interface CountdownProps {
    today: Date;
    msg: string;
}

export default function Countdown({msg, today} : CountdownProps) {
    let nextMonday = getNextMonday();
    var target = nextMonday.getTime();
    var timer = setInterval(displayTimer, 1000);

    const [timeUntil, setTimeUntil] = useState(getCurrentTime());

    function getNextMonday() {
        let d = new Date;
        d.setDate(today.getDate() + (((1 + 7 - today.getDay()) % 7) || 7));
        d.setMilliseconds(0);
        d.setSeconds(0);
        d.setMinutes(0);
        d.setHours(0);

        return d;
    }

    function getCurrentTime() {
        var now = new Date().getTime();

        // difference between target time and current time
        var diff = target - now; 

        // calculate days, hours, minutes, seconds
        var d = Math.floor(diff / (1000 * 60 * 60 * 24));
        var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((diff % (1000 * 60)) / 1000);

        var result = d + "d " + h + "h " + m + "m " + s + "s";
        return result;
    }

    function displayTimer() {
        var result = getCurrentTime();
        setTimeUntil(result);
    }

    return (<>
        <div className="countdown-container">
            <div className="countdown-message">{msg}</div>
            <div className="timer">{timeUntil}</div>
        </div>
        
    </>)
}