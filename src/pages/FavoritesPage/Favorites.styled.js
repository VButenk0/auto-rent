import styled from "styled-components";

export const StyledNoFavorites = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  padding-top: 100px;

  text-align: center;
`;

export const StyledNoFavTitle = styled.h3`
  font-size: 60px;
`;

export const StyledNoFavDescr = styled.p`
  font-size: 18px;
  font-weight: 500;

  transition: all 0.2s ease-out;

  a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;

    &:hover,
    &:active {
      color: var(--hover);
    }
  }
`;
