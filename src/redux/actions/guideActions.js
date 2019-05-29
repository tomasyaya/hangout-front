import { GET_GUIDES, HANDLE_SUBMIT } from './actionTypes';
import guideService from '../../lib/guide-service';
import { checkEmptyFields } from '../../helpers/validations';

export const getGuides = () => async dispatch => {
  try {
    const guides = await guideService.getGuides();
    dispatch({
      type: GET_GUIDES,
      payload: guides
    })
  }
  catch(err) {
    console.log(err)
  }
}

export const createGuide = (event, body, fields) => async dispatch => {
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
    await guideService.createGuide(body);
    const guides = await guideService.getGuides();
    dispatch({
      type: GET_GUIDES,
      payload: guides
    })
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

export const deleteGuide = id => async dispatch => {
  try {
    await guideService.deleteGuide(id);
    const guides = await guideService.getGuides();
    dispatch({
      type: GET_GUIDES,
      payload: guides
    })
  }
  catch(err){
    console.log(err)
  }
}