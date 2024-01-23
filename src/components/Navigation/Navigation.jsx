import React from "react";
import { IoCarSport } from "react-icons/io5";
import {
  StyledLogo,
  StyledNavLink,
  StyledNavigation,
} from "./Navigation.styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledLogo to={"/"}>
        <IoCarSport style={{ fontSize: "42px", color: "#3470ff" }} />
        <h2>AutoRent</h2>
      </StyledLogo>
      <nav>
        <StyledNavLink to={"/"}>Home</StyledNavLink>
        <StyledNavLink to={"/catalog"}>Catalog</StyledNavLink>
        <StyledNavLink to={"/favorites"}>Favorites</StyledNavLink>
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;
