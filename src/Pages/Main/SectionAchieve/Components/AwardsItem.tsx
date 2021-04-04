import React from 'react'
import styled from 'styled-components';
import { Paragraph } from '../../../../Shared/StyledTags';
import { backgroundImage, flexCenter } from '../../../../Styles/theme/theme';

interface AwardsProps {
  store: string;
  image: string;
  desc: string;
}

const AwardsItem: React.FC<AwardsProps> = ({ store, image, desc }) => {
  return (
    <ItemContainer src={image} size="54px 54px" >
      <Paragraph
        color={({ theme }) => theme.gray2}
        fontSize="14px"
      >
        2018 {store}<br />
        {desc}
      </Paragraph>
    </ItemContainer>
  )
};

const ItemContainer = styled.div`
  ${flexCenter};
  ${backgroundImage};
  height: 54px;
  margin: 0 39px 0 0;

  &:last-child { margin: 0; };

  p {
    padding: 0 0 0 62px;
    line-height: 22px;
    font-weight: bold;
  }
`;

export default AwardsItem
