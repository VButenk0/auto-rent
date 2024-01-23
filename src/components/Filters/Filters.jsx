import React, { useState } from "react";
import { Input, InputGroup, SelectPicker } from "rsuite";
import makes from "../../data/makes.json";
import {
  StyledForm,
  StyledFormBtn,
  StyledLabel,
  StyledSpan,
} from "./Filters.styled";

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
  const [selectedMinMileage, setSelectedMinMileage] = useState("");
  const [selectedMaxMileage, setSelectedMaxMileage] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedFilters({
      make: selectedMake,
      maxPrice: selectedMaxPrice,
      minMileage: selectedMinMileage,
      maxMileage: selectedMaxMileage,
    });
  };

  return (
    <StyledForm onSubmit={handleSearch}>
      <StyledSpan>
        <StyledLabel>Car brand</StyledLabel>
        <SelectPicker
          name="brand"
          data={data}
          size="lg"
          style={{ width: 224, height: 42 }}
          placeholder="Enter the text"
          value={selectedMake}
          onChange={(value) => setSelectedMake(value)}
        />
      </StyledSpan>
      <StyledSpan>
        <StyledLabel>Price/ 1 hour </StyledLabel>
        <SelectPicker
          name="price"
          data={prices}
          label="To"
          size="lg"
          searchable={false}
          style={{ width: 125, height: 42 }}
          placeholder="$"
          value={selectedMaxPrice}
          onChange={(value) => setSelectedMaxPrice(value)}
        />
      </StyledSpan>

      <StyledSpan>
        <StyledLabel>Сar mileage / km</StyledLabel>
        <InputGroup id="mileage" size="lg" style={{ width: 320 }}>
          <Input
            name="minMileage"
            type="number"
            placeholder="From"
            value={selectedMinMileage}
            onChange={(value) => setSelectedMinMileage(value)}
          />
          <Input
            name="maxMileage"
            type="number"
            placeholder="To"
            value={selectedMaxMileage}
            onChange={(value) => setSelectedMaxMileage(value)}
          />
        </InputGroup>
      </StyledSpan>
      <StyledFormBtn type="submit">Search</StyledFormBtn>
    </StyledForm>
  );
};

export default Filters;
