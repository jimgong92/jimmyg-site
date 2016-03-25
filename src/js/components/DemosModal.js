import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import DemoEntry from './DemoEntry';

const UP_KEY_CODES = new Set([ 38, 87 ]);
const DOWN_KEY_CODES = new Set([ 40, 83 ]);
const LEFT_KEY_CODES = new Set([ 37, 65 ]);
const RIGHT_KEY_CODES = new Set([ 39, 68 ]);
const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

class DemosModal extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidUpdate() {
    if (this.props.isOpen) {
      document.body.onkeydown = this.handleKeyPress;
    }
  }
  handleKeyPress(e) {
    if (this.props.isOpen) {
      const { moveUp, moveDown, moveLeft, moveRight, makeSelection } = this.props.actions.demosMenu;
      const { closeModal } = this.props.actions.homeMenu;

      if (UP_KEY_CODES.has(e.keyCode)) moveUp();
      if (DOWN_KEY_CODES.has(e.keyCode)) moveDown();
      if (LEFT_KEY_CODES.has(e.keyCode)) moveLeft();
      if (RIGHT_KEY_CODES.has(e.keyCode)) moveRight();
      if (ENTER_KEY_CODE === e.keyCode) makeSelection();
      if (ESC_KEY_CODE === e.keyCode) closeModal();
    }
  }
  render() {
    const { closeModal, isOpen, items, rowPosition, colPosition } = this.props;
    const className = cx({
      'modal': true,
      'modal-close': !isOpen,
      'demos-modal': true
    });

    const demoList = items.map((item, i) => {
      return <DemoEntry
              key={ `${item}_${i}` }
              href={ item.href }
              projectName={ item.projectName }
              src={ item.src }
              hrefActive={ rowPosition === i && colPosition === 0 }
              srcActive={ rowPosition === i && colPosition === 1 }
            />;
    });

    return (
      <div className={ className }>
        <span className="modal-title center">
          Demos
        </span>
        <div className="modal-content center">
          <ul className="menu">
            { demoList }
          </ul>
        </div>
      </div>
    );
  }
}

DemosModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowPosition: PropTypes.number.isRequired,
  colPosition: PropTypes.number.isRequired
};

export default DemosModal;
