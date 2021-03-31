import React, { useState } from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../../Shared/StyledTags';

const SectionAchieve = () => {
  const [tripCount, setTripCount] = useState({
    people: 0,
    review: 0,
    program: 0,
  })

  return (
    <AchieveContainer>
      <AchieveWrapper>
        <AchieveImage>

        </AchieveImage>
        <AchieveCounter>

        </AchieveCounter>
        <AchieveAwards>

        </AchieveAwards>
      </AchieveWrapper>
    </AchieveContainer>
  )
}

const AchieveContainer = styled.section`
`;

const AchieveWrapper = styled.div`
  min-width: ${({ theme }) => theme.webWidth};    // Requirements
  margin: 0 auto;
`;

const AchieveImage = styled.div``;

const AchieveCounter = styled.div``;

const AchieveAwards = styled.div``;

export default SectionAchieve
