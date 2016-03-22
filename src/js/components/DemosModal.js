import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

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
      const { moveUp, moveDown, moveLeft, moveRight, selectDemo } = this.props.actions.demoMenu;
      const { closeModal } = this.props.actions.homeMenu;

      if (UP_KEY_CODES.has(e.keyCode)) moveUp();
      if (DOWN_KEY_CODES.has(e.keyCode)) moveDown();
      if (LEFT_KEY_CODES.has(e.keyCode)) moveLeft();
      if (RIGHT_KEY_CODES.has(e.keyCode)) moveRight();
      if (ENTER_KEY_CODE === e.keyCode) selectConnection();
      if (ESC_KEY_CODE === e.keyCode) closeModal();
    }
  }
  render() {
    const { closeModal, isOpen } = this.props;
    const className = cx({
      'modal': true,
      'modal-close': !isOpen,
      'demos-modal': true
    });

    return (
      <div className={ className }>
        <span className="modal-title center">
          Demos
        </span>
        <div className="modal-content center">
          <div className="demo-menu">
            Demos here
          </div>
        </div>
      </div>
    );
  }
}

DemosModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  items: PropTypes.func.isRequired,
  activePosition: PropTypes.number.isRequired
};

export default DemosModal;
