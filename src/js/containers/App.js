import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import AboutModal from '../components/AboutModal';
import ConnectModal from '../components/ConnectModal';
import defaultProps from './default';
import MenuSpriteActions from '../actions/MenuSprite';

class App extends Component {
  componentDidUpdate() {
    const { actions, menuSprite } = this.props;

    if (menuSprite.openModal !== null) {
      document.body.onclick = function(e) {
        if (e.target.nodeName === 'BODY') {
          actions.closeModal();
        }
      };
    }
  }
  render() {
    const { 
      menuSprite,
      actions,
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
            actions={ actions }
          />
          <AboutModal 
            isOpen={menuSprite.openModal === 'About'}
            closeModal={ actions.closeModal }
          />
          <ConnectModal 
            isOpen={menuSprite.openModal === 'Connect'}
            closeModal={ actions.closeModal }
          />
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  menuSprite: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  selectionItems: PropTypes.arrayOf(PropTypes.shape).isRequired
};

App.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    menuSprite: state.menuSprite
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MenuSpriteActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
