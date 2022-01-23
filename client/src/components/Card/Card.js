import React from "react";
import { Link } from "react-router-dom";
import animalImage from "../../assets/images";
import star from "../../assets/svg/star.svg";
import "./Card.css";
function Card({ animal }) {
  const { image, slug, title, price } = animal;
  return (
    <Link to={`/product/${slug}`} className="Card">
      <img className="main-img" src={animalImage[image]} />
      <h4>{title}</h4>
      <div className="card-start">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </div>
      <div className="card-price">
        <p>CAD $</p>
        <h4>{price}</h4>
      </div>
      <div className="card-prime">
        <span>prime</span> FREE delivery by{" "}
        <span className="bold">Tuesday, Feb 16</span>
      </div>
    </Link>
  );
}

export default Card;
