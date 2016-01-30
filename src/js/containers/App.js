import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>P.O.C.</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  const ACTIONS_PLACEHOLDER = {};
  return {
    actions: bindActionCreators(ACTIONS_PLACEHOLDER, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);