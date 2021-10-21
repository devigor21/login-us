const SET_USER = 'SET_USER';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
