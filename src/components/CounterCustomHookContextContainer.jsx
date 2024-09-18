import { useCounter } from "../hooks";
import { ContextCustomHook } from "../context";
import { Row, Col } from "react-bootstrap";
import CounterCustomHookContextWrapper from "./CounterCustomHookContextWrapper";
export default function CounterCustomHookContextContainer() {
  const [count, incrementHandler, decrementHandler] = useCounter(0);
  return (
    <>
      <ContextCustomHook.Provider
        value={{ count, incrementHandler, decrementHandler }}
      >
        <Row className="g-4">
          <Col lg={4} md={4} sm={6} xs={12}>
            <CounterCustomHookContextWrapper />
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <CounterCustomHookContextWrapper />
          </Col>
        </Row>
      </ContextCustomHook.Provider>
    </>
  );
}
