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

const UP_KEY_CODES = new Set([ 38, 87 ]);
const DOWN_KEY_CODES = new Set([ 40,83 ]);
const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

class App extends Component {
  constructor(props){
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
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
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.body.removeEventListener('keydown');
  }
  handleKeyPress(e) {
    const { moveUp, moveDown, makeSelection } = this.props.actions.homeMenu;
    if (DOWN_KEY_CODES.has(e.keyCode)) {
      moveDown();
    }
    if (UP_KEY_CODES.has(e.keyCode)) {
      moveUp();
    }
    if (ENTER_KEY_CODE === e.keyCode) {
      // Invoke current selectedAction
      makeSelection();
    }
    if (ESC_KEY_CODE === e.keyCode) {
      this.props.actions.homeMenu.closeModal();
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
        />
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
