import { createStore, combineReducers,  applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import formReducer from '../reducers/formReducr';
import guideReducer from '../reducers/guideReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  guide: guideReducer
})

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}

export default configureStore;