import { MOVE_LEFT, MOVE_RIGHT, MAKE_SELECTION } from '../constants/ConnectMenu';

const initialState = {
  activePosition: 0,
  items: [
    {
      logoName: 'twitter',
      href: 'https://twitter.com/jimmyg___'
    },
    {
      logoName: 'envelope',
      href: 'mailto:gong.jim@gmail.com'
    },
    {
      logoName: 'linkedin',
      href: 'https://www.linkedin.com/in/jimgong92'
    },
    {
      logoName: 'facebook',
      href: 'https://www.facebook.com/jimmy.gong.39'
    },
    {
      logoName: 'github',
      href: 'https://github.com/jimgong92'
    }
  ]
};
const MAX_MENU_INDEX = initialState.items.length - 1;

export default function connectMenu(state = initialState, action) {
  switch (action.type) {
    case MOVE_LEFT:
      if (state.position > 0){
        state.position--;
      }
      return {
        position: state.position,
        items: state.items
      };
    case MOVE_RIGHT:
      if (state.position < MAX_MENU_INDEX){
        state.position++;
      }
      return {
        position: state.position,
        items: state.items
      };
    default:
      return state;
  }
};
