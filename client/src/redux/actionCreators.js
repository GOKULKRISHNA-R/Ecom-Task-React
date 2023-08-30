import * as ActionTypes from "./actionTypes";
import Axios from "axios";
import store from "./store";

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
export const updateCart = (params) => ({
  type: ActionTypes.UPDATE_CART,
  payload: params,
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
    Axios.get("http://localhost:5500/products")
      .then((data) => {
        const sorted = data.data.sort((a, b) => a.productId - b.productId);
        dispatch(fetchProductsSuccess(sorted));
        getCartQuantityFromDB(localStorage.getItem("userId"));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};
export async function editProductinDB(params) {
  const productData = {
    productId: Number(params.id),
    productName: params.name,
    productCategory: params.category,
    productPrice: params.price,
  };

  const a = await Axios.post("http://localhost:5500/edit", productData)
    .then((response) => {
      console.log("Request successful:", response.data);
      store.dispatch(fetchProducts());
      return response.data;
    })
    .catch((error) => {
      console.error("Request failed:", error);
    });

  return a[0];
}
export async function deleteProductinDB(id) {
  const a = await Axios.post("http://localhost:5500/delete", { productId: id })
    .then((response) => {
      console.log("Request successful:", response.data);
      store.dispatch(fetchProducts());
      return response.data;
    })
    .catch((error) => {
      console.error("Request failed:", error);
    });
  return a;
}
export async function addProductinDB(params) {
  const productData = {
    createdBy: Number(params.userId),
    productName: params.name,
    productCategory: Number(params.category),
    productPrice: Number(params.price),
    productImageUrl: params.url,
  };
  const a = await Axios.post("http://localhost:5500/add", productData)
    .then((response) => {
      store.dispatch(fetchProducts());
      return response.data;
    })
    .catch((error) => {
      console.error("Request failed:", error);
    });

  return a;
}
export async function addToCartinDB(params) {
  await Axios.post("http://localhost:5500/addtocart", {
    userId: Number(params.userId),
    productId: Number(params.id),
    productQuantity: Number(params.quantity),
  })
    .then((response) => {
      store.dispatch(updateCart(response.data));
      return response.data;
    })
    .catch((error) => {
      console.error("Request failed:", error);
    });
}
export async function getCartQuantityFromDB(id) {
  await Axios.post("http://localhost:5500/getCartQuantityFromDB", {
    userId: Number(id),
  })
    .then((data) => {
      store.dispatch(updateCart(data.data));
    })
    .catch((error) => {
      console.log(error.message);
    });
}
