import { createStore } from 'redux';

import { userReducer } from './userReducer';

const storeValues = {
  login: 'developer21',
  password: '123456',
  user: { login: '', password: '', loggedIn: false },
};

const store = createStore(userReducer, storeValues);

export default store;
