import * as actionTypes from '../action-types';

export const setProducts = (payload) => ({
	type: actionTypes.SET_PRODUCTS,
	payload
});

export const addToCart = (payload) => ({
	type: actionTypes.ADD_TO_CART,
	payload
});

export const removeFromCart = (payload) => ({
	type: actionTypes.REMOVE_FROM_CART,
	payload
});
