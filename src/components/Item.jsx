import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const item = ({ item }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={item.Img} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>{item.detail}</Card.Text>
      <Card.Text>{item.category}</Card.Text>
      <link to={`/item/${item.id}`}>
        <Button variant="primary">Go somewhere</Button>
      </link>
    </Card.Body>
  </Card>
);
