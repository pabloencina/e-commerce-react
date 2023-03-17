import React from "react";
import CardContextProvider from "../context/CardContext";
import App from "./App";

function Index() {
  return (
    <CardContextProvider>
      <App />
    </CardContextProvider>
  );
}

export default Index;
