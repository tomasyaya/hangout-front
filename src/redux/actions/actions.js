import { GET_USER } from './actionTypes';
import authService from '../../lib/auth-service';

export const getUser = () => async dispatch => {
  try {
    const user = await authService.me()
    console.log('user', user)
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