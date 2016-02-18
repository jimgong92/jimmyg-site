import { MOVE_UP, MOVE_DOWN, MAKE_SELECTION, CLOSE_MODAL } from '../constants/HomeMenu';

const initialState = {
  modalIsOpen: null,
  activePosition: 0,
  items: [
    { 
      itemName: 'About',
      handleSelect: () => {},
      href: null
    },
    {
      itemName: 'Blog',
      handleSelect: () => {},
      href: 'http://blog.jimmyg.xyz'
    },
    {
      itemName: 'Connect',
      handleSelect: () => {},
      href: null
    },
    // {
    //   itemName: 'Demos',
    //   handleSelect: () => {
    //     console.log('Demos');
    //   },
    //   href: null
    // }
  ]
};
const MAX_MENU_INDEX = initialState.items.length - 1;

export default function menuSprite(state = initialState, action) {
  switch (action.type) {
    case MOVE_UP:
      if (state.activePosition > 0){
        state.activePosition--;
      }
      return {
        modalIsOpen: state.modalIsOpen,
        activePosition: state.activePosition,
        items: state.items
      };
    case MOVE_DOWN:
      if (state.activePosition < (MAX_MENU_INDEX)){
        state.activePosition++;
      }
      return {
        modalIsOpen: state.modalIsOpen,
        activePosition: state.activePosition,
        items: state.items
      };
    case MAKE_SELECTION:
      if (state.modalIsOpen === null) {
        // Handle Key Press
        if (!action.itemName) {
          if (state.items[state.activePosition].href) {
            window.open(state.items[state.activePosition].href);
          }
          state.items[state.activePosition].handleSelect();
          return {
            modalIsOpen: state.items[state.activePosition].itemName,
            activePosition: state.activePosition,
            items: state.items
          };
        }
        // Handle Click
        for (let i = 0; i < state.items.length; i++) {
          let item = state.items[i];
          if (item.itemName === action.itemName) {
            state.modalIsOpen = item.itemName;
            state.activePosition = i;
            state.items[state.activePosition].handleSelect();
            return {
              modalIsOpen: state.modalIsOpen,
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
        modalIsOpen: null,
        activePosition: state.activePosition,
        items: state.items
      };
    default:
      return state;
  }
};
