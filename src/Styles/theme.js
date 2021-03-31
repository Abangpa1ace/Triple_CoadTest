import { css } from 'styled-components';

const theme = {
  webWidth: '1200px',
  gray1: "rgba(58, 58, 58, 0.7)",
  gray2: "rgba(58, 58, 58, 0.8)",
  black: "rgb(58, 58, 58)"
}

export default theme;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexAlign = css`
  display: flex;
  align-items: center;
`;