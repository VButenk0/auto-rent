import React from "react";
import Container from "../../components/Container/Container";
import CarList from "../../components/CarList/CarList";
import Filters from "../../components/Filters/Filters";

const Catalog = () => {
  return (
    <Container>
      <Filters />
      <CarList />
    </Container>
  );
};

export default Catalog;
