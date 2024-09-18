import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Counter from "./Counter";
export default function CounterUseStateProps() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <Row className="g-4">
        <Col lg={4} md={4} sm={6} xs={12}>
          <Counter
            title={"Use State + props"}
            count={count}
            increment={incrementHandler}
            decrement={decrementHandler}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Counter
            title={"Use State + props"}
            count={count}
            increment={incrementHandler}
            decrement={decrementHandler}
          />
        </Col>
      </Row>
    </>
  );
}
