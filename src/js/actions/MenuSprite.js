import types from '../constants/MenuSprite';

const actions = {
  moveUp: () => {
    return { type: types.MOVE_UP };
  },
  moveDown: () => {
    return { type: types.MOVE_DOWN };
  },
  makeSelection: (itemName) => {
    return { type: types.MAKE_SELECTION, itemName: itemName };
  },
  closeModal: () => {
    return { type: types.CLOSE_MODAL };
  }
}

export default actions;
