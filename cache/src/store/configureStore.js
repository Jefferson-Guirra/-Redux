import { configureStore,combineReducers } from "@reduxjs/toolkit";
import userPhoto from './photo';



const reducer = combineReducers({userPhoto})

const store = configureStore({reducer})

export default store