import { createAction } from 'redux-act';

export const connected = createAction('connection established');
export const login = createAction('login');
export const logout = createAction('logout');
export const newMessage = createAction('incoming message');
export const sendMessage = createAction('send new message');