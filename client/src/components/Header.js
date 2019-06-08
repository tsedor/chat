import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #112F41;
  color: #FFF;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 10px;
`;

const Header = () => {
  return <HeaderContainer>Chat</HeaderContainer>
}

export default Header;