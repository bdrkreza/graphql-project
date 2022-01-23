import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import animals from "../../assets/images";
import "./CategoryDisplay.css";

const CATEGORY_QUERY = gql`
  {
    categories {
      id
      category
      image
      slug
    }
  }
`;
function CategoryDisplay() {
  const { loading, error, data } = useQuery(CATEGORY_QUERY);

  if (loading) {
   return <div className="text-danger text-center">Loading....</div>;
  }
  if (error) {
   return <div className="text-danger text-center">Error......</div>;
  }
  return (
    <div className="CategoryDisplay">
      <Container className="CategoryDisplay-container">
        {data?.categories.map((category) => {
          return (
            <Link
              to={`/products/${category.slug}`}
              className="CategoryDisplay-card-container"
            >
              <div className="CategoryDisplay-card">
                <img src={animals[category.image]} />
              </div>
              <h3>{category.category}</h3>
            </Link>
          );
        })}
      </Container>
    </div>
  );
}

export default CategoryDisplay;
