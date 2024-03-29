import { SET_PRODUCTS } from "../constants/actionTypes";

const initialState = {
  products: [],
  isLoading: true
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products:payload, 
        isLoading:false
      };
    default:
      return state;
  }
};
export default productsReducer;  