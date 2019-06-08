import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { login } from '../actions';

const Button = styled.button`
  background-color: #112F41;
  border: 1px solid #112F41;
  color: #EFEFEF;
  font-size: 1.4rem;
  padding: 4px 10px;
  position: relative;
  &:active {
    top: 1px;
  }
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  margin: 3px;
`;

const Input = styled.input`
  border: 1px solid #112F41;
  font-size: 1.6rem;
  margin: 3px;
  padding: 4px;
`;

const LoginContainer = styled.div`
  align-items: center;  
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Login = ({ login, usernameR }) => {
  const [username, setUsername] = useState('');
  return (
    <LoginContainer>
      {usernameR !== '' && <Redirect to="/" />}
      <H2>Podaj swoje imię:</H2>
      <Input type="text" value={username} onKeyPress={ev => {if (ev.key === 'Enter' && username.trim() !== '') {login(username)}}} onChange={ev => setUsername(ev.target.value)} />
      <Button onClick={() => username.trim() !== '' && login(username)}>Zaloguj się</Button>
    </LoginContainer>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  usernameR: state.username 
})

const mapDispatchToProps = dispatch => ({
  login: username => dispatch(login(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);