import { combineReducers } from "redux";
import useReducer from './user';
import themeReducer from './theme';

export default combineReducers({
  theme: themeReducer,
  user: useReducer,
});
