import { useReducer } from "react";
import { reducer } from "../reducer";
import { Col, Row } from "react-bootstrap";
import Counter from "./Counter";
export default function CounterReducerProps() {
  const initState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initState);
  const incrementHandler = () => dispatch({ type: "increment" });
  const decrementHandler = () => dispatch({ type: "decrement" });
  return (
    <>
      <Row className="g-4">
        <Col lg={4} md={4} sm={6} xs={12}>
          <Counter
            title={"Reducer + Props"}
            increment={incrementHandler}
            decrement={decrementHandler}
            count={state.count}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Counter
            title={"Reducer + Props"}
            increment={incrementHandler}
            decrement={decrementHandler}
            count={state.count}
          />
        </Col>
      </Row>
    </>
  );
}
