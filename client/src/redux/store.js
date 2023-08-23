import { applyMiddleware, compose, legacy_createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from './reducers'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store ;
