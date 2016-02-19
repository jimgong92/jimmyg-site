import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

const EXIT_KEY_CODES = new Set([ 13, 27]);

class AboutModal extends Component {
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
    const { isOpen, closeModal } = this.props;
    if (isOpen) {
      if (EXIT_KEY_CODES.has(e.keyCode)) {
        closeModal();
      }
    }
  }
  render() {
    const { isOpen } = this.props;
    const className = cx({
      'modal': true,
      'modal-close': !isOpen,
      'about-modal': true
    });
    return (
      <div className={ className }>
        <span className='modal-title center'>
          About
        </span>
        <div className='modal-content center'>
          <p>
          I am a philosophy student turned software engineer
          because I realized I'd rather make things happen than
          debate whether things happen. Javascript tends to be
          my tool of choice because I love its flexibility and
          work heavily with the web, but I play with multiple
          languages.
          <br /><br />
          In my free time I like to dive into basketball analytics,
          learn about space, and make simple 8-bit games.
          </p>
        </div>
      </div>
    );
  }
}

AboutModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default AboutModal;
