import styled from 'styled-components';

const StyledParagraph = styled.p`
  display: ${({ hide }) => hide ? 'none' : 'block'};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color || "#000000" };
  font-size: ${({ fontSize }) => fontSize || 'initial'};
  &:hover {
    color: ${({ colorHov }) => colorHov };
  }
`;

export const Paragraph = ({
  children, hide, margin, padding, color, colorHov, fontSize
}) => {
  return (
    <StyledParagraph
      hide={hide} margin={margin} padding={padding} 
      color={color} colorHov={colorHov} fontSize={fontSize}
    >
      {children}
    </StyledParagraph>
  )
}