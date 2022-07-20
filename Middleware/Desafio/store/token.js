import getLocalStorage from "./helper/getLocalStorage.js";

//CONSTANTES
const TOKEN_FETCH_STARTED = 'token/FETCH_STARTED';
const TOKEN_FETCH_SUCCESS = 'token/FETCH_SUCCESS';
const TOKEN_FETCH_ERROR = 'token/FETCH_ERROR';


//ACTIONS SYNC

export const tokenFetchStarted = ()=> ({type: TOKEN_FETCH_STARTED})
export const tokenFetchSucess = (payload)=> ({type: TOKEN_FETCH_SUCCESS,payload,localStorage:'token'})
export const tokenFetchError = (payload)=> ({type: TOKEN_FETCH_ERROR,payload})


export const tokenFetch = (body) => async(dispatch)=>{
  try{
    dispatch(tokenFetchStarted())
    const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const {token} = await response.json()
    dispatch(tokenFetchSucess(token))
  } catch(error){
    dispatch(tokenFetchError(error.message))
  }
}


//INITIAL STATE

const initialState ={
  loading:false,
  data: getLocalStorage('token',null),
  error:null
}




//REDUCER

function token (state = initialState,action){
  switch (action.type){
    case TOKEN_FETCH_STARTED:
      return {...state,loading:true}
    case TOKEN_FETCH_SUCCESS:
      return {loading:false,data:action.payload,error:null}
    case TOKEN_FETCH_ERROR:
      return {loading:false, data:null, error:action.payload}
    default:
      return state

  }
}

export default token