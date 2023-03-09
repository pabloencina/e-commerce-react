import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { collection, getDocs } from "firebase/firestore";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "../../cssStyles/btnSearch.css";
import { db } from "../../firebase";

export default function SearchAutocomplete({ darkMode }) {
  const [productsName, setProductsName] = useState([]);

  const [showProduct, setShowProduct] = useState(false);

  const getAllCard = () => {
    const productCollection = collection(db, "Productos");

    getDocs(productCollection)
      .then((snapshot) => {
        setProductsName(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console.log(error.msg));
  };

  useEffect(() => {
    getAllCard();
  }, []);

  const options = productsName.map((option) => option.name);

  const textFieldRef = useRef(null);

  const onSearch = () => {
    console.log(textFieldRef.current.children[1].children[0].value);
    setShowProduct(true);
  };

  const onKeyDown = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      onSearch();
    }
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
      }}
    >
      <Autocomplete
        sx={{
          width: 400,
          display: "flex",
          backgroundColor: "white",
          color: "white",
        }}
        freeSolo
        id="search-autocomplete"
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            ref={textFieldRef}
            onKeyDown={onKeyDown}
            label="Buscar"
            style={{ color: "red" }}
          />
        )}
      />
      <Button
        title="Buscador"
        className={darkMode ? "btnSearchModeLight" : "btnSearchModeDark"}
        onClick={onSearch}
      >
        <SearchOutlinedIcon
          className={darkMode ? "btnSearchModeLight" : "btnSearchModeDark"}
        />
      </Button>
      {/* {showProduct.map((product) => console.log(product))} */}
    </Box>
  );
}

//es un after mio que grabe y lo subi a YT:https://youtu.be/akqCQS96oQw
