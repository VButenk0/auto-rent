import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import { removeFromFavorites } from "../../redux/slice";
import Container from "../../components/Container/Container";
import {
  StyledCarCard,
  StyledCarDescr,
  StyledCarList,
  StyledCarTitle,
  StyledHeart,
  StyledImg,
  StyledImgContainer,
  StyledLearnMore,
} from "../../components/CarList/CarList.styled";
import icons from "../../icons/icons.svg";
import { Modal } from "rsuite";
import ModalBody from "../../components/Modal/ModalBody";
import {
  StyledNoFavDescr,
  StyledNoFavTitle,
  StyledNoFavorites,
} from "./Favorites.styled";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleHeartClick = (car) => {
    dispatch(removeFromFavorites(car));
  };

  const handleOpen = (data) => {
    setSelectedCar(data);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Container>
      {favorites.length ? (
        <StyledCarList>
          {favorites.map((favorite) => (
            <StyledCarCard key={favorite.id}>
              <StyledImgContainer>
                <StyledImg src={favorite.img} alt={favorite.model} />
                <StyledHeart onClick={() => handleHeartClick(favorite)}>
                  <use href={`${icons}#icon-heart-active`}></use>
                </StyledHeart>
              </StyledImgContainer>
              <StyledCarTitle>
                <p>
                  {favorite.make} <span>{favorite.model}</span>, {favorite.year}
                </p>
                <p>${favorite.rentalPrice}</p>
              </StyledCarTitle>
              <StyledCarDescr>
                {favorite.address} | {favorite.rentalCompany} | {favorite.type}{" "}
                |{favorite.fuelConsumption} | {favorite.engineSize}
              </StyledCarDescr>
              <StyledLearnMore onClick={() => handleOpen(favorite)}>
                Learn more
              </StyledLearnMore>
            </StyledCarCard>
          ))}
        </StyledCarList>
      ) : (
        <StyledNoFavorites>
          <StyledNoFavTitle>You have no favorite cars</StyledNoFavTitle>
          <StyledNoFavDescr>
            Add some cars from the <Link to={"/catalog"}>Catalog</Link> to your
            Favorites to see them here
          </StyledNoFavDescr>
        </StyledNoFavorites>
      )}

      <Modal open={open} onClose={handleClose}>
        <Modal.Header />
        <Modal.Body>
          <ModalBody data={selectedCar} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Favorites;
