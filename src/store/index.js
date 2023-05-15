import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

const store = createStore(
  rootReducer, // pass the root reducer
  undefined, // pass preloaded state if needed
  applyMiddleware(thunkMiddleware) // pass the middleware
);

export default store;
