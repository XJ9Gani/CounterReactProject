import { useCounter } from "../hooks";
import Counter from "./Counter";

export default function CounterWithCustomHook() {
  const initValue = 0;
  const [count, incrementHandler, decrementHandler] = useCounter(initValue);

  return (
    <>
      <Counter
        title={"Counter Custom Hook"}
        count={count}
        increment={incrementHandler}
        decrement={decrementHandler}
      />
    </>
  );
}
