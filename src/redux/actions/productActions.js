import { SET_PRODUCTS, SET_PRODUCT } from "../constants/actionTypes";

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const setProduct = (product) => {
    return {
        type: SET_PRODUCT,
        payload: product
    }
}