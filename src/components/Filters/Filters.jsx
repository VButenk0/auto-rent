import React, { useState } from "react";
import { SelectPicker } from "rsuite";
import makes from "../../data/makes.json";
import { StyledForm, StyledFormBtn } from "./Filters.styled";

const data = makes.map((item) => ({
  label: item,
  value: item,
}));

const prices = [
  30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190,
  200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340,
  350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490,
  500,
].map((item) => ({ label: item, value: item }));

const Filters = ({ setSelectedFilters }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedFilters({
      make: selectedMake,
      maxPrice: selectedMaxPrice,
    });
  };

  return (
    <StyledForm onSubmit={handleSearch}>
      <SelectPicker
        data={data}
        size="lg"
        style={{ width: 224, height: 42 }}
        placeholder="Enter the text"
        value={selectedMake}
        onChange={(value) => setSelectedMake(value)}
      />

      <SelectPicker
        label="To"
        data={prices}
        size="lg"
        searchable={false}
        style={{ width: 125, height: 42 }}
        placeholder="$"
        value={selectedMaxPrice}
        onChange={(value) => setSelectedMaxPrice(value)}
      />
      <StyledFormBtn type="submit">Search</StyledFormBtn>
    </StyledForm>
  );
};

export default Filters;
