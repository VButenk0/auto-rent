import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;

  padding-bottom: 50px;

  input {
    color: var(--black);
    font-style: 18px;
    font-weight: 500;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
`;

export const StyledFormBtn = styled.button`
  background-color: var(--accent);
  border: none;
  border-radius: 12px;
  padding: 11px 44px;

  color: var(--white);
  font-size: 14px;
  font-weight: 600;

  transition: all 0.2s ease-out;

  &:hover,
  &:active {
    background-color: var(--hover);
  }
`;
