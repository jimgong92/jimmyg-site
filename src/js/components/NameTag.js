import React, { Component, PropTypes } from 'react';

class NameTag extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="name-tag center">
        { this.props.name }
      </div>
    );
  }
}

NameTag.proptypes = {
  name: PropTypes.string.isRequired
};

NameTag.defaultProps = {
  name: 'Jimmy Gong'
};

export default NameTag;
