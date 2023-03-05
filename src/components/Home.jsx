import React from "react";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";
import ProductsToShowOnSale from "./cards/ProductsToShowOnSale";
import CarouselImages from "./carousel/CarouselImages";
import SearchAutocomplete from "./navbar/SearchAutocomplete";

const Home = ({ darkMode }) => {
  const { onProductAdded } = useContext(CardContext);
  return (
    <>
      <SearchAutocomplete darkMode={darkMode} />
      <CarouselImages darkMode={darkMode} />
      <ProductsToShowOnSale
        onProductAdded={onProductAdded}
        darkMode={darkMode}
      />
    </>
  );
};

export default Home;
