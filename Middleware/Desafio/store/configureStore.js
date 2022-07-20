import thunk from "./middleware/thunk.js"
import localStorage from "./middleware/localStorage.js"
import user from "./user.js"
import token from "./token.js"
const {compose,applyMiddleware,combineReducers,createStore,} = Redux





const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducer = combineReducers({user,token})
const enhancer = composeEnhancers(applyMiddleware(thunk,localStorage))

const store = createStore(reducer,enhancer)

export default store