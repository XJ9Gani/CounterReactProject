import { useReducer } from "react";
import { reducer } from "../reducer";
import { ContextReducer } from "../context";
import { Row, Col } from "react-bootstrap";
import CounterReducerContextWrapper from "./CounterReducerContextWrapper";
export default function CounterReducerContextContainer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const incrementHandler = () => dispatch({ type: "increment" });
  const decrementHandler = () => dispatch({ type: "decrement" });
  return (
    <>
      <ContextReducer.Provider
        value={{ count: state.count, incrementHandler, decrementHandler }}
      >
        <Row className="g-4">
          <Col lg={4} md={4} sm={6} xs={12}>
            <CounterReducerContextWrapper />
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <CounterReducerContextWrapper />
          </Col>
        </Row>
      </ContextReducer.Provider>
    </>
  );
}
