import React from "react";
import "./CategoryIcon.css";
import Edit from "./edit.png";

const Card = props => (
  <div>
    <a href="#" className="edit" {...props}> <img src={Edit} alt="edit" /></a>
  </div>
)

export default Card;
