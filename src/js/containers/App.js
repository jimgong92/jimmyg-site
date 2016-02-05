import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import NameTag from '../components/NameTag';

class App extends React.Component {
  render() {
    return (
      <div>
        <main className="main">
          <NameTag />
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
