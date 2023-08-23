import * as ActionTypes from "./actionTypes";

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
      let cp = state.cartProducts;
      let p = state.products;
      let t = p.filter((e) => e.id === action.payload)[0];
      t = {...t,quantity: 1};
      cp.push(t);
      p.forEach((e) => {
        if (e.id === action.payload) {
          e.inCart = true;
        }
      });

      return {
        ...state,
        cartProducts: [...cp],
        products: [...p],
      };
    }

    case ActionTypes.INCREMENT_CART_ITEM_COUNT: {
      let cp = state.cartProducts;
      cp.forEach((e) => {
        if( e.id  === action.payload ){
          e.quantity++ ;
        }
      })
      return {
        ...state,
        cartProducts: [...cp]
      }
    }

    case ActionTypes.DECREMENT_CART_ITEM_COUNT: {
      let cp = state.cartProducts;
      cp.forEach((e) => {
        if( e.id  === action.payload ){
          e.quantity-- ;
        }
      })
      return {
        ...state,
        cartProducts: [...cp]
      }
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
      let p = state.products;
      p = p.filter((e) => e.id !== action.payload);
      
      return {
        ...state,
        products: [...p],
      };
    }

    case ActionTypes.EDIT_PRODUCT: {
      let p = state.products;
      p.forEach( (e) => {
        if(e.id === action.payload.id){
          e.title = action.payload.name;
          e.category = action.payload.category;
          e.price = Number(action.payload.price);
        }
        
      } )

      return {
        ...state,
        products: [...p]
      };
    }

    case ActionTypes.ADD_PRODUCT: {
      let p = state.products;
      p.push({
        id: p[p.length-1].id + 1,
        title: action.payload.name,
        category: action.payload.category,
        price: Number(action.payload.price),
        image: action.payload.url,
        inCart: false,
      })

      return {
        ...state,
        products: [...p]
      };
    }

    default:
      return state;
  }
}
