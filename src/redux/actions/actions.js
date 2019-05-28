import { GET_USER, LOGOUT } from './actionTypes';
import authService from '../../lib/auth-service';

export const getUser = () => async dispatch => {
  try {
    const user = await authService.me()
    if(user) {
      dispatch({
        type: GET_USER,
        payload: {
          log: true,
          userInfo: user
        }
      })
      return
    }
    if(!user) {
      dispatch({
        type: GET_USER,
        payload: {
          log: false,
          userInfo: user
        }
      })
      return
    }
  }
  catch(err) {
    console.log(err)
  }
}

export const logout = () => async dispatch => {
  try {
    await authService.logout()
    dispatch({
      type: LOGOUT
    })
  }
  catch(err) {
    console.log(err)
  }
}

//  ACTION LOGIN IS USE FOR SIGNUP AND LOGIN

export const login = (body, signup) => async dispatch => {
  try {
    if(!signup) { 
      await authService.login(body)
    }
    if(signup) { 
      await authService.signup(body)
    }
    const user = await authService.me()
    dispatch({
      type: GET_USER,
      payload: {
        log: true,
        userInfo: user
      }
    })
  }
  catch(err) {
    console.log(err)
  }
}
