import React from "react";
import ProductsToShowOnSale from "./cards/ProductsToShowOnSale";
import CarouselImages from "./carousel/CarouselImages";
import useAccountant from "./hooks/useAccountant";
import SearchAutocomplete from "./navbar/SearchAutocomplete";

const Home = () => {
  const { onProductAdded } = useAccountant(0);
  return (
    <>
      <SearchAutocomplete />
      <CarouselImages />
      <ProductsToShowOnSale onProductAdded={onProductAdded} />
    </>
  );
};

export default Home;
