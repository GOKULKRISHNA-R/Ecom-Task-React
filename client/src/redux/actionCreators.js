import * as ActionTypes from "./actionTypes";
import Axios from "axios";

export const fetchProductsRequest = () => ({
  type: ActionTypes.FETCH_PRODUCT_REQUEST,
});

export const fetchProductsSuccess = (data) => {
  return {
    type: ActionTypes.FETCH_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchProductsFailure = (error) => ({
  type: ActionTypes.FETCH_PRODUCT_FAILURE,
  payload: error,
});

export const addToCart = (id) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: id,
});

export const increment = (id) => ({
  type: ActionTypes.INCREMENT_CART_ITEM_COUNT,
  payload: id,
});

export const decrement = (id) => ({
  type: ActionTypes.DECREMENT_CART_ITEM_COUNT,
  payload: id,
});

export const removeFromCart = (id) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: id,
});

export const deleteProduct = (id) => ({
  type: ActionTypes.DELETE_PRODUCT,
  payload: id,
});

export const editProduct = (values) => ({
  type: ActionTypes.EDIT_PRODUCT,
  payload: values,
});

export const addProduct = (values) => ({
  type: ActionTypes.ADD_PRODUCT,
  payload: values,
});


export const fetchProducts = () => {
  return function (dispatch) {
    dispatch(fetchProductsRequest());
    Axios.get("https://fakestoreapi.com/products")
      .then((data) => {
        dispatch(fetchProductsSuccess(data.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};
