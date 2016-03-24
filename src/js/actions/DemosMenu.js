import types from '../constants/DemosMenu';

const actions = {
  moveUp: () => {
    return { type: types.DEMO_MOVE_UP };
  },
  moveDown: () => {
    return { type: types.DEMO_MOVE_DOWN };
  },
  moveLeft: () => {
    return { type: types.DEMO_MOVE_LEFT };
  },
  moveRight: () => {
    return { type: types.DEMO_MOVE_RIGHT };
  },
  makeSelection: () => {
    return { type: types.DEMO_SELECT };
  }
}

export default actions;
