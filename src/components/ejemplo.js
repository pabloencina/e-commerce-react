import { v4 as uuidv4 } from "uuid";
import cardIndumentaria from "./images/card-indumentaria.jpg";

const dataArray = [
  {
    id: uuidv4(),
    name: "Helsinki",
    category: "",
    sale: true,
    description: "Stylist apartment in center of the city",
    price: 5200,
    image: cardIndumentaria,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Turku",
    category: "",
    sale: true,
    description: "Nice apartment in center of Helsinki",
    price: 8000,
    image: cardIndumentaria,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Helsinki",
    price: 2500,
    category: "",
    sale: true,
    description: "Arty interior in 1900 wooden house",
    image: cardIndumentaria,
    stock: 2,
  },
];

export default dataArray;
