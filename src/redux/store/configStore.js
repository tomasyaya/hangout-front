import { createStore, combineReducers,  applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import formReducer from '../reducers/formReducr';


const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer
})

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}

export default configureStore;