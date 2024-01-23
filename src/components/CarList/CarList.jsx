import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdverts, selectFavorites } from "../../redux/selectors";
import { getAdvertsThunk, toggleFavoriteThunk } from "../../redux/operations";
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
import hearts from "../../icons/hearts.svg";
import { Modal } from "rsuite";
import ModalHeader from "rsuite/esm/Modal/ModalHeader";
import ModalBody from "../Modal/ModalBody";

const CarList = ({ selectedFilters }) => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const favorites = useSelector(selectFavorites);

  const [page, setPage] = useState(1);
  const perPage = 12;
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    dispatch(getAdvertsThunk(page, perPage));
  }, [dispatch, page]);

  const displayedAdverts = adverts.slice(0, page * perPage);

  const filteredAdverts = displayedAdverts.filter((car) => {
    const makeCondition =
      !selectedFilters.make || car.make === selectedFilters.make;
    const priceCondition =
      !selectedFilters.maxPrice || car.rentalPrice <= selectedFilters.maxPrice;

    return makeCondition && priceCondition;
  });

  const handleHeartClick = (car) => {
    dispatch(toggleFavoriteThunk(car));
  };

  const handleOpen = (data) => {
    setSelectedCar(data);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleLoadMore = () => {
    if (filteredAdverts.length >= page * perPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <StyledCarList>
        {filteredAdverts.map(
          ({
            id,
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
          }) => (
            <StyledCarCard key={id}>
              <StyledImgContainer>
                <StyledImg src={img} alt={model} />
                <StyledHeart
                  onClick={() =>
                    handleHeartClick({
                      id,
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
                    })
                  }
                >
                  <use
                    href={`${hearts}#icon-heart-${
                      favorites.some((favorite) => favorite.id === id)
                        ? "active"
                        : "normal"
                    }`}
                  ></use>
                </StyledHeart>
              </StyledImgContainer>
              <StyledCarTitle>
                <p>
                  {make} <span>{model}</span>, {year}
                </p>
                <p>${rentalPrice}</p>
              </StyledCarTitle>
              <StyledCarDescr>
                {address} | {rentalCompany} | {type} | {fuelConsumption} |
                {engineSize}
              </StyledCarDescr>
              <StyledLearnMore
                onClick={() =>
                  handleOpen({
                    id,
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
                  })
                }
              >
                Learn more
              </StyledLearnMore>
            </StyledCarCard>
          )
        )}
      </StyledCarList>
      {filteredAdverts.length >= page * perPage && (
        <StyledLoadMore onClick={handleLoadMore}>Load more</StyledLoadMore>
      )}

      <Modal open={open} onClose={handleClose}>
        <ModalHeader />
        <Modal.Body>
          <ModalBody data={selectedCar} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CarList;
