import { combineReducers } from 'redux';
import homeMenu from './homeMenu';
import connectMenu from './connectMenu';

const rootReducer = combineReducers({
  homeMenu, connectMenu
});

export default rootReducer;
