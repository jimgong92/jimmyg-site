import types from '../constants/ConnectMenu';

const actions = {
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
