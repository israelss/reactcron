import { useState, useRef } from 'react'
import { useInterval } from './hooks/useInterval';
import logo from './logo.svg'

const IS_NUMBER = new RegExp(/^\d*$/,'gi')

function App() {
  const [runningState, setRunningState] = useState(false)
  const [timeOut, setTimeOut] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const setValue = {
    setHours,
    setMinutes,
    setSeconds,
  }

  function handleNumberChange({target: {name, value}}) {
    IS_NUMBER.test(value) && setValue[name](Number(value))
  }

  function countdown() {
    if (seconds > 0) {
      setSeconds(seconds - 1)
    }
    else if (minutes > 0) {
      setMinutes(minutes - 1)
      setSeconds(59)
    }
    else {
      setHours(hours - 1)
      setMinutes(59)
      setSeconds(59)
    }
    !hours && !minutes && !seconds && setRunningState(false)
  }
  
  useInterval(countdown, runningState
    ? 1000
    : null)
    
  function initTimer() {
    setRunningState(true)
  }

  function pauseTimer() {
    setRunningState(false)
  }
  
  function stopTimer(){
    setRunningState(false)
    setHours(0)
    setMinutes(0)
    setSeconds(0)
  }

  return (
    <div className="App">
      {!runningState && <span>Set the timer:</span>}
      <label htmlFor="initial-hours">
        <span>Hours</span>
        <input
          type="text"
          pattern="/\d/"
          name="setHours"
          id="initial-hours"
          min="0"
          value={hours}
          onChange={handleNumberChange}
          disabled={runningState}
        />
      </label>
      <label htmlFor="initial-minutes">
        <span>Minutes (0 - 59)</span>
        <input
          type="text"
          pattern="\d"
          name="setMinutes"
          id="initial-minutes"
          min="0"
          max="59"
          value={minutes}
          onChange={handleNumberChange}
          disabled={runningState}
        />
      </label>
      <label htmlFor="initial-seconds">
        <span>Seconds (0 - 59)</span>
        <input
          type="text"
          pattern="/\d/"
          name="setSeconds"
          id="initial-seconds"
          min="0"
          max="59"
          value={seconds}
          onChange={handleNumberChange}
          disabled={runningState}
        />
      </label>
      <button
        onClick={initTimer}
        disabled={runningState || !hours && !minutes && !seconds}
      >
          Start
      </button>
      <button
        onClick={pauseTimer}
        disabled={!runningState}
      >
          Pause
      </button>
      <button
        onClick={stopTimer}
        disabled={!runningState}
      >
          Stop
      </button>
    </div>
  )
}

export default App
