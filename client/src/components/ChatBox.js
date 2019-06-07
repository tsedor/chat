import React from 'react';
import styled from 'styled-components';

import MessagesList from './MessagesList';
import NewMessageBox from './NewMessageBox';

const ChatContainer = styled.div`
  font-size: 1.6rem;
`;

const ChatBox = () => {
  return (
    <ChatContainer>
      <MessagesList />
      <NewMessageBox />
    </ChatContainer>
  )
}

export default ChatBox;