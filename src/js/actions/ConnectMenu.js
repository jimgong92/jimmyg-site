import types from '../constants/ConnectMenu';

const actions = {
  moveLeft: () => {
    return { type: types.MOVE_LEFT };
  },
  moveRight: () => {
    return { type: types.MOVE_RIGHT };
  },
  selectConnection: () => {
    return { type: types.SELECT_CONNECTION };
  }
}

export default actions;
