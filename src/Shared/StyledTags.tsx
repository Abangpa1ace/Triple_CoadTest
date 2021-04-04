import React from 'react';
import styled from 'styled-components';
import { ParagraphT } from './StyledTags.types';

const StyledParagraph = styled.p<ParagraphT>`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color || "#000000" };
  font-size: ${({ fontSize }) => fontSize || 'initial'};
  &:hover {
    color: ${({ colorHov }) => colorHov };
  }
`;

export const Paragraph: React.FC<ParagraphT> = ({
  children, margin, padding, color, colorHov, fontSize
}) => {
  return (
    <StyledParagraph
      margin={margin} padding={padding} 
      color={color} colorHov={colorHov} fontSize={fontSize}
    >
      {children}
    </StyledParagraph>
  )
}