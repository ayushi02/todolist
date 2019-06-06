import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Modals} from './ConformationModal.jsx';
import {openModal, closeModal} from './ModalAction.js';

export const ModalContainer = connect(
    function mapStateToProps(state) {
        return {
            modals: state.modals,
            show: state.show
        };
    },
    function mapDispatchToProps(dispatch) {
        let actions = {
            openModal,
            closeModal
        };

        return bindActionCreators(actions, dispatch);
    }
)(Modals);