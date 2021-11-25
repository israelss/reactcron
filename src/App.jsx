import { useState } from 'react';
import { useInterval } from './hooks/useInterval';
import logo from './assets/logo.svg';
import Title from './Components/Title';
import InputBar from './Components/InputBar';
import ButtonBar from './Components/ButtonBar';
import { IS_NUMBER, within59, within999 } from './utils/utils';

function App() {
  const [runningState, setRunningState] = useState(false);
  const [pausedState, setPausedState] = useState(false);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const numberInputs = [
    { label: 'Hours', value: hours, placeholder: 'HH' },
    { label: 'Minutes', value: minutes, placeholder: 'MM' },
    { label: 'Seconds', value: seconds, placeholder: 'SS' },
  ];

  const buttons = [
    {
      text: 'Start',
      onClick: initTimer,
      disabled: runningState || !hours && !minutes && !seconds,
    },
    {
      text: 'Pause',
      onClick: pauseTimer,
      disabled: !runningState,
    },
    {
      text: 'Stop',
      onClick: stopTimer,
      disabled: !pausedState && !runningState,
    },
  ];

  const setValue = {
    Hours: (value) => setHours(within999(value)),
    Minutes: (value) => setMinutes(within59(value)),
    Seconds: (value) => setSeconds(within59(value)),
  };

  function handleNumberChange({ target: { name, value } }) {
    IS_NUMBER.test(value) && setValue[name](Number(value));
  }

  function countdown() {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    }
    else if (minutes > 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }
    else if (hours > 0) {
      setHours(hours - 1);
      setMinutes(59);
      setSeconds(59);
    } else {
      setRunningState(false);
    }
  }

  useInterval(countdown, runningState
    ? 1000
    : null);

  function initTimer() {
    if (!hours) setHours(0);
    if (!minutes) setMinutes(0);
    if (!seconds) setSeconds(0);
    setRunningState(true);
    setPausedState(false);
  }

  function pauseTimer() {
    setRunningState(false);
    setPausedState(true);
  }

  function stopTimer() {
    setRunningState(false);
    setPausedState(false);
    setHours('');
    setMinutes('');
    setSeconds('');
  }

  return (
    <div
      className="
        bg-gradient-to-b
        from-gray-900
        via-gray-700
        to-gray-800
        h-screen
        text-center
        grid
        place-content-center
        gap-4
        font-tilt
      "
    >
      { !runningState && <Title /> }
      <InputBar
        onChange={ handleNumberChange }
        disabled={ runningState }
        inputs={ numberInputs }
      />
      <ButtonBar buttons={ buttons } />
    </div>
  );
}

export default App;
