import types from '../constants/DemosMenu';

const actions = {
  moveUp: () => {
    return { type: types.MOVE_UP };
  },
  moveDown: () => {
    return { type: types.MOVE_DOWN };
  },
  moveLeft: () => {
    return { type: types.MOVE_LEFT };
  },
  moveRight: () => {
    return { type: types.MOVE_RIGHT };
  },
  makeSelection: () => {
    return { type: types.MAKE_SELECTION };
  }
}

export default actions;
