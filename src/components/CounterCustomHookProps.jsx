import { Col, Row } from "react-bootstrap";
import Counter from "./Counter";
import { useCounter } from "../hooks";
export default function CounterCustomHookProps() {
  const initValue = 0;
  const [count, incrementHandler, decrementHandler] = useCounter(initValue);
  return (
    <>
      <Row className="g-4">
        <Col lg={4} md={4} sm={6} xs={12}>
          <Counter
            title={"Custom Hook + Props"}
            count={count}
            increment={incrementHandler}
            decrement={decrementHandler}
          ></Counter>
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Counter
            title={"Custom Hook + Props"}
            count={count}
            increment={incrementHandler}
            decrement={decrementHandler}
          ></Counter>
        </Col>
      </Row>
    </>
  );
}
