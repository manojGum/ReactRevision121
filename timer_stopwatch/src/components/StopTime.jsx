import { useEffect, useRef, useState } from "react";

function StopTimer() {
  let [second, setSecond] = useState(0);
  let [minute, setMinute] = useState(0);
  let [hour, setHour] = useState(0);
  let [milisecond, SetMillisecond] = useState(0);
  const ref=useRef(null)
  
  useEffect(() => {
    timer()

  },[]);

  const timer = () => {
    ref.current= setInterval(()=>
    SetMillisecond((pre)=>
        pre+10
    ),10)

  };


  // millisecond handling here
  if(milisecond>=999){
      setSecond(second+1)
      SetMillisecond(0)
    
  }
  // second is being handled here
  if(second>=59){
    setMinute(minute+1)
    setSecond(0)
  }

  // minute is being handled here
  if(minute>=59){
    setHour(hour+1)
    setMinute(0)
  }

  
// Pause function here
  const pause = () => {
    clearInterval(ref.current)
  };


  // Restart function here
  const restart = () => {
    SetMillisecond(0)
    setSecond(0)
    setMinute(0)
    setHour(0)
  };

  // Start function here
  const start = () => {
    ref.current= setInterval(()=>
    SetMillisecond((pre)=>
          pre+10
  ),10)
  };

  return (
    <>
      <h2>
        {hour < 10 ? "0" + hour : hour}h : {minute < 10 ? "0" + minute : minute}
        m : {second < 10 ? "0" + second : second}s :
        {milisecond<10 ? "0" + milisecond : milisecond}ms
      </h2>
      <button onClick={start}>start</button>
      {/* <button onClick={pause}>pause</button> */}
      <button onClick={restart}>Restart</button>
    </>
  );
}

export default StopTimer;