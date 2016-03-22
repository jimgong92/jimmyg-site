import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import ConnectIcon from './ConnectIcon';

const LEFT_KEY_CODES = new Set([ 37, 65 ]);
const RIGHT_KEY_CODES = new Set([ 39, 68 ]);
const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

class ConnectModal extends Component {
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
      const { moveLeft, moveRight, selectConnection } = this.props.actions.connectMenu;
      const { closeModal } = this.props.actions.homeMenu;

      if (LEFT_KEY_CODES.has(e.keyCode)) moveLeft();
      if (RIGHT_KEY_CODES.has(e.keyCode)) moveRight();
      if (ENTER_KEY_CODE === e.keyCode) selectConnection();
      if (ESC_KEY_CODE === e.keyCode) closeModal();
    }
  }
  render() {
    const { closeModal, isOpen, items, activePosition } = this.props;
    const className = cx({
      'modal': true,
      'modal-close': !isOpen,
      'connect-modal': true
    });
    const iconList = items.map((item, i) => {
      return <ConnectIcon
              key={ item + '_' + i }
              href={ item.href }
              logoName={ item.logoName }
              isActive={ i === activePosition}
            />
    });
    return (
      <div className={ className }>
        <span className="modal-title center">
          Connect
        </span>
        <div className="modal-content center">
          <div className="connect-menu">
            { iconList }
          </div>
        </div>
      </div>
    );
  }
}

ConnectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  activePosition: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ConnectModal;
