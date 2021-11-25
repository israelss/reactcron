export default function Input(props) {
  const {
    value,
    onChange,
    disabled,
    label,
    placeholder,
  } = props;

  return (
    <label
      htmlFor="initial-hours"
      className="
      text-color-one
        shadow-text-neon
        flex
        flex-col
        w-24
        h-24
        sm:w-32
        sm:h-32
      "
    >
      <span className="text-2xl sm:text-3xl">{ label }</span>
      <input
        type="text"
        pattern="/\d/"
        name={ label }
        id="initial-hours"
        min="0"
        value={ value }
        onChange={ onChange }
        disabled={ disabled }
        placeholder={ placeholder }
        className="
          border-color-one
          p-0
          rounded
          bg-transparent
          shadow-neon-sm
          shadow-text-neon
          text-center
          text-5xl
          sm:text-6xl
          placeholder-shown:shadow-text-none
        "
      />
    </label>
  );
}
