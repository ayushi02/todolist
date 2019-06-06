import {OPEN_MODAL, CLOSE_MODAL} from './ModalAction.js';

const initialState = {
    show: false,
    modals: {}    
}

export default function(state = initialState, action) {
	switch (action.type) {
		case OPEN_MODAL:
			return {
                ...state,
                show:true,
                modals: action.obj
                
			};
		case CLOSE_MODAL:
			return {
                ...state,
                show: false,
                modals: {}
                
			};
		default:
			return state;
	}
};