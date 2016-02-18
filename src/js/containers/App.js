import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import AboutModal from '../components/AboutModal';
import ConnectModal from '../components/ConnectModal';
import defaultProps from './default';
import ConnectMenuActions from '../actions/ConnectMenu';
import MenuSpriteActions from '../actions/MenuSprite';

class App extends Component {
  componentDidUpdate() {
    const { actions, menuSprite } = this.props;

    if (menuSprite.openModal !== null) {
      document.body.onclick = function(e) {
        if (e.target.nodeName === 'BODY') {
          actions.menuSprite.closeModal();
        }
      };
    }
  }
  render() {
    const { 
      actions,
      connectMenu,
      menuSprite,
      name,
      selectionItems
    } = this.props;

    return (
      <div>
        <main className="main">
          <Header name={ name } />
          <Menu 
            items={ selectionItems } 
            menuSprite={ menuSprite }
            actions={ actions.menuSprite }
          />
          <AboutModal 
            isOpen={menuSprite.openModal === 'About'}
            closeModal={ actions.menuSprite.closeModal }
          />
          <ConnectModal
            isOpen={menuSprite.openModal === 'Connect'}
            closeModal={ actions.menuSprite.closeModal }
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
  menuSprite: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  selectionItems: PropTypes.arrayOf(PropTypes.shape).isRequired
};

App.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    connectMenu: state.connectMenu,
    menuSprite: state.menuSprite
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      connectMenu: bindActionCreators(ConnectMenuActions, dispatch),
      menuSprite: bindActionCreators(MenuSpriteActions, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
