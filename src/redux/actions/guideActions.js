import { GET_GUIDES } from './actionTypes';
import guideService from '../../lib/guide-service';

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