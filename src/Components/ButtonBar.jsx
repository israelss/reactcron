import { Button } from "./Button";
import { Responsive } from "./Responsive";

export function ButtonBar({ buttons }) {
  return (
    <Responsive>
      <div className="grid justify-items-center grid-cols-3 gap-4">
        {
          buttons.map(({ text, onClick, disabled }) => (
            <Button
              key={ text }
              text={ text }
              onClick={ onClick }
              disabled={ disabled }
            />
          ))
        }
      </div>
    </Responsive>
  );
}
