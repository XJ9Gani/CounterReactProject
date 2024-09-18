import { useState } from "react";
import { ContextUseState } from "../context";
import CounterUseStateContextWrapper from "./CounterUseStateContectWrapper";
import { Row, Col } from "react-bootstrap";

export default function CounterUseStateContextContainer() {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <ContextUseState.Provider
        value={{ count, incrementHandler, decrementHandler }}
      >
        <Row className="g-4">
          <Col lg={4} mg={4} sm={6} xs={12}>
            <CounterUseStateContextWrapper />
          </Col>
          <Col lg={4} mg={4} sm={6} xs={12}>
            <CounterUseStateContextWrapper />
          </Col>
        </Row>
      </ContextUseState.Provider>
    </>
  );
}
