import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class ConnectIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isActive, href, logoName } = this.props;
    const cxDict = {
      'icon-container': true,
      'inactive-icon': !isActive,
      'active-icon': isActive,
    };
    cxDict[logoName] = true;
    const className = cx(cxDict);
    return (
      <div className={ className }>
        <a target="_blank" href={ href }>
          <i className={ `fa fa-${logoName}-square fa-5x icon` } />
        </a>
      </div>
    );
  }
}

ConnectIcon.propTypes = {
  isActive: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  logoName: PropTypes.string.isRequired
}

export default ConnectIcon;
