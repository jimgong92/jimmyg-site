import types from '../constants/MenuSprite';

const actions = {
  moveUp: function() {
    return { type: types.MOVE_UP };
  },
  moveDown: function() {
    return { type: types.MOVE_DOWN };
  }
}

export default actions;
