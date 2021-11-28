import { Input } from "./Input";
import { Responsive } from "./Responsive";

export function InputBar({ inputs, onChange, disabled }) {
  return (
    <Responsive extraClasses="md:py-8 lg:py-10">
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
    </Responsive>
  );
}
