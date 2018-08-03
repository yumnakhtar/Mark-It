import React from "react";
import "./CategoryIcon.css";
import Edit from "./edit.png";

const Card = props => (
    <a href="#" className="edit" {...props}> <img src={Edit} className="edit-pen" alt="edit" /></a>
)

export default Card;
