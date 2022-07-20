//CONSTANTES
const FETCH_START = 'fetch/START'
const FETCH_SUCESS = 'fetch/SUCESS'
const FETCH_ERRO = 'fetch/ERROR'



function  getLocalStorage (key,initial){
  try{
    return JSON.parse(Window.localStorage(key))
  } catch (error){
    return initial
  }
}

const initialState ={
  loading:false,
  data: ('data',null),
  error:null,
}

function reducer (state = initialState, action){
  
  switch (action.type){
    case FETCH_START:
      return {...state,loading:true}
    case FETCH_SUCESS :
      return {loading:false,error:null,data:action.payloader}
    case FETCH_ERRO:
      return {error:action.payloader, data:null, loading:false}
    default:
      return state
  }
}

const thunk = (store)=> (next)=> (action)=>{

  if(typeof action === 'function') return action(store.dispatch)
  return next(action)
}


const localStorage = (store)=> (next)=> (action)=>{
  const result = next(action)
  if(action.localStorage !== undefined){
    window.localStorage.setItem(action.localStorage,JSON.stringify(action.payloader))
  }
  return result
}
const {applyMiddleware,compose} = Redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk,localStorage))



const store = Redux.createStore(reducer,enhancer)



function fetchUrl (url){
  return async (dispatch)=>{
    try{
      dispatch({type:FETCH_START})
      const data = await fetch(url).then(r=>r.json())
      dispatch({type:FETCH_SUCESS,payloader:data,localStorage:'data'})
    } catch(error){
      dispatch({type:FETCH_ERRO,payloader:error.message})
    }

  
  }
}
const state = store.getState()
if(state.data === null){
  store.dispatch(fetchUrl('https://dogsapi.origamid.dev/json/api/photo'))
}












