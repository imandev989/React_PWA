import Plus from "./Plus";
import Minus from "./Minus";
import { useSelector } from "react-redux";

function RCounter() {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      counter : {counter}
      <Plus />
      <Minus />
    </div>
  );
}

export default RCounter;
