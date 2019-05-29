import { GET_GUIDES } from '../actions/actionTypes';

const initialState = {
  guides: [],
  ownGuides: [] 
}

const guidesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case GET_GUIDES:
      return {
        guides: [...payload]
      }
    default:
      return {
        ...state
      }
  }
}

export default guidesReducer;