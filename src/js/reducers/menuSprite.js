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
        // Handle Key Press
        if (!action.itemName) {
          if (selectionItems[state.position].href) {
            window.open(selectionItems[state.position].href);
          }
          state.selectedAction();
          return {
            openModal: selectionItems[state.position].itemName,
            position: state.position,
            selectedAction: state.selectedAction
          };
        }
        // Handle Click
        for (let i = 0; i < selectionItems.length; i++) {
          let item = selectionItems[i];
          if (item.itemName === action.itemName) {
            state.openModal = item.itemName;
            state.position = i;
            state.selectedAction = selectionItems[state.position].handleSelect;
            state.selectedAction();
            return {
              openModal: state.openModal,
              position: state.position,
              selectedAction: state.selectedAction
            };
          }
        }

        return state;
      }
    case CLOSE_MODAL:
      document.body.onclick = null;

      return {
        openModal: null,
        position: state.position,
        selectedAction: state.selectedAction
      };
    default:
      return state;
  }
};
