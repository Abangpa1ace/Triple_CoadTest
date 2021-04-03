import React from 'react';
import styled from 'styled-components';
import CounterNum from './Components/CounterNum';
import AwardsItem from './Components/AwardsItem';
import { Paragraph } from '../../../Shared/StyledTags';
import { achieveCountData, achieveAwardData } from '../MainData';
import { aniFadeUp, backgroundImage, flexCenter } from '../../../Styles/theme';

const SectionAchieve = () => {
  return (
    <AchieveContainer>
      <AchieveWrapper>
        <AchieveImage src="/Image/triple@2x.png">
          <Paragraph
            color={({ theme }) => theme.gray1}
            fontSize="15px"
          >
            {new Date().getFullYear()}년 {new Date().getMonth()}월 기준
          </Paragraph>
        </AchieveImage>
        <AchieveCounter aniDelay=".1s">
          {Object.keys(achieveCountData).map((key) => {
            const { desc, type, max } = achieveCountData[key];
            return (
              <Paragraph
                key={key}
                margin="0 0 20px"
                color={({ theme }) => theme.black} 
                fontSize="36px"
              >
                <CounterNum 
                  desc={desc}
                  type={type}
                  max={max}
                />의 {desc}
              </Paragraph>
            )
          })}
        </AchieveCounter>
          <AchieveAwardData aniDelay=".2s">
            {achieveAwardData.map((award) => {
              const { id, store, image, desc } = award;
              return <AwardsItem key={id} store={store} image={image} desc={desc} />
            })}
          </AchieveAwardData>
      </AchieveWrapper>
    </AchieveContainer>
  )
}

const AchieveContainer = styled.section`
  min-width: ${({ theme }) => theme.webWidth};    // Requirements
  background: #ffffff;
`;

const AchieveWrapper = styled.div`
  width: 1040px;
  margin: 0 auto;
`;

const AchieveImage = styled.div`
  ${backgroundImage};
  ${aniFadeUp};
  position: absolute;
  top: 150px;
  width: 400px;
  height: 330px;
  padding: 280px 0 0;
  text-align: center;
`;

const AchieveCounter = styled.div`
  ${aniFadeUp};
  margin: 0 0 0 623px;
  padding: 150px 0 0;
`;

const AchieveAwardData = styled.ul`
  ${flexCenter};
  ${aniFadeUp};
  margin: 50px 0 0 623px;
  padding: 0 0 140px;
`;

export default SectionAchieve;
