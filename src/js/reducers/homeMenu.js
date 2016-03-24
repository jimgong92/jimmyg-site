import { HOME_MOVE_UP, HOME_MOVE_DOWN, HOME_SELECT, CLOSE_MODAL } from '../constants/HomeMenu';

const initialState = {
  openModalName: null,
  activePosition: 0,
  items: [
    { 
      itemName: 'About',
      href: null
    },
    {
      itemName: 'Blog',
      href: 'http://blog.jimmyg.xyz'
    },
    {
      itemName: 'Connect',
      href: null
    },
    {
      itemName: 'Demos',
      href: null
    }
  ]
};
const MAX_MENU_INDEX = initialState.items.length - 1;

export default function menuSprite(state = initialState, action) {
  switch (action.type) {
    case HOME_MOVE_UP:
      if (state.activePosition > 0){
        state.activePosition--;
      }
      return {
        openModalName: state.openModalName,
        activePosition: state.activePosition,
        items: state.items
      };
    case HOME_MOVE_DOWN:
      if (state.activePosition < (MAX_MENU_INDEX)){
        state.activePosition++;
      }
      return {
        openModalName: state.openModalName,
        activePosition: state.activePosition,
        items: state.items
      };
    case HOME_SELECT:
      if (state.openModalName === null) {
        // Handle Key Press
        if (!action.itemName) {
          if (state.items[state.activePosition].href) {
            window.open(state.items[state.activePosition].href);
          }
          else {
            state.openModalName = state.items[state.activePosition].itemName;
          }
          return {
            openModalName: state.openModalName,
            activePosition: state.activePosition,
            items: state.items
          };
        }
        // Handle Click
        for (let i = 0; i < state.items.length; i++) {
          let item = state.items[i];
          if (item.itemName === action.itemName) {
            // If modal, set openModalName
            if (item.href === null) {
              state.openModalName = item.itemName;
            }
            state.activePosition = i;
            return {
              openModalName: state.openModalName,
              activePosition: state.activePosition,
              items: state.items
            };
          }
        }

        return state;
      }
    case CLOSE_MODAL:
      document.body.onclick = null;

      return {
        openModalName: null,
        activePosition: state.activePosition,
        items: state.items
      };
    default:
      return state;
  }
};
