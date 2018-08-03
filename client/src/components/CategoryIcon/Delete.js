import React from "react";
import "./CategoryIcon.css";
import Delete from "./delete.png";

const Card = props => (
    <a href="#" className="delete" {...props}> <img src={Delete} className="delete-bin" alt="delete" /></a>
)

export default Card;
