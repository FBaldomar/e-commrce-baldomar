import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import data from "../data/items.json";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      const filter = data.find((i) => i.id === id);
      setItem(filter);
    });
  }, [id]);

  if (!item) return <div>loading</div>;
  return (
    <Container className="mt-4">
      <h1>{item.Name}</h1>
      <img src={item.img} alt="s" />
    </Container>
  );
};
