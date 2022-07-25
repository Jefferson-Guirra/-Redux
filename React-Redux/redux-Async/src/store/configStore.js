import { configureStore, combineReducers,getDefaultMiddleware } from "@reduxjs/toolkit";
import contador from "./contador";
//import logger from "./middleware/looger";
import modal from "./modal";
import login from "./login";

const middleware = [...getDefaultMiddleware()]
const reducer = combineReducers({contador,modal,login})


const store = configureStore({
  reducer,
  middleware
})

export default store