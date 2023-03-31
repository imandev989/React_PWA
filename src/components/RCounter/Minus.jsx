import { useDispatch, useSelector } from "react-redux";
import { DEC, INC } from "../../redux/actions";

export default function Minus() {
  const dispatch = useDispatch();

  return (
    <div>
      {" "}
      <button
        onClick={() => {
          dispatch({ type: DEC });
        }}
      >
        -
      </button>
    </div>
  );
}
