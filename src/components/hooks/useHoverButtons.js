import { useState } from "react";

const useHoverButtons = () => {
  const [isHover, setIsHover] = useState(false);

  const buttonVerDetalle = {
    backgroundColor: isHover ? "white" : "#564592",
    color: isHover ? "#564592" : "white",
    //textDecoration: "line-through",
  };

  const buttonLogo = {
    imagenLogo: {
      width: "100px",
      //height: "200px",
      backgroundColor: isHover ? "#EDF67D" : "#564592",
    },
  };

  const buttonNavBar = {
    backgroundColor: isHover ? "#EDF67D" : "#564592",
    color: isHover ? "black" : "white",
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleMouseEnterVerDetalle = () => {
    setIsHover(true);
  };
  const handleMouseLeaveVerDetalle = () => {
    setIsHover(false);
  };
  return {
    isHover,
    setIsHover,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
    buttonVerDetalle,
    buttonLogo,
    buttonNavBar,
  };
};

export default useHoverButtons;
