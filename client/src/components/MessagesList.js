import React from 'react';
import styled from 'styled-components';

import Message from './Message';

const MessagesListContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: no-wrap;
  height: 513px;
  align-items: flex-start;
  padding: 10px;
`;

const MessagesList = () => {
  return (
    <MessagesListContainer>
      <Message />
      <Message my />
      <Message />
    </MessagesListContainer>
  )
}

export default MessagesList;