import { combineReducers } from 'redux';
import menuSprite from './menuSprite';
import connectMenu from './connectMenu';

const rootReducer = combineReducers({
  menuSprite, connectMenu
});

export default rootReducer;
