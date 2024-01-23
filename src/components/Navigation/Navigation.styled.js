import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 10px 20px;
  margin-bottom: 40px;
  border-bottom: 2px solid #3470ff;

  nav {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const StyledLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;

  &:hover,
  &:active {
    text-decoration: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 10px;
  transition: all 0.2s ease-out;

  &.active {
    color: white;
    background-color: var(--accent);
    text-decoration: none;
  }
  &:hover,
  &:active {
    color: white;
    background-color: var(--hover);
    text-decoration: none;
  }
`;
