import { useState } from "react";

const useCounter = (initCount) => {
  const [count, setCount] = useState(initCount);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };
  return [count, incrementHandler, decrementHandler];
};

export default useCounter;
