import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class ConnectModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { closeModal, isOpen } = this.props;
    const className = cx({
      'modal': true,
      'modal-close': !isOpen
    });
    return (
      <div className={ className }>
        <span className='modal-title center'>
          Connect
        </span>
        <div className='modal-content center'>
        </div>
      </div>
    );
  }
}

ConnectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default ConnectModal;
