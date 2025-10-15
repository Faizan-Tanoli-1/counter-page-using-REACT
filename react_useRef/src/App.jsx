import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    if (timerRef.current !== null) return; // prevent multiple intervals
    timerRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div id="main-container">
      <div className="stopwatch-box">
        <h1 id="title">⏱ Stopwatch</h1>
        <h2 id="time-display">{time} Seconds</h2>

        <div className="button-group">
          <button id="start-btn" onClick={startTimer}>Start</button>
          <button id="stop-btn" onClick={stopTimer}>Stop</button>
          <button id="reset-btn" onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
