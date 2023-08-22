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
