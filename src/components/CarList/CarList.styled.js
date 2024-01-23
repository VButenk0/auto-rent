import styled from "styled-components";

export const StyledCarList = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 274px);
  column-gap: 29px;
  row-gap: 50px;
  padding-bottom: 100px;
`;

export const StyledCarCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 426px;
`;

export const StyledImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 268px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;

  border-radius: 14px;
  margin-bottom: 14px;
`;

export const StyledImg = styled.img`
  position: relative;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledHeart = styled.svg`
  position: absolute;
  z-index: 10;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledCarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 8px 0;

  color: var(--black);
  font-size: 16px;
  font-weight: 500;

  span {
    color: var(--accent);
  }
  p {
    margin: 0;
  }
  p:first-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 5px;
  }
`;

export const StyledCarDescr = styled.p`
  display: flex;
  height: 40px;
  color: var(--transp-black);
  font-size: 12px;
  line-height: 2;
  padding-bottom: 28px;
`;

export const StyledLearnMore = styled.button`
  height: 44px;

  font-size: 14px;
  font-weight: 600;

  color: var(--white);
  background-color: var(--accent);
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover,
  &:active {
    background-color: var(--hover);
  }
`;

export const StyledLoadMore = styled.button`
  display: flex;
  color: var(--accent);
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  cursor: pointer;

  margin: 0 auto;
  padding-bottom: 40px;

  transition: all 0.2s ease-out;

  &:hover,
  &:active {
    color: var(--hover);
  }
`;
