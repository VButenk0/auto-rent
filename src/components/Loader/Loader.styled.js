import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const bounceAnimation = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0, 0, 0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

export const GlobalStyle = styled.div`
  body {
    font-family: "futura", sans-serif;
    margin: 0;
    color: var(--accent);
    background: var(--white);
    background-image: url(https://www.simmosoffroadtours.com/static/images/topography.svg);
    background-size: 100% auto;
    background-repeat: repeat-y;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const LoaderContainer = styled.div`
  width: 140px;
  height: 140px;
  margin: 120px auto;
  text-align: center;
  color: var(--black);
`;

export const Bounce = styled.div`
  margin-top: 30px;
  animation: ${bounceAnimation} 1.5s infinite;
`;

export const Wheel = styled.svg`
  fill: var(--accent);
  animation: ${spinAnimation} 2s linear infinite;
`;

export const LoadingText = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

export const LoaderStyle = styled.div`
  ${Container} {
    ${LoaderContainer} {
      ${Bounce} {
        ${Wheel} {
        }
      }

      ${LoadingText} {
      }
    }
  }
`;
