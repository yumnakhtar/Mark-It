import React from "react";
import "./Card.css";

const Card = props => (
  <div>
    {props.allCards.map(each => (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{each.name}</h5>
          <p className="card-text">{each.description}</p>
          <a href={each.url} className="card-link">Card link</a>
        </div>
      </div>
    ))}
  </div>
)

export default Card;
