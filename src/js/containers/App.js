import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import AboutModal from '../components/AboutModal';
import ConnectModal from '../components/ConnectModal';
import ConnectMenuActions from '../actions/ConnectMenu';
import HomeMenuActions from '../actions/HomeMenu';

class App extends Component {
  componentDidUpdate() {
    const { actions, homeMenu } = this.props;

    if (homeMenu.modalIsOpen !== null) {
      document.body.onclick = function(e) {
        if (e.target.nodeName === 'BODY') {
          actions.homeMenu.closeModal();
        }
      };
    }
  }
  render() {
    const { 
      actions,
      connectMenu,
      homeMenu,
      name
    } = this.props;

    return (
      <div>
        <main className="main">
          <Header name={ name } />
          <Menu 
            items={ homeMenu.items }
            activePosition={ homeMenu.activePosition }
            actions={ actions.homeMenu }
          />
          <AboutModal 
            isOpen={homeMenu.modalIsOpen === 'About'}
            closeModal={ actions.homeMenu.closeModal }
          />
          <ConnectModal
            isOpen={homeMenu.modalIsOpen === 'Connect'}
            closeModal={ actions.homeMenu.closeModal }
            connectMenu={ connectMenu }
          />
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  connectMenu: PropTypes.object.isRequired,
  homeMenu: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

App.defaultProps = {
  name: 'Jimmy Gong'
};

function mapStateToProps(state) {
  return {
    connectMenu: state.connectMenu,
    homeMenu: state.homeMenu
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      connectMenu: bindActionCreators(ConnectMenuActions, dispatch),
      homeMenu: bindActionCreators(HomeMenuActions, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
