import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class AboutModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { closeModal, isOpen } = this.props;
    const className = cx({
      'blahblah': true,
      'modal': true,
      'modal-close': !isOpen
    });
    return (
      <div className={ className }>
        <button onClick={ closeModal }>X</button>
        <div> hello</div>
      </div>
    );
  }
}

AboutModal.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default AboutModal;
