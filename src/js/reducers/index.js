import { combineReducers } from 'redux';
import homeMenu from './homeMenu';
import connectMenu from './connectMenu';
import demosMenu from './demosMenu';

const rootReducer = combineReducers({
  homeMenu, connectMenu, demosMenu
});

export default rootReducer;
