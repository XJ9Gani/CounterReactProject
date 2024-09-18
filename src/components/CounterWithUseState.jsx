import { useState } from "react";
import Counter from "./Counter";

export default function CounterWithUseState() {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <>
        <Counter
          count={count}
          decrement={decrementHandler}
          increment={incrementHandler}
          title={"Counter UseState"}
        />
      </>
    </>
  );
}
