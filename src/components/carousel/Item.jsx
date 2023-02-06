import { Paper } from "@mui/material";
import React from "react";

const Item = ({ item }) => {
  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EDF67D ",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "50%",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
        }}
      />
      {/* <div
        className="description"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p>{item.title}</p>
      </div> */}

      {/* <Button variant="contained"> Check it out</Button> */}
    </Paper>
  );
};

export default Item;
