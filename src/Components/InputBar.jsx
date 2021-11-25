import Input from "./Input";

export default function InputBar(props) {
  const {
    inputs,
    onChange,
    disabled,
  } = props;

  return (
    <div className="flex items-center justify-center gap-4">
      {
        inputs.map(({ label, value, placeholder }) => (
          <Input
            key={ label }
            value={ value }
            onChange={ onChange }
            disabled={ disabled }
            label={ label }
            placeholder={ placeholder }
          />
        ))
      }
    </div>
  );
}
