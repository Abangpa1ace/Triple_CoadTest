import React, { useEffect, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { Paragraph } from '../../../Shared/StyledTags';
import { achieveTripInfo } from '../MainData';
import { anifadeDown, flexBetweenStart, flexCenter } from '../../../Styles/theme';

const DURATION = 7000;

const SectionAchieve = () => {
  console.log('render');

  const [tripCount, setTripCount] = useState({
    people: 0,
    review: 0,
    program: 0,
  })

  const raiseTripCount = useCallback(
    (key, max) => {
      const stepTime = DURATION / max;
      const intervalCount = setInterval(() => {
        if (tripCount[key] < max) {
          setTripCount({
            ...tripCount,
            [key]: tripCount[key] += 1,
          })
        }}, stepTime)
      return () => clearInterval(intervalCount);
    }, []
  )

  useEffect(() => {
    for (let key in tripCount) {
      raiseTripCount(key, achieveTripInfo[key].max);
    }
  }, [tripCount, raiseTripCount]);

  return (
    <AchieveContainer>
      <AchieveWrapper>
        <AchieveImage>
          <img src="/Image/triple@2x.png" alt="achieve-triple-img" />
          <Paragraph
            color={({ theme }) => theme.gray1}
            fontSize="15px"
          >
            {new Date().getFullYear()}년 {new Date().getMonth()}월 기준
          </Paragraph>
        </AchieveImage>
        <AchieveText>
          <AchieveCounter aniDelay=".1s">
            {Object.keys(achieveTripInfo).map((key) => {
              const { desc } = achieveTripInfo[key];
              return (
                <Paragraph
                  margin="0 0 20px"
                  color={({ theme }) => theme.black} 
                  fontSize="36px"
                >
                  <strong>{tripCount[key]}만 명</strong>의 {desc}
                </Paragraph>
              )
            })}
          </AchieveCounter>
          <AchieveAwards aniDelay=".2s">
            <AwardsItem src={"/Image/play-store@2x.png"}>
              <Paragraph
                color={({ theme }) => theme.gray2}
                fontSize="14px"
              >
                2018 구글 플레이스토어<br />
                올해의 앱 최우수상 수상
              </Paragraph>
            </AwardsItem>
            <AwardsItem src={"/Image/app-store@2x.png"} last>
              <Paragraph
                color={({ theme }) => theme.gray2}
                fontSize="14px"
              >
                2018 애플 앱스토어<br />
                오늘의 여행앱 선정
              </Paragraph>
            </AwardsItem>
          </AchieveAwards>
        </AchieveText>
      </AchieveWrapper>
    </AchieveContainer>
  )
}

const AchieveContainer = styled.section`
  min-width: ${({ theme }) => theme.webWidth};    // Requirements
  padding: 140px 0 100px;
  background: #ffffff;
`;

const AchieveWrapper = styled.div`
  ${flexBetweenStart};
  width: 1040px;
  margin: 0 auto;
`;

const AchieveImage = styled.div`
  ${anifadeDown};
  width: 400px;
  text-align: center;
  visibility: hidden;
  opacity: 0;

  img {
    width: 100%;
  }
`;

const AchieveText = styled.div`
  margin: 0 0 0 40px;
`;

const AchieveCounter = styled.div`
  ${anifadeDown};
  visibility: hidden;
  opacity: 0;
`;

const AchieveAwards = styled.div`
  ${flexCenter};
  visibility: hidden;
  opacity: 0;
  ${anifadeDown};
  margin: 50px 0 0;

`;

const AwardsItem = styled.div`
  ${flexCenter};
  height: 54px;
  margin-right: ${({ last }) => last ? "0" : "39px"};
  background-image: ${({ src }) => `url(${src})`};
  background-position: left top;
  background-size: 54px 54px;
  background-repeat: no-repeat;

  p {
    padding: 0 0 0 62px;
    line-height: 22px;
    font-weight: bold;
  }
`;

export default SectionAchieve
