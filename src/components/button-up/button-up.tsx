import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";

// interface ButtonUpProps {}

export const ButtonUp: React.FunctionComponent = () => {
  return (
    <Link to="header">
      <button className="up">
        <AiOutlineArrowUp />
      </button>
    </Link>
  );
};

export default ButtonUp;
