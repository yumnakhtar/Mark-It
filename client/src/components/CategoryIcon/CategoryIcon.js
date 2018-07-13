import React from "react";
import "./CategoryIcon.css";
import Delete from "./delete.png";
import Edit from "./edit.png";

const Card = props => (
  <div>
    <a href="#" className="delete" {...props}> <img src={Delete} alt="delete" /></a>


    {/* <a href="#" className="edit" onClick={props.handleEdit}> <img src={Edit} alt="edit" /></a> */}
  </div>
)

export default Card;
