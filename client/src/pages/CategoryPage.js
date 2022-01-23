import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardDisplay from "../components/CardDisplay/CardDisplay";

const CATEGORY_QUERY = gql`
  query Category($slug: String!) {
    category(slug: $slug) {
      category
      animals {
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
  }
`;

function CategoryPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(CATEGORY_QUERY, {
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
console.log(data);
  return (
    <div className="py-5">
      <Container>
        <h1 className="text-capitalize">
          {data?.category.category}
          <CardDisplay animals={data?.category.animals} />
        </h1>
      </Container>
    </div>
  );
}

export default CategoryPage;
