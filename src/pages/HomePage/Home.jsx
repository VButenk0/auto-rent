import React from "react";
import {
  StyledDescr,
  StyledHomeButton,
  StyledList,
  StyledListItem,
  StyledListTitle,
  StyledSubTitle,
  StyledTitle,
} from "./Home.styled";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container>
        <StyledTitle>
          Welcome to the <span>AutoRent</span>
        </StyledTitle>
        <StyledSubTitle>
          - your reliable partner in the world of mobility in Ukraine!
        </StyledSubTitle>
        <StyledDescr>
          We are a professional company specializing in car rental,
          <br />
          offering an extended range of vehicles for your needs.
        </StyledDescr>
        <StyledListTitle>Our advantages:</StyledListTitle>
        <StyledList>
          <StyledListItem>
            <h3>Wide range of cars</h3>
            <p>
              You can choose the perfect car for your travels from our diverse
              fleet, including economical models, comfortable sedans, spacious
              crossovers, and luxury executive cars.
            </p>
          </StyledListItem>
          <StyledListItem>
            <h3>Flexible rental system</h3>
            <p>
              Our company offers various rental periods, including short-term
              and long-term leases. We strive to provide you with maximum
              comfort and meet your individual needs.
            </p>
          </StyledListItem>
          <StyledListItem>
            <h3>Fair and transparent conditions</h3>
            <p>
              Our rates include all necessary expenses, without hidden fees. You
              can be sure that the price you see is the price you pay.
            </p>
          </StyledListItem>
          <StyledListItem>
            <h3>High-level service</h3>
            <p>
              Our team of professionals is always ready to provide you with
              excellent service. We believe in an individual approach to each
              client and do everything possible for your comfort.
            </p>
          </StyledListItem>
          <StyledListItem>
            <h3>Safety and reliability</h3>
            <p>
              All our vehicles undergo regular technical inspections and
              maintenance to ensure your safety on the road.
            </p>
          </StyledListItem>
        </StyledList>
        <StyledDescr>
          Make your trip unforgettable with <span>AutoRent</span>.<br />
          Book your car today and feel the freedom of movement with us!
        </StyledDescr>
        <StyledHomeButton>
          <Link to="/catalog">Rent a car now</Link>
        </StyledHomeButton>
      </Container>
    </>
  );
};

export default Home;
