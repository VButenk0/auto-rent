import styled from "styled-components";

export const StyledModalContainer = styled.div`
  padding: 0 20px;
`;

export const StyledImgContainer = styled.div`
  width: 100%;
  height: 248px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;

  border-radius: 14px;
  margin: 0 auto;
  padding-bottom: 14px;
`;

export const StyledImg = styled.img`
  position: relative;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledCarTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;

  span {
    color: var(--accent);
  }
`;

export const StyledCarTags = styled.p`
  display: flex;
  width: 70%;
  height: 40px;
  color: var(--transp-black);
  font-size: 12px;
  line-height: 2;
  padding-bottom: 14px;
`;

export const StyledCarDescr = styled.p`
  font-size: 14px;

  padding-bottom: 24px;
`;

export const StyledCarSubTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;

  padding-bottom: 8px;
`;

export const StyledCarAandF = styled.p`
  color: var(--transp-black);
  font-size: 12px;
  line-height: 2;
  padding-bottom: 14px;
`;

export const StyledConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  padding-bottom: 24px;
`;

export const StyledConditionItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 14px;
  background-color: #f9f9f9;
  border: none;
  border-radius: 35px;
  font-size: 12px;

  span {
    color: var(--accent);
  }
`;

export const StyledRentalBtn = styled.button`
  color: white;
  font-style: 14px;
  font-weight: 600;

  padding: 12px 50px;
  background-color: var(--accent);
  border: none;
  border-radius: 12px;

  transition: all 0.2s ease-out;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:active {
    color: var(--white);
    background-color: var(--hover);
  }
`;
