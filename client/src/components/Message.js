import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  background-color: #068587;
  border-radius: 4px;
  color: #FFF;
  font-size: 16px;
  margin: 4px;
  ${props => !props.my && "margin-left: auto"}
  padding: 8px;
`;

const Message = ({ my }) => {
  return (
    <MessageContainer my={my}>Message</MessageContainer>
  )
}

export default Message;