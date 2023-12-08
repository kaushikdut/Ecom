import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card-container">
      <img
        className="image"
        src={props.img}
        alt="Img"
        onClick={props.navigate}
      />
      <div className="details">
        <p>{props.name}</p>
      </div>
      <button onClick={props.btn} className="card-button">
        addToCart
      </button>
    </div>
  );
}

export default Card;
