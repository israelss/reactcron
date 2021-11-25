import { useState, useRef } from 'react'
import { useInterval } from './hooks/useInterval';
import logo from './assets/logo.svg'

const IS_NUMBER = new RegExp(/^\d*$/,'gi')
const clamp = (min, value, max) => value < min
  ? min
  : value > max
    ? max
    : value

const within59 = (value) => clamp(0, value, 59)
const within999 = (value) => clamp(0, value, 999)

function App() {
  const [runningState, setRunningState] = useState(false)
  const [timeOut, setTimeOut] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const setValue = {
    setHours: (value) => setHours(within999(value)),
    setMinutes: (value) => setMinutes(within59(value)),
    setSeconds: (value) => setSeconds(within59(value)),
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
    else if (hours > 0) {
      setHours(hours - 1)
      setMinutes(59)
      setSeconds(59)
    } else {
      setRunningState(false)
    }
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
    <div
      className="
      from-gray-900
      via-gray-700
      to-gray-800
        bg-gradient-to-b
        grid
        place-content-center
        h-screen
        gap-4
        text-center
        font-tilt
      "
    >
      {!runningState && (
        <span className="text-6xl text-white shadow-text-neon">
          Set the timer:
        </span>
      )}
      <div className="flex items-center gap-4 justify-center">
        <label htmlFor="initial-hours" className="flex flex-col w-32 h-32 text-color-one  shadow-text-neon">
          <span className="text-3xl">Hours</span>
          <input
            type="text"
            pattern="/\d/"
            name="setHours"
            id="initial-hours"
            min="0"
            value={hours}
            onChange={handleNumberChange}
            disabled={runningState}
            className="text-center text-6xl rounded select-none bg-transparent border-color-one shadow-text-neon p-0"
          />
        </label>
        <label htmlFor="initial-minutes" className="flex flex-col w-32 h-32 text-color-one  shadow-text-neon">
          <span className="text-3xl">Minutes</span>
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
            className="text-center text-6xl rounded select-none bg-transparent border-color-one  shadow-text-neon p-0"
          />
        </label>
        <label htmlFor="initial-seconds" className="flex flex-col w-32 h-32 text-color-one  shadow-text-neon">
          <span className="text-3xl ">Seconds</span>
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
            className="text-center text-6xl rounded select-none bg-transparent border-color-one  shadow-text-neon p-0"
          />
        </label>
      </div>
      <div className="flex justify-around">
        <button
          onClick={initTimer}
          disabled={runningState || !hours && !minutes && !seconds}
          className="bg-color-four transform hover:bg-color-three hover:-translate-y-1 hover:shadow-2xl focus:bg-color-five focus:translate-y-1 rounded-full py-2 px-4 disabled:bg-gray-400 disabled:transform-none disabled:shadow-none"
        >
            Start
        </button>
        <button
          onClick={pauseTimer}
          disabled={!runningState}
          className="bg-color-four transform hover:bg-color-three hover:-translate-y-1 hover:shadow-2xl focus:bg-color-five focus:translate-y-1 rounded-full py-2 px-4 disabled:bg-gray-400 disabled:transform-none disabled:shadow-none"
        >
            Pause
        </button>
        <button
          onClick={stopTimer}
          disabled={!runningState}
          className="bg-color-four transform hover:bg-color-three hover:-translate-y-1 hover:shadow-2xl focus:bg-color-five focus:translate-y-1 rounded-full py-2 px-4 disabled:bg-gray-400 disabled:transform-none disabled:shadow-none"
        >
            Stop
        </button>
      </div>
    </div>
  )
}

export default App
