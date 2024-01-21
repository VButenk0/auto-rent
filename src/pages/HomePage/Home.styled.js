import styled from "styled-components";

export const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  padding-bottom: 10px;

  span {
    color: var(--accent);
    padding-left: 8px;
  }
`;

export const StyledSubTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 500;

  padding-bottom: 40px;
`;

export const StyledDescr = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 20px;
  text-align: center;
`;

export const StyledList = styled.ul`
  display: grid;
  flex-direction: column;
  padding: 10px 0 40px;
  gap: 10px;

  span {
    color: var(--accent);
    font-size: 16px;
    font-weight: 500;
  }
`;
