import { Row, Stack, Col, Container } from "react-bootstrap";
import {
  AppHeader,
  CounterWithReducer,
  CounterWithUseState,
  CounterWithCustomHook,
  CounterUseStateProps,
  CounterCustomHookProps,
  CounterReducerProps,
  CounterUseStateContextContainer,
  CounterReducerContextContainer,
  CounterCustomHookContainer,
} from "./components";

export default function App() {
  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main className="p-4 overflow-y-scroll">
        <Container>
          <Stack gap={4}>
            <Row className="g-4">
              <Col lg={12}>
                <h2>Counter Without Sharing state</h2>
              </Col>
            </Row>
            <Row className="g-4">
              <Col lg={4} md={4} sm={6} xs={12}>
                <CounterWithUseState />
              </Col>

              <Col lg={4} md={4} sm={6} xs={12}>
                <CounterWithCustomHook />
              </Col>

              <Col lg={4} md={4} sm={6} xs={12}>
                <CounterWithReducer />
              </Col>
            </Row>

            <hr />
            <Row className="g-4">
              <Col lg={12}>
                <h2>By Props</h2>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={12}>
                <CounterUseStateProps />
              </Col>
              <Col lg={12}>
                <CounterCustomHookProps />
              </Col>
              <Col lg={12}>
                <CounterReducerProps />
              </Col>
            </Row>

            <hr />
            <Row className="g-4">
              <Col lg={12}>
                <h2>By Context</h2>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={12}>
                <CounterUseStateContextContainer />
              </Col>
              <Col lg={12}>
                <CounterReducerContextContainer />
              </Col>
              <Col lg={12}>
                <CounterCustomHookContainer />
              </Col>
            </Row>
          </Stack>
        </Container>
      </main>
    </>
  );
}
