import Input from "./Input";

export default function InputBar({ inputs, onChange, disabled }) {
  return (
    <div className="grid justify-items-center grid-cols-3 gap-4">
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
