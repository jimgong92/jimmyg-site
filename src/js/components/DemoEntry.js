import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class DemoEntry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { href, hrefActive, projectName, src, srcActive } = this.props;
    const hrefCX = cx({
      'demo-container': true,
      'inactive-icon': !hrefActive,
      'active-icon': hrefActive,
    });
    const srcCX = cx({
      'github': true,
      'icon-container': true,
      'inactive-icon': !srcActive,
      'active-icon': srcActive
    });
    return (
      <li className="demo menu-item">
        <a target="_blank" href={ href }>
          <div className={ hrefCX }>{ projectName }</div>
        </a>
        <div className={ srcCX }>
          <a target="_blank" href={ src }>
            <i className={ 'fa fa-github-square fa-4x icon' } />
          </a>
        </div>
      </li>
    );
  }
}

DemoEntry.propTypes = {
  href: PropTypes.string.isRequired,
  hrefActive: PropTypes.bool.isRequired,
  projectName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcActive: PropTypes.bool.isRequired
}

export default DemoEntry;
