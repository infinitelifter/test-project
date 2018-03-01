import { combineReducers } from 'redux'
import FetchDataReducer from './reducer_data'

const rootReducer = combineReducers({
  data: FetchDataReducer
});

export default rootReducer;