import { useContext } from "react";
import { ContextReducer } from "../context";
import Counter from "./Counter";
export default function () {
  const { count, incrementHandler, decrementHandler } =
    useContext(ContextReducer);

  return (
    <>
      <Counter
        title={"Reducer + UseContext"}
        count={count}
        increment={incrementHandler}
        decrement={decrementHandler}
      />
    </>
  );
}
