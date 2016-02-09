import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import defaultProps from './default';

class App extends Component {
  render() {
    const { name, selectionItems } = this.props;
    return (
      <div>
        <main className="main">
          <Header name={ name } />
          <Menu items={ selectionItems }/>
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  selectionItems: PropTypes.arrayOf(PropTypes.shape).isRequired
}

App.defaultProps = defaultProps;

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
