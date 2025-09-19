// import React from 'react'
// import { useState , useEffect} from "react";

// function Countdown() {
//   const[time,setTime]=useState(10)
//   useEffect(() => {
//     if (time===0) return;

//    const interval = setInterval(() => {
//         setTime(pre=>pre-1);
//     }, 1000);
  
//     return ()=> clearInterval(interval)

//   }, [time])
  
//   return (
//     <div>
//       <h1>Countdown : {time}</h1>
//      {time === 0 && <p>⏰ Time's up!</p>}
//      <img src="" alt="" />
//     </div>
//   )
// }

// export default Countdown;

import React, { useState, useEffect, useRef } from "react";

function Countdown() {
  const [time, setTime] = useState(0);            
  const [inputTime, setInputTime] = useState(""); 
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null); 

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, time]);

  const handleStart = () => {
    if (Number(inputTime) > 0) {
      setTime(Number(inputTime));
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Countdown: {time}</h1>

      {time === 0 && <p>⏰ Time's up!</p>}

      <div style={{ margin: '20px' }}>
        <input
          type="number"
          placeholder="Enter seconds"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
        />
        <br /><br />
        <button onClick={handleStart} disabled={isRunning || inputTime === ""}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
      </div>

    </div>
  );
}

export default Countdown;
