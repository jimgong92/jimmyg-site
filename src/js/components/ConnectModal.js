import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import ConnectIcon from './ConnectIcon';

class ConnectModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { closeModal, isOpen, connectMenu } = this.props;
    const className = cx({
      'modal': true,
      'modal-close': !isOpen,
      'connect-modal': true
    });
    const iconList = connectMenu.menu.map((item, i) => {
      return <ConnectIcon
              key={ item + '_' + i }
              href={ item.href }
              logoName={ item.logoName }
              isActive={ i === connectMenu.position}
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
  connectMenu: PropTypes.object.isRequired
}

export default ConnectModal;
