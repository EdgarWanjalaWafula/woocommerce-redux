import { SET_PRODUCTS, SET_PRODUCT, SET_FEATURED_PRODUCT } from "../constants/actionTypes";

const initialState = {
	products: [],
	product:[],
	isLoading: true,
};

const productsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_PRODUCTS:
			return {
				...state,
				products: payload,
				isLoading: false
			};
		case SET_PRODUCT:
			return {
				...state,
				product: payload,
				isLoading: false
			};
		case SET_FEATURED_PRODUCT:
			return{
				state
			}
		default:
			return state;
	}
};
export default productsReducer;  