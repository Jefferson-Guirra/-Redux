import { configureStore,combineReducers } from "@reduxjs/toolkit";
import date from "./date";


const reducer = combineReducers({date})

const store = configureStore({reducer})

export default store