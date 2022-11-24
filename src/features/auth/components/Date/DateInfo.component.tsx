import React,{useState,useEffect} from 'react';

import './DateInfo.css';

const DateInfo = () => {
  const [hour,setHour] = useState("");
  const [day,setDay] = useState("");

  useEffect(()=>{
    showHour();
    showDay()
    let clock = setInterval(()=>showHour(),1000);
    return () => clearInterval(clock);
  },[]);

  const showHour = () => {
    const clock = new Date();
    let h = clock.getHours() < 10 ? `0${clock.getHours()}` : clock.getHours();
    let m = clock.getMinutes() < 10 ? `0${clock.getMinutes()}` : clock.getMinutes()
    const text = `${h}:${m}`
    setHour(text);
  }

  const showDay = () => setDay(new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}))

  return (
    <div className='date'>
      <p className='date__hour'>{hour}</p>
      <p className='date__day'>{day}</p>
    </div>
  )
}

export default DateInfo