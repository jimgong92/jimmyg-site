import types from '../constants/DemoMenu';

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
  selectDemo: () => {
    return { type: types.SELECT_DEMO };
  }
}

export default actions;
