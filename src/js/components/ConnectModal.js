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
      'modal-close': !isOpen,
      'connect-modal': true
    });
    return (
      <div className={ className }>
        <span className="modal-title center">
          Connect
        </span>
        <div className="modal-content center">
          <div className="connect-menu">
            <div className="icon-container inactive-icon github">
              <a target="_blank" href="https://github.com/jimgong92">
                <i className="fa fa-github-square fa-5x icon" />
              </a>
            </div>
            <div className="icon-container inactive-icon facebook">
              <a target="_blank" href="https://www.facebook.com/jimmy.gong.39">
                <i className="fa fa-facebook-square fa-5x icon" />
              </a>
            </div>
            <div className="icon-container inactive-icon linkedin">
              <a target="_blank" href="https://www.linkedin.com/in/jimgong92">
                <i className="fa fa-linkedin-square fa-5x icon" />
              </a>
            </div>
            <div className="icon-container active-icon gmail">
              <a target="_blank" href="mailto:gong.jim@gmail.com">
                <i className="fa fa-envelope-square fa-5x icon" />
              </a>
            </div>
            <div className="icon-container inactive-icon twitter">
              <a target="_blank" href="https://twitter.com/jimmyg___">
                <i className="fa fa-twitter-square fa-5x icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ConnectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default ConnectModal;
