import types from '../constants/ConnectMenu';

const actions = {
  moveLeft: () => {
    return { type: types.CONNECT_MOVE_LEFT };
  },
  moveRight: () => {
    return { type: types.CONNECT_MOVE_RIGHT };
  },
  selectConnection: () => {
    return { type: types.CONNECT_SELECT };
  }
}

export default actions;
