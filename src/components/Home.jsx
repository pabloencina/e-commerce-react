import React from "react";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";
import ProductsToShowOnSale from "./cards/ProductsToShowOnSale";
import CarouselImages from "./carousel/CarouselImages";
import SearchAutocomplete from "./navbar/SearchAutocomplete";

const Home = () => {
  const { onProductAdded } = useContext(CardContext);
  console.log(onProductAdded);
  return (
    <>
      <SearchAutocomplete />
      <CarouselImages />
      <ProductsToShowOnSale onProductAdded={onProductAdded} />
    </>
  );
};

export default Home;
