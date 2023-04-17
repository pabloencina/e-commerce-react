import { Paper } from "@mui/material";
import React from "react";

const Item = ({ item, darkMode }) => {
  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: darkMode ? "#EDF67D" : "#564592",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "60%",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
        }}
      />
    </Paper>
  );
};

export default Item;
