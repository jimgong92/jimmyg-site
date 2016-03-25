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
  componentWillMount() {
    document.body.onkeydown = this.handleKeyPress;
  }
  componentWillUnmount() {
    document.body.removeEventListener('keydown');
  }
  componentDidUpdate() {
    if (this.props.kbIsActive) {
      document.body.onkeydown = this.handleKeyPress;
    }
  }
  handleKeyPress(e) {
    if (this.props.kbIsActive) {
      const { moveUp, moveDown, makeSelection } = this.props.actions;
      if (DOWN_KEY_CODES.has(e.keyCode)) {
        moveDown();
      }
      if (UP_KEY_CODES.has(e.keyCode)) {
        moveUp();
      }
      if (ENTER_KEY_CODE === e.keyCode) {
        makeSelection();
      }
    }
  }
  render() {
    const { items, activePosition, actions } = this.props;
    const itemList = items.map((item, i) => {
      return <MenuItem 
                key={ item + '_' + i }
                menuItem={ item } 
                active = { i === activePosition }
                makeSelection = { actions.makeSelection }
              />;
    });
    return (
      <ul className="home menu">
        { itemList }
      </ul>
    );
  }
}

Menu.proptypes = {
  kbIsActive: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
  activePosition: PropTypes.number.isRequired
};

export default Menu;
