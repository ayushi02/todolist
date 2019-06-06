import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {App} from './App.js';
import {openModal} from './modal/ModalAction.js';

export const AppContainer = connect(
    null,
      function mapDispatchToProps(dispatch) {
        let actions = {
            openModal
        };

        return bindActionCreators(actions, dispatch);
      }
  )(App);