import * as ActionTypes from "./actionTypes";
import {
  addProductinDB,
  addToCartinDB,
  deleteProductinDB,
  editProductinDB,
} from "./actionCreators";

const initialState = {
  loading: false,
  products: [],
  cartProducts: [],
  error: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_PRODUCT_SUCCESS: {
      let p = action.payload;
      p = p.map((e) => {
        return { ...e, inCart: false };
      });
      return {
        ...state,
        loading: false,
        products: p,
        error: "",
      };
    }
    case ActionTypes.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: {
          isError: true,
          message: action.payload,
        },
      };
    case ActionTypes.ADD_TO_CART: {
      addToCartinDB(action.payload);
      return {
        ...state,
      };
    }
    case ActionTypes.INCREMENT_CART_ITEM_COUNT: {
      let cp = state.cartProducts;
      cp.forEach((e) => {
        if (e.productId === action.payload) {
          e.quantity++;
        }
      });
      return {
        ...state,
        cartProducts: [...cp],
      };
    }
    case ActionTypes.DECREMENT_CART_ITEM_COUNT: {
      let cp = state.cartProducts;
      cp.forEach((e) => {
        if (e.productId === action.payload) {
          e.quantity--;
        }
      });
      return {
        ...state,
        cartProducts: [...cp],
      };
    }
    case ActionTypes.REMOVE_FROM_CART: {
      let cp = state.cartProducts;
      let p = state.products;
      cp = cp.filter((e) => e.id !== action.payload);
      p.forEach((e) => {
        if (e.id === action.payload) {
          e.inCart = false;
        }
      });

      return {
        ...state,
        cartProducts: [...cp],
        products: [...p],
      };
    }
    case ActionTypes.DELETE_PRODUCT: {
      deleteProductinDB(action.payload);
      return {
        ...state,
      };
    }
    case ActionTypes.EDIT_PRODUCT: {
      editProductinDB(action.payload);
      return { ...state };
    }
    case ActionTypes.ADD_PRODUCT: {
      addProductinDB(action.payload);
      return {
        ...state,
      };
    }
    case ActionTypes.UPDATE_CART: {
      const x = Object.keys(action.payload);
      let p = state.products;
      let t = p.filter((e) => x.includes(e.productId));
      t.forEach((e) => {
        e.quantity = Number(action.payload[e.productId]);
      });
      p.forEach((e) => {
        if (Object.keys(action.payload).includes(e.productId)) {
          e.inCart = true;
        }
      });

      return {
        ...state,
        cartProducts: [...t],
        products: [...p],
      };
    }
    default:
      return state;
  }
}
