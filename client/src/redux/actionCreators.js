import * as ActionTypes from "./actionTypes";
import Axios  from "axios";

export const fetchProductsRequest = () => ({
    type: ActionTypes.FETCH_PRODUCT_REQUEST,
});

export const fetchProductsSuccess = products => {
    return {
        type: ActionTypes.FETCH_PRODUCT_SUCCESS,
        payload: products
    }
}

export const fetchProductsFailure = error => ({
    type: ActionTypes.FETCH_PRODUCT_FAILURE,
    payload: error
})

export const fetchProducts = () => { 
    return function (dispatch) {
      console.log("FUNV");
      dispatch(fetchProductsRequest());
      Axios.get("https://fakestoreapi.com/products")
        .then((data) => {
          dispatch(fetchProductsSuccess(data.data));
        })
        .catch((error) => {
          dispatch(fetchProductsFailure(error.message));
        });
    };
  }