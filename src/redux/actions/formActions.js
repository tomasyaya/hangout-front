import { HANDLE_CHANGE, HANDLE_SUBMIT } from './actionTypes';

export const handleChange = event => dispatch => {
  const { name, value } = event.target;
  dispatch({
    type: HANDLE_CHANGE,
    payload: {
      body: {
        [name]: value
      },
      emptyObj: false
    }
  }) 
}

export const handleSubmit = event => dispatch => {
  event.preventDefault();
  dispatch({
    type: HANDLE_SUBMIT
  })
}