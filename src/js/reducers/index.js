import { combineReducers } from 'redux';
import homeMenu from './homeMenu';
import connectMenu from './connectMenu';
import demoMenu from './demoMenu';

const rootReducer = combineReducers({
  homeMenu, connectMenu, demoMenu
});

export default rootReducer;
