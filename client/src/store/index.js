import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "./middleware/logger";
import thunk from "redux-thunk";

const initialState = {
  assets: [],
  categories:[],
  products:[]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "READ_ASSET":
      return {
        ...state,
        assets: action.payload,
      };
      case "READ_CATEGORY":
      return {
        ...state,
        categories: action.payload,
      };
      case "READ_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
