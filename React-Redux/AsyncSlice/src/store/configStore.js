import { configureStore, combineReducers,getDefaultMiddleware } from "@reduxjs/toolkit";
import contador from "./contador";
//import logger from "./middleware/looger";
import modal from "./modal";
import login from "./login";
import localStorage from "./middleware/localStorage";

const middleware = [...getDefaultMiddleware(),localStorage]
const reducer = combineReducers({contador,modal,login})


const store = configureStore({
  reducer,
  middleware
})

export default store