import { useState } from "react";

const useHoverBtnNavbar = () => {
  const [isHover, setIsHover] = useState(false);

  const btnNavbar = {
    backgroundColor: isHover ? "white" : "#564592",
    color: isHover ? "#564592" : "white",
    textDecoration: "none",
    fontFamily: "Montserrat",
    borderRadius: "5%",
  };
  const handleMouseEnterBtnNavbar = () => {
    setIsHover(true);
  };
  const handleMouseLeaveBtnNavbar = () => {
    setIsHover(false);
  };

  return {
    isHover,
    setIsHover,
    handleMouseEnterBtnNavbar,
    handleMouseLeaveBtnNavbar,
    btnNavbar,
  };
};

export default useHoverBtnNavbar;
