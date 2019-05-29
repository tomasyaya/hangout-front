import { HANDLE_CHANGE, HANDLE_SUBMIT } from './actionTypes';
import guideService from '../../lib/guide-service';
import { checkEmptyFields } from '../../helpers/validations';

export const handleChange = event => dispatch => {
  const { name, value } = event.target;
  dispatch({
    type: HANDLE_CHANGE,
    payload: {
      body: {
        [name]: value
      },
      emptyObj: false,
      validation: false
    }
  }) 
}

export const handleSubmit = (event, body, fields) => async dispatch => {
  event.preventDefault();

  try {
    if(checkEmptyFields(fields)){
      dispatch({
        type: HANDLE_SUBMIT,
        payload: {
          validation: true
        }
      })
      return
    }
    await guideService.createGuide(body)
    dispatch({
      type: HANDLE_SUBMIT,
      payload: {
        validation: false
      }
    })
  }
  catch(err) {
    console.log(err)
  }
}