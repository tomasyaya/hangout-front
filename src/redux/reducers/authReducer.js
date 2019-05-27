import { GET_USER } from '../actions/actionTypes';

const initialState = {
  isLoggin: false,
  user: {}
}

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch(type) {
    case GET_USER:
      const { log, userInfo } = payload
      return {
        ...state,
        isLoggin: log,
        user: userInfo
      }
    default:
      return {
        ...state
      }
  }
}

export default authReducer;