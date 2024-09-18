import { useContext } from "react";
import { ContextCustomHook } from "../context";
import Counter from "./Counter";

export default function CounterCustomHookUseContext() {
  const { count, incrementHandler, decrementHandler } =
    useContext(ContextCustomHook);
  return (
    <>
      <Counter
        title={"Custom Hook + UseContext"}
        count={count}
        increment={incrementHandler}
        decrement={decrementHandler}
      />
    </>
  );
}
