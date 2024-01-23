import styled from "styled-components";

export const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  padding-bottom: 5px;

  span {
    color: var(--accent);
    padding-left: 12px;
    font-weight: 900;
  }
`;

export const StyledSubTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 500;
  text-align: center;

  padding-bottom: 40px;
`;

export const StyledDescr = styled.p`
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 30px;
  text-align: center;

  span {
    color: var(--accent);
    font-weight: 700;
  }
`;

export const StyledListTitle = styled.h2`
  display: flex;
  justify-content: center;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  padding: 10px 0 50px;
  gap: 50px;
  row-gap: 5px;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  text-align: justify;
  h3 {
    color: var(--accent);
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const StyledHomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 12px;
  margin: 0 auto 20px;

  font-size: 20px;
  font-weight: 600;

  color: var(--white);
  background-color: var(--accent);
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-out;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:active {
    background-color: var(--hover);
  }
`;
