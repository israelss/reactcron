export function NeonText({ children, extraClasses, runningState }) {
  const classOnOff = `${runningState
    ? 'text-neon-on'
    : 'text-neon-off'}`;

  return (
    <span className={ `${classOnOff} ${extraClasses} text-neon transition-neon ` } data-content={ children }>
      { children }
    </span>
  );
}
