import React from 'react';
import styled from 'styled-components';
import SectionAchieve from './SectionAchieve'

const Main = () => {
  return (
    <MainPage>
      <SectionAchieve />
    </MainPage>
  )
}

const MainPage = styled.main`
  height: 100vh;
  background: #f0f0f0;
`;

export default Main
