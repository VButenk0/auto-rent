import React, { useState } from "react";
import Container from "../../components/Container/Container";
import CarList from "../../components/CarList/CarList";
import Filters from "../../components/Filters/Filters";

const Catalog = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    make: "",
    maxPrice: null,
  });

  return (
    <Container>
      <Filters setSelectedFilters={setSelectedFilters} />
      <CarList selectedFilters={selectedFilters} />
    </Container>
  );
};

export default Catalog;
