import { css, keyframes } from 'styled-components';

const theme = {
  webWidth: '1200px',
  gray1: "rgba(58, 58, 58, 0.7)",
  gray2: "rgba(58, 58, 58, 0.8)",
  black: "rgb(58, 58, 58)"
}

export default theme;

// flex-box
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetweenStart = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

// background
export const backgroundImage = css`
  background-image: ${({ src }) => `url(${src})`};
  background-position: left top;
  background-size: ${({ size }) => size || "100% 100%"};
  background-repeat: no-repeat;
`;

// animations
const fadeUp = keyframes`
  from {
    transform: translateY(20px);
    visibility: hidden;
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    visibility: visible;
    opacity: 1;
  }
`;

export const aniFadeUp = css`
  visibility: hidden;
  opacity: 0;
  animation: ${fadeUp} .7s ease-in-out forwards;
  animation-delay: ${({ aniDelay }) => aniDelay || "0"}; 
`;