import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdverts } from "../../redux/selectors";
import { getAdvertsThunk } from "../../redux/operations";
import {
  StyledCarCard,
  StyledCarDescr,
  StyledCarList,
  StyledCarTitle,
  StyledHeart,
  StyledImg,
  StyledImgContainer,
  StyledLearnMore,
  StyledLoadMore,
} from "./CarList.styled";
import { nanoid } from "@reduxjs/toolkit";
import hearts from "../../icons/hearts.svg";

const CarList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  const [page, setPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    dispatch(getAdvertsThunk(page, perPage));
  }, [dispatch, page]);

  const startIndex = 0;
  const endIndex = page * perPage;
  const paginatedAdverts = adverts.slice(startIndex, endIndex);

  const handleLearnMoreClick = () => {};

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <StyledCarList>
        {paginatedAdverts.map(
          ({
            img,
            make,
            model,
            year,
            rentalPrice,
            address,
            rentaCompany,
            type,
            mileage,
            fuelConsumption,
            engineSize,
          }) => (
            <StyledCarCard key={nanoid()}>
              <StyledImgContainer>
                <StyledImg src={img} alt={model} />
                <StyledHeart width="18" height="18">
                  <use href={`${hearts}#icon-heart-normal`}></use>
                </StyledHeart>
              </StyledImgContainer>
              <StyledCarTitle>
                <p>
                  {make} <span>{model}</span>, {year}
                </p>
                <p>{rentalPrice}</p>
              </StyledCarTitle>
              <StyledCarDescr>
                {address} | {rentaCompany} | {type} | {mileage} |
                {fuelConsumption} | {engineSize}
              </StyledCarDescr>
              <StyledLearnMore onClick={handleLearnMoreClick}>
                Learn more
              </StyledLearnMore>
            </StyledCarCard>
          )
        )}
      </StyledCarList>
      {adverts.length >= endIndex && (
        <StyledLoadMore onClick={handleLoadMore}>Load more</StyledLoadMore>
      )}
    </>
  );
};

export default CarList;
