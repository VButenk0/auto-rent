import React from "react";
import {
  StyledCarAandF,
  StyledCarDescr,
  StyledCarSubTitle,
  StyledCarTags,
  StyledCarTitle,
  StyledConditionItem,
  StyledConditionsList,
  StyledImg,
  StyledImgContainer,
  StyledModalContainer,
  StyledRentalBtn,
} from "./ModalBody.styled";

const ModalBody = ({ data }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalConditions,
    description,
  } = data;

  return (
    <StyledModalContainer>
      <StyledImgContainer>
        <StyledImg src={img} alt={model} />
      </StyledImgContainer>
      <StyledCarTitle>
        {make} <span>{model}</span>, {year}
      </StyledCarTitle>
      <StyledCarTags>
        {address} | {rentalCompany} | Type: {type} | {mileage} | Fuel
        Consumption: {fuelConsumption} | Engine Size: {engineSize}
      </StyledCarTags>
      <StyledCarDescr>{description}</StyledCarDescr>
      <StyledCarSubTitle>Accessories and functionalities:</StyledCarSubTitle>
      <StyledCarAandF>
        {accessories[0]} | {accessories[1]} | {accessories[2]} | <br />
        {functionalities[0]} | {functionalities[1]} | {functionalities[2]}
      </StyledCarAandF>
      <StyledCarSubTitle>Rental Conditions: </StyledCarSubTitle>
      <StyledConditionsList>
        <StyledConditionItem>{rentalConditions[0]}</StyledConditionItem>
        <StyledConditionItem>{rentalConditions[1]}</StyledConditionItem>
        <StyledConditionItem>{rentalConditions[2]}</StyledConditionItem>
        <StyledConditionItem>
          Mileage: <span>{mileage}</span>
        </StyledConditionItem>
        <StyledConditionItem>
          Price: <span>{rentalPrice}</span>
        </StyledConditionItem>
      </StyledConditionsList>
      <StyledRentalBtn>
        <a href="tel:+380730000000">Rental car</a>
      </StyledRentalBtn>
    </StyledModalContainer>
  );
};

export default ModalBody;
