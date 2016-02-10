import { MOVE_UP, MOVE_DOWN, MAKE_SELECTION } from '../constants/MenuSprite';
import { selectionItems } from '../containers/default';

const MAX_MENU_INDEX = selectionItems.length - 1;
const initialState = {
  position: 0,
  selectedAction: selectionItems[0].onClick
};

export default function menuSprite(state = initialState, action) {
  switch (action.type) {
    case MOVE_UP:
      if (state.position > 0){
        state.position--;
      }
      return {
        position: state.position,
        selectedAction: selectionItems[state.position].onClick
      };
    case MOVE_DOWN:
      if (state.position < (MAX_MENU_INDEX)){
        state.position++;
      }
      return {
        position: state.position,
        selectedAction: selectionItems[state.position].onClick
      };
    case MAKE_SELECTION:
      state.selectedAction();
      return state;
    default:
      return state;
  }
};
