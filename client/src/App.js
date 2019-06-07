import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import ChatBox from './components/ChatBox';

const AppContainer = styled.div`
  box-shadow: 0 0 2px 0 #112F41;
  color: #112F41;
  height: 600px;
  margin: 0 auto;
  position: relative;
  width: 400px;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <ChatBox />
    </AppContainer>
  )
}

export default App;