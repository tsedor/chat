import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MessageContainer = styled.div`
  ${props => !props.my ? "background-color: #068587" : "background-color: #4FB99F"}
  border-radius: 4px;
  ${props => !props.my ? "color: #FFF" : "color: #112F41"}
  font-size: 16px;
  margin: 4px;
  ${props => props.my && "margin-left: auto"}
  max-width: 90%;
  padding: 8px;
`;

const Username = styled.span`
  color: #555;
  font-size: 1.2rem;
`;

const Message = ({ author, my, text }) => {
  return (
    <Fragment>
      <MessageContainer my={my}>{text}</MessageContainer>
      <Username>{!my && author}</Username>
    </Fragment>
  )
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  my: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Message;