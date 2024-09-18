import { useContext } from "react";
import { ContextUseState } from "../context";
import Counter from "./Counter";

export default function CounterUseContextUseState() {
  const { count, incrementHandler, decrementHandler } =
    useContext(ContextUseState);

  return (
    <Counter
      title={"UseState + UseContext"}
      count={count}
      increment={incrementHandler}
      decrement={decrementHandler}
    />
  );
}
