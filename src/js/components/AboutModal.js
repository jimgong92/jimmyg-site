import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class AboutModal extends Component {
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
          About
        </span>
        <div className='modal-content center'>
          <p>
          <span>I am a philosophy student turned software engineer
          because I realized I'd rather make things happen than
          debate whether things happen. Javascript tends to be
          my tool of choice because I love its flexibility and
          work heavily with the web, but I play with multiple
          languages.</span>
          </p>
          
          <p>
          <span>In my free time I like to dive into basketball analytics,
          learn about space, and make simple 8-bit games.</span>
          </p>
        </div>
      </div>
    );
  }
}

AboutModal.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default AboutModal;
