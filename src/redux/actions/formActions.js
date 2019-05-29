import { HANDLE_CHANGE, HANDLE_SUBMIT } from './actionTypes';
import guideService from '../../lib/guide-service';

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

export const handleSubmit = (event, body) => async dispatch => {
  event.preventDefault();
  try {
    await guideService.createGuide(body)
    dispatch({
      type: HANDLE_SUBMIT
    })
  }
  catch(err) {
    console.log(err)
  }
}