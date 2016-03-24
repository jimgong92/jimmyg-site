import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import AboutModal from '../components/AboutModal';
import ConnectModal from '../components/ConnectModal';
import DemosModal from '../components/DemosModal';
import ConnectMenuActions from '../actions/ConnectMenu';
import DemosMenuActions from '../actions/DemosMenu';
import HomeMenuActions from '../actions/HomeMenu';

class App extends Component {
  componentDidUpdate() {
    const { actions, homeMenu } = this.props;

    if (homeMenu.openModalName !== null) {
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
      demosMenu,
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
            kbIsActive={ homeMenu.openModalName === null }
          />
        </main>
        <AboutModal 
          isOpen={homeMenu.openModalName === 'About'}
          closeModal={ actions.homeMenu.closeModal }
        />
        <ConnectModal
          isOpen={homeMenu.openModalName === 'Connect'}
          closeModal={ actions.homeMenu.closeModal }
          activePosition={ connectMenu.activePosition }
          items={ connectMenu.items }
          actions={ actions }
        />
        <DemosModal
          isOpen={homeMenu.openModalName === 'Demos'}
          closeModal={ actions.homeMenu.closeModal }
          rowPosition={ demosMenu.rowPosition }
          colPosition={ demosMenu.colPosition }
          items={ demosMenu.items }
          actions={ actions }
        />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  connectMenu: PropTypes.object.isRequired,
  demosMenu: PropTypes.object.isRequired,
  homeMenu: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

App.defaultProps = {
  name: 'Jimmy Gong'
};

function mapStateToProps(state) {
  return {
    connectMenu: state.connectMenu,
    demosMenu: state.demosMenu,
    homeMenu: state.homeMenu
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      connectMenu: bindActionCreators(ConnectMenuActions, dispatch),
      demosMenu: bindActionCreators(DemosMenuActions, dispatch),
      homeMenu: bindActionCreators(HomeMenuActions, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
