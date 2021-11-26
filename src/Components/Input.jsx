export default function Input({ value, onChange, disabled, label, placeholder }) {
  return (
    <label
      htmlFor="initial-hours"
      className="text-blue-600 flex flex-col w-24 h-24 sm:w-32 sm:h-32 text-neon text-neon-on"
    >
      <span className="text-2xl sm:text-3xl">{ label }</span>
      <input
        id="initial-hours"
        type="text"
        pattern="/\d/"
        name={ label }
        value={ value }
        onChange={ onChange }
        disabled={ disabled }
        placeholder={ placeholder }
        className="
          p-0
          rounded
          bg-transparent
          shadow-neon-sm
          text-neon-on
          text-center
          text-5xl
          transition-neon
          sm:text-6xl
          focus:border-current
          placeholder-shown:text-neon-off
          disabled:text-red-500
        "
      />
    </label>
  );
}
