import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Spinner } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import MainHero from "../components/MainHero/MainHero";

const ANIMAL_QUERY = gql`
  {
    animals {
      id
      image
      title
      rating
      price
      slug
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(ANIMAL_QUERY);

  if (loading) {
    return (
      <div className="text-muted">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
        </div>
    );
  }
  if (error) {
    return <div>Error......</div>;
  }
  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data?.animals} />
    </div>
  );
}

export default LandingPage;
