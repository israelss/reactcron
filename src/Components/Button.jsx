export default function Button(props) {
  const {
    onClick,
    disabled,
    text,
  } = props;

  return (
    <button
      onClick={ onClick }
      disabled={ disabled }
      className="
        text-color-four
        border-color-four
        rounded-2xl
        py-2
        px-4
        border
        shadow-text-neon
        transform
        hover:text-color-three
        hover:border-color-five
        hover:shadow-2xl
        hover:-translate-y-1
        focus:text-color-five
        focus:border-color-three
        focus:translate-y-1
        disabled:text-gray-400
        disabled:border-gray-400
        disabled:bg-transparent
        disabled:shadow-none
        disabled:shadow-text-none
        disabled:transform-none
      "
    >
      { text }
    </button>
  );
}
