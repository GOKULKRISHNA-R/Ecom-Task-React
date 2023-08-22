import * as ActionTypes from "./actionTypes";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: "",
      };

    case ActionTypes.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
