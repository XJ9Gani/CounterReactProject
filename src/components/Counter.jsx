import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Stack,
} from "react-bootstrap";
export default function Counter({ title, count, decrement, increment }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardBody>
          <h1 className="text-center">
            <Badge bg="secondary">{count}</Badge>
          </h1>
          <Stack direction="vertical" gap={2} className="align-content-center">
            <Button variant="success" onClick={increment}>
              +
            </Button>
            <Button variant="danger" onClick={decrement}>
              -
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
