import io from 'socket.io-client';
import { cancel, call, fork, put, take } from 'redux-saga/effects'

import { logout, newMessage, sendMessage, login } from '../actions';
import { eventChannel } from 'redux-saga';

function connect() {
  const socket = io('https://chat.sedor.pl/');
  //const socket = io('http://localhost:2037');
  return new Promise (resolve => {
    socket.on('connect', () => {
      resolve(socket);
    })
  })
}

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on('newmessage', data => {
      emit(newMessage(data))
    });
    return () => {}
  })
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  while (true) {
    const { payload } = yield take(`${sendMessage}`);
    socket.emit('message', payload);
  }
}

function* handleIO(socket) {
  yield fork(write, socket);
  yield fork(read, socket);
}

function* flow() {
  while (true) {
    
    let { payload } = yield take(`${login}`);
    const socket = yield call(connect);

    socket.emit('login', {username: payload});  
    const task = yield fork(handleIO, socket);

    yield take(`${logout}`);
    yield cancel(task);

    socket.emit('logout');
  }
}

export default function* rootSaga() {
  yield fork(flow);
}