import { CONNECT_MOVE_LEFT, CONNECT_MOVE_RIGHT, CONNECT_SELECT } from '../constants/ConnectMenu';

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
    case CONNECT_MOVE_LEFT:
      if (state.activePosition > 0){
        state.activePosition--;
      }
      return {
        activePosition: state.activePosition,
        items: state.items
      };
    case CONNECT_MOVE_RIGHT:
      if (state.activePosition < MAX_MENU_INDEX){
        state.activePosition++;
      }
      return {
        activePosition: state.activePosition,
        items: state.items
      };
    case CONNECT_SELECT:
      // Handle Key Press
      window.open(state.items[state.activePosition].href);
      return {
        activePosition: state.activePosition,
        items: state.items
      }
    default:
      return state;
  }
};
