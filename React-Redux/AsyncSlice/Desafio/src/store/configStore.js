import { configureStore,combineReducers,getDefaultMiddleware } from "@reduxjs/toolkit";
import token from "./token";
import user from "./user";
import localStorage from "./Middleware/localStorage";
import feedData from "./feedData";

const middleware = [...getDefaultMiddleware(),localStorage]

const reducer = combineReducers({token,user,feedData})

const store = configureStore({reducer,middleware})
export default store