import { useState } from 'react';
import { useInterval } from './hooks/useInterval';
import { Title, InputBar, ButtonBar, Banner } from './Components';
import { isNotANumber, within59, within999 } from './utils/utils';

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
    if (isNotANumber(value)) return;
    setValue[name](Number(value));
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
      setPausedState(false);
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
        font-tilt
        text-features
        text-center
        min-w-max
      "
    >
      <Banner />
      <div
        className="bg-brick-pattern min-h-screen grid place-content-center gap-4 w-screen min-w-max overflow-auto">
        <Title runningState={ runningState } />
        <InputBar
          onChange={ handleNumberChange }
          disabled={ runningState }
          inputs={ numberInputs }
        />
        <ButtonBar buttons={ buttons } />
      </div>
    </div>
  );
}

export default App;
