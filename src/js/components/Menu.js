import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem';

const UP_KEY_CODES = new Set([ 38, 87 ]);
const DOWN_KEY_CODES = new Set([ 40,83 ]);
const ENTER_KEY_CODE = 13;

class Menu extends Component {
  constructor(props){
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.body.removeEventListener('keydown');
  }
  handleKeyPress(e) {
    const { moveUp, moveDown, makeSelection } = this.props.actions;
    if (DOWN_KEY_CODES.has(e.keyCode)) {
      moveDown();
    }
    if (UP_KEY_CODES.has(e.keyCode)) {
      moveUp();
    }
    if (ENTER_KEY_CODE === e.keyCode) {
      // Invoke current selectedAction
      makeSelection();
    }
  }
  render() {
    const { items, menuSprite, actions } = this.props;
    const itemList = items.map((item, i) => {
      return <MenuItem 
                key={ i }
                menuItem={ item } 
                active = { i === menuSprite.position }
                makeSelection = { actions.makeSelection }
              />;
    });
    return (
      <ul className="menu">
        { itemList }
      </ul>
    );
  }
}

Menu.proptypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default Menu;
