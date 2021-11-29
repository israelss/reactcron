import { NeonText } from "./NeonText";
import { Responsive } from "./Responsive";

export function Title({ runningState }) {
  const logoClasses = "mb-4 text-[8rem] sm:text-[10rem] text-yellow-500";
  return (
    <Responsive extraClasses="md:py-6 lg:py-16">
      <span className="text-5xl sm:text-6xl">
        <div>
          <NeonText runningState={ runningState } extraClasses="text-yellow-500">
            It's pizza time!
          </NeonText>
          <NeonText runningState={ runningState } extraClasses="text-red-600 ml-4">
            love
          </NeonText>
        </div>
        <div>
          <NeonText runningState={ runningState } extraClasses={ logoClasses }>
            food
          </NeonText>
        </div>
        <NeonText runningState={ !runningState } extraClasses="text-gray-300">
          Set the timer:
        </NeonText>
      </span>
    </Responsive>
  );
}
