import { createReducer } from 'redux-act';
import { connected, login, newMessage, sendMessage } from '../actions';

const reducer = createReducer({
  [connected]: (state) => state.connected = true,
  [newMessage]: (state, payload) => ({...state, messages: [{author: payload.author, message: payload.message}, ...state.messages]}),
  [sendMessage]: (state, payload) => ({...state, messages: [{author: 'me', message: payload}, ...state.messages]}),
  [login]: (state, payload) => ({...state, username: payload})
}, {
  connected: false,
  messages: [],
  username: ''
});

export default reducer;