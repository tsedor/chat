import React from 'react';
import styled from 'styled-components';

const InputMessage = styled.input`
  border: none;
  color: #112F41;
  font-size: 1.6rem;
  padding: 14px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const NewMessageContainer = styled.div`
  border-top: 1px solid #112F41;
  bottom: 0;
  display: flex;
  position: absolute;
  width: 100%;
`;

const SendImage = styled.img`
  height: 16px;
  width: 16px;
`;

const SendMessage = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 14px;
  position: relative;
  &:active {
    top: 1px;
  }
`;

const NewMessageBox = () => {
  return (
    <NewMessageContainer>
      <InputMessage />
      <SendMessage><SendImage src="send-button.svg" /></SendMessage>
    </NewMessageContainer>
  )
}

export default NewMessageBox;