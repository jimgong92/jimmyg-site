import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <main className="main">
          <Header />
          <Menu />
        </main>
        <Footer />
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
