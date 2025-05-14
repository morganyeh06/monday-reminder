import Banner from './components/Banner'
import InfoCard from './components/InfoCard'
import Countdown from './components/Countdown';
import './App.css'
import { useState } from 'react';

function App() {
  const day = new Date();
  const dayOfWeek = day.getDay();
  const sunday = 0;
  const [message, setMessage] = useState(dayOfWeek === sunday ? "Tomorrow is Monday!" : "Tomorrow is not Monday");
  const [countdownMsg, setCountdownMsg] = useState(dayOfWeek === sunday ? "Countdown" : "Next Monday in");

  function changeMessage(lang: string) {
    let msg = "";
    let cdMsg = "";

    if(lang === "en" && dayOfWeek === sunday) {
      msg = "Tomorrow is Monday!";
      cdMsg = "Countdown";
    } else if (lang === "en" && dayOfWeek !== sunday) {
      msg = "Tomorrow is not Monday";
      cdMsg = "Next Monday in";
    } else if (lang === "jp" && dayOfWeek === sunday) {
      msg = "明日は月曜日！";
      cdMsg = "カウントダウン";
    } else {
      msg = "明日は月曜日ではない";
      cdMsg = "来週の月曜日";
    }

    setMessage(msg);
    setCountdownMsg(cdMsg);
  }


  return (<>
    <Banner langFunc={changeMessage}/>
    <div className="fade-in">
      <InfoCard msg={message} 
              imgName={dayOfWeek === sunday ? "smug-kanade" : "sad-kanade"}/>
      <Countdown msg={countdownMsg} today={day}/>
    </div>
    
  </>)
}

export default App
