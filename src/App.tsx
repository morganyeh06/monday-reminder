import Banner from './components/Banner'
import InfoCard from './components/InfoCard'
import './App.css'
import { useState } from 'react';

function App() {
  const day = new Date().getDay();
  const sunday = 6;
  const [message, setMessage] = useState(day === sunday ? "Tomorrow is Monday!" : "Tomorrow is not Monday");

  function changeMessage(lang: string) {
    let msg = "";

    if(lang === "en" && day === sunday) {
      msg = "Tomorrow is Monday!";
    } else if (lang === "en" && day !== sunday) {
      msg = "Tomorrow is not Monday";
    } else if (lang === "jp" && day === sunday) {
      msg = "明日は月曜日！";
    } else {
      msg = "明日は月曜日ではない";
    }

    setMessage(msg);
  }

  return (<>
    <Banner langFunc={changeMessage}/>
    <InfoCard msg={message} 
              imgName={day === sunday ? "smug-kanade" : "sad-kanade"}/>
  </>)
}

export default App
