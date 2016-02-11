import { MOVE_UP, MOVE_DOWN, MAKE_SELECTION, CLOSE_MODAL } from '../constants/MenuSprite';
import { selectionItems } from '../containers/default';

const MAX_MENU_INDEX = selectionItems.length - 1;
const initialState = {
  openModal: null,
  position: 0,
  selectedAction: selectionItems[0].handleSelect
};

export default function menuSprite(state = initialState, action) {
  switch (action.type) {
    case MOVE_UP:
      if (state.position > 0){
        state.position--;
      }
      return {
        openModal: state.openModal,
        position: state.position,
        selectedAction: selectionItems[state.position].handleSelect
      };
    case MOVE_DOWN:
      if (state.position < (MAX_MENU_INDEX)){
        state.position++;
      }
      return {
        openModal: state.openModal,
        position: state.position,
        selectedAction: selectionItems[state.position].handleSelect
      };
    case MAKE_SELECTION:
      if (state.openModal === null) {
        state.selectedAction();
        return {
          openModal: selectionItems[state.position].itemName,
          position: state.position,
          selectedAction: state.selectedAction
        };
      }
    case CLOSE_MODAL:
      return {
        openModal: null,
        position: state.position,
        selectedAction: state.selectedAction
      };
    default:
      return state;
  }
};
