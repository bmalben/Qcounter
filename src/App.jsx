import { useState,useEffect } from 'react'
import { Button } from '@mui/material'
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  const [isRunning,setIsRunning]=useState(true);

  useEffect(()=>{
    let interval;
    if (isRunning){
      interval=setInterval(()=>{
        setCount((prevCount)=>prevCount+1);
      },1000);
    }
    return()=>clearInterval(interval);
  },[isRunning]);

  const handlePause=()=>{
    setIsRunning(false);
  };

  const handleReset=()=>{
    setCount(0);
    setIsRunning(true);
  };

  const handleResume=()=>{
    setIsRunning(true);
  };
  return (
    <>
      <div className="App">
      <div className="container">
        <h1 className="head">Counter-App</h1>
        <h1>{count}</h1>
        <div className="button">
      <Button className='stop-button' style={{color:"white"}} variant="text" onClick={isRunning ? handlePause : handleResume}>
        {isRunning ? "Pause" : "Resume"}
      </Button>
      <Button className='start-button' style={{color:"white"}} variant="text" onClick={handleReset}>Reset</Button>    
        </div>
      </div>
      </div>
    </>
  )
}

export default App
