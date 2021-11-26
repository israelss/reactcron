export default function Button({ onClick, disabled, text }) {

  return (
    <button
      onClick={ onClick }
      disabled={ disabled }
      className="
        text-yellow-300
        border-yellow-300
        rounded-2xl
        py-2
        px-4
        border
        text-neon
        text-neon-on
        text-3xl
        transform
        transition-neon
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
