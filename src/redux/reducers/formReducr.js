import { HANDLE_CHANGE, HANDLE_SUBMIT } from '../actions/actionTypes';

const initialState = {
  emptyObj: true,
  body: {},
  validation: false
}

const formReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case HANDLE_CHANGE:
      const { body, emptyObj } = payload;
      return{
        ...state,
        body: {
          ...state.body,
          ...body
        },
        emptyObj,
        validation: false
      }
    case HANDLE_SUBMIT:
      const { validation } = payload
      return {
        ...state,
        body: {},
        emptyObj: true,
        validation 
      }  
    default:
      return{
        ...state
      }
  }
}

export default formReducer;