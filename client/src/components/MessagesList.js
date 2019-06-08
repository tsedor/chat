import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Message from './Message';

const MessagesListContainer = styled.div`
  align-items: flex-start;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: no-wrap;
  height: 560px;
  overflow-x: auto;
  padding: 10px 10px 60px 10px;
  position: relative;
  top: 0;
  @media (max-width: 400px) {
    height: calc(100vh - 39px)
  }
`;

const MessagesList = ({ messages }) => {
  return (
    <MessagesListContainer>
      {messages.map((message, key) => (
      <Message key={key} text={message.message} author={message.author} my={message.author === 'me' ? true : false} />
      ))}
    </MessagesListContainer>
  )
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.object
  )
}

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps)(MessagesList);