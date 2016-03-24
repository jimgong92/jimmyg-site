import types from '../constants/HomeMenu';

const actions = {
  moveUp: () => {
    return { type: types.HOME_MOVE_UP };
  },
  moveDown: () => {
    return { type: types.HOME_MOVE_DOWN };
  },
  makeSelection: (itemName) => {
    return { type: types.HOME_SELECT, itemName: itemName };
  },
  closeModal: () => {
    return { type: types.CLOSE_MODAL };
  }
}

export default actions;
