export default function Title({ runningState }) {
  const upperMessageStyle = `${runningState
    ? 'text-neon-on text-yellow-500'
    : 'text-neon-off'}`;

  const bottomMessageStyle = `${runningState
    ? 'text-neon-off'
    : 'text-neon-on'}`;

  return (
    <span className="text-5xl sm:text-6xl text-neon">
      <span className={ upperMessageStyle }>
        <p>
          <span className="transition-neon">
            It's pizza time!
          </span>
          <span className='ml-4 text-red-600 transition-neon'>
            love
          </span>
        </p>
        <p className="mb-4 text-[8rem] sm:text-[10rem] transition-neon">
          food
        </p>
      </span>
      <span className={ bottomMessageStyle }>
        <span className="text-gray-300 transition-neon">
          Set the timer:
        </span>
      </span>
    </span>
  );
}
