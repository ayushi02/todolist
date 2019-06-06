export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(obj) {
    console.log('in open action');
	return {
		type: OPEN_MODAL,
		obj,
	}
}
export function closeModal(obj) {
    console.log('in close action');
	return {
		type: CLOSE_MODAL,
		obj,
	}
}