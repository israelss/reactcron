import Button from "./Button";

export default function ButtonBar(props) {
  const { buttons } = props;
  return (
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
  );
}
