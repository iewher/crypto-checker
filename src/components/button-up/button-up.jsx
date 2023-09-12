import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";

export default function ButtonUp() {
  return (
    <Link to="header">
      <button className="up" href="#header">
        <AiOutlineArrowUp />
      </button>
    </Link>
  );
}
