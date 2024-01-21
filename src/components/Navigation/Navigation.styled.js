import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 10px 20px;
  margin-bottom: 20px;
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
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  padding: 5px 7px;
  border-radius: 10px;
  transition: all 0.2s ease-out;

  &.active {
    color: white;
    background-color: var(--accent);
  }
  &:hover {
    color: white;
    background-color: var(--hover);
  }
`;
