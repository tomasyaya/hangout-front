import { GET_GUIDES, GET_GUIDE } from '../actions/actionTypes';

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
    case GET_GUIDE:
      return {
        ...state,
        guide: payload
      }
    default:
      return {
        ...state
      }
  }
}

export default guidesReducer;