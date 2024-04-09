import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";
import data from "../data/items.json";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams;
  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      if (!id) {
        setItems(data);
      } else {
        const filtered = data.filtered((i) => i.category === Number(id));
        setItems(filtered);
      }
    });
  }, [id]);
  return (
    <Container className="mt-4">
      <ItemList items={items} />
    </Container>
  );
};
