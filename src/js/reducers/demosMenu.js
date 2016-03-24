import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MAKE_SELECTION } from '../constants/DemosMenu';

const initialState = {
  rowPosition: 0,
  colPosition: 0,
  items: [
    {
      projectName: 'twitbox',
      href: 'http://twitbox.jimmyg.xyz',
      src: 'https://github.com/twitbox/twitbox-client'
    }
  ]
};
const MAX_MENU_INDEX = initialState.items.length - 1;

export default function demosMenu(state = initialState, action) {
  switch (action.type) {
    case MOVE_UP:
      if (state.rowPosition > 0){
        state.rowPosition--;
      }
      return {
        rowPosition: state.rowPosition,
        colPosition: state.colPosition,
        items: state.items
      };
    case MOVE_DOWN:
      if (state.rowPosition < MAX_MENU_INDEX){
        state.rowPosition++;
      }
      return {
        rowPosition: state.rowPosition,
        colPosition: state.colPosition,
        items: state.items
      };
    case MOVE_LEFT:
      return {
        rowPosition: state.rowPosition,
        colPosition: state.colPosition === 1 ? 0 : state.colPosition,
        items: state.items
      };
    case MOVE_RIGHT:
      return {
        rowPosition: state.rowPosition,
        colPosition: state.colPosition === 0 ? 1 : state.colPosition,
        items: state.items
      };
    case MAKE_SELECTION:
      const target = state.colPosition === 0 ? 'href' : 'src';
      window.open(state.items[state.rowPosition][target]);
      return {
        rowPosition: state.rowPosition,
        colPosition: state.colPosition,
        items: state.items
      };
    default:
      return state;
  }
};
