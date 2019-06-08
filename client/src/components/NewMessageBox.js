import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { sendMessage } from '../actions';

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

const NewMessageBox = ({ sendMessage }) => {
  const [state, setState] = useState('');
  return (
    <NewMessageContainer>
      <InputMessage placeholder="Wpisz wiadomość" onKeyPress={ev => {if (ev.key === 'Enter' && state.trim() !== '') {sendMessage(state); setState('')}}} value={state} onChange={ev => setState(ev.target.value)} />
      <SendMessage onClick={ev => {if (state.trim() !== '') {sendMessage(state); setState('');}}}><SendImage src="send-button.svg" /></SendMessage>
    </NewMessageContainer>
  )
}

NewMessageBox.propTypes = {
  sendMessage: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  sendMessage: text => dispatch(sendMessage(text))
});

export default connect(null, mapDispatchToProps)(NewMessageBox);