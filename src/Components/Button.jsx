export function Button({ onClick, disabled, text }) {

  return (
    <button
      onClick={ onClick }
      disabled={ disabled }
      className="
        text-yellow-300
        border-yellow-300
        rounded-2xl
        border
        py-1
        px-2
        text-neon
        text-neon-on
        text-2xl
        transform
        transition-neon
        sm:py-2
        sm:px-4
        sm:text-4xl
        hover:text-yellow-200
        hover:border-yellow-500
        hover:shadow-2xl
        hover:-translate-y-0.5
        focus:text-yellow-500
        focus:border-yellow-200
        focus:translate-y-1.5
        disabled:text-gray-400
        disabled:border-gray-400
        disabled:bg-transparent
        disabled:shadow-none
        disabled:transform-none
        disabled:text-neon-off
      "
    >
      { text }
    </button>
  );
}
