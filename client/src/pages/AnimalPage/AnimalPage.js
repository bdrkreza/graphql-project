import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import animalImage from "../../assets/images";
import star from "../../assets/svg/star.svg";
import "./AnimalPage.css";

const ANIMAL_QUERY = gql`
  query Animal($slug: String!) {
    animal(slug: $slug) {
      id
      image
      title
      rating
      price
      description
      slug
      stock
      onSale
    }
  }
`;

function AnimalPage() {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(ANIMAL_QUERY, {
    variables: {
      slug: slug,
    },
  });

  if (loading) {
    return <div className="text-danger text-center">Loading....</div>;
  }
  if (error) {
    return <div className="text-danger text-center">Error......</div>;
  }

  return (
    <div className="py-5">
      <Container>
        <div className="animal">
          <img
            className="animal-img"
            src={animalImage[data?.animal.image]}
            style={{ marginRight: "1rem" }}
          />


          <div className="text-container">
            <h1>{data?.animal.title}</h1>
            <div className="star-container">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <div className="rating-stock-container">
                <p>1402 rating</p>
                <p>{data?.animal.stock} in stock</p>
              </div>
            </div>
            <div className="about-container">
              <h4>About this Animal</h4>
              {data?.animal.description}
            </div>
            <div className="cart-container border">
            <p className="price">
              <span>CAD$ {data?.animal.price}</span>
            </p>
            <p className="delivery-time">
              FREE delivery: Thursday, Feb 25 Details
              <button className="buy-now-btn" style={{ marginTop: "2rem" }}>
                Add to Cart
              </button>
              <button>Buy Now</button>
            </p>
          </div>
          </div>

          
        </div>
      </Container>
    </div>
  );
}

export default AnimalPage;
