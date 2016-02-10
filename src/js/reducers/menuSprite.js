import { MOVE_UP, MOVE_DOWN } from '../constants/MenuSprite';

const MAX_MENU_INDEX = require('../containers/default').selectionItems.length - 1;

const initialState = {
  position: 0
};

export default function menuSprite(state = initialState, action) {
  switch (action.type) {
    case MOVE_UP:
      if (state.position > 0){
        state.position--;
      }
      return {
        position: state.position
      };
    case MOVE_DOWN:
      if (state.position < (MAX_MENU_INDEX)){
        state.position++;
      }
      return {
        position: state.position
      };
    default:
      return state;
  }
};
