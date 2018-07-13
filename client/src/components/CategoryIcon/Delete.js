import React from "react";
import "./CategoryIcon.css";
import Delete from "./delete.png";

const Card = props => (
  <div>
    <a href="#" className="delete" {...props}> <img src={Delete} alt="delete" /></a>
  </div>
)

export default Card;
