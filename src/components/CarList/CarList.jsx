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
import hearts from "../../icons/hearts.svg";
import { Modal } from "rsuite";
import ModalHeader from "rsuite/esm/Modal/ModalHeader";
import ModalBody from "../Modal/ModalBody";

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

  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleOpen = (data) => {
    setSelectedCar(data);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <StyledCarList>
        {paginatedAdverts.map(
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
      {adverts.length >= endIndex && (
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
