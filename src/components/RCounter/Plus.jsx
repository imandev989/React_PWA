import { type } from "@testing-library/user-event/dist/type";
import { useDispatch, useSelector } from "react-redux";
import { DEC, INC } from "../../redux/actions";

export default function Plus() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: INC });
        }}
      >
        +
      </button>
    </div>
  );
}
