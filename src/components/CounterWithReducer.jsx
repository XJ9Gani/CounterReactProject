import { useReducer } from "react";
import { reducer } from "../reducer";
import Counter from "./Counter";
export default function CounterWithReducer() {
  const initState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initState);

  const incrementHandler = () => dispatch({ type: "increment" });
  const decrementHandler = () => dispatch({ type: "decrement" });
  return (
    <>
      <Counter
        title={"Counter Reducer"}
        count={state.count}
        increment={incrementHandler}
        decrement={decrementHandler}
      />
    </>
  );
}
