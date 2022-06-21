import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { UIReducer } from "./UI/UI.reducer";

import movieReducer from "./movies/movies.reducers";
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["movie"],
};

const rootReducer = combineReducers({
  movie: movieReducer,
  //   products: productsReducer,
  //   user: userReducer,
  //   UI: UIReducer,
  // cart: cartReducer,
  // order: orderReducer,
  // category: categoryReducer,
});

//creating the persisited version of the store
export default persistReducer(persistConfig, rootReducer);
