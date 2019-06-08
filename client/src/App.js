import React from 'react';
import styled from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import reducer from './reducers';

import Header from './components/Header';
import ChatBox from './components/ChatBox';
import rootSaga from './sagas';
import Login from './components/Login';

const AppContainer = styled.div`
  box-shadow: 0 0 2px 0 #112F41;
  color: #112F41;
  height: 600px;
  margin: 0 auto;
  position: relative;
  width: 400px;
  @media (max-width: 410px) {
    height: 100vh;
    width: 100%;
  }
`;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <AppContainer>
          <Header />{store.getState().username.trim() === '' && <Redirect to="/login" />}
          <Route exact path="/" component={ChatBox} />
          <Route path="/login" component={Login} />
        </AppContainer>
      </Provider>
    </Router>
  )
}

export default App;