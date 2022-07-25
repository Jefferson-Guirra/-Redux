import { createSlice } from "@reduxjs/toolkit";

/**
 * Cria um slice e uma Função assincrona
 * @param {object} config
 * @param {string} config.name
 * @param {object} config.initialState
 * @param {object} config.reducers
 * @param {Function} config.fetchConfig
 * 
  
 }}
*/
const createAsyncSlice = (config)=>{
  const slice  = createSlice({
    name : config.name,
    initialState: {
      loading:false,
      data:null,
      error:null,
      ...config.initialState
    },
    reducers:{
      fetchStarted (state){
        state.loading = true
      },
      fetchSucess (state,action){
        state.loading=false
        state.data = action.payload
        state.error = null
      },
      fetchError (state,action) {
        state.loading = null
        state.data = null
        state.error = action.payload

      },
      ...config.reducers
    }
  })
  const {fetchError,fetchSucess,fetchStarted} = slice.actions
  const asyncAction = (payload)=> async (dispatch)=>{
    try{
      dispatch(fetchStarted())
      const {url,options} = config.fetchConfig(payload)
      const response = await fetch(url,options)
      const data =  await response.json()
      return  dispatch(fetchSucess(data))
      

    }catch(error){
      return dispatch(fetchError(error.message))
    }
  }
  return {...slice,asyncAction}
}

export default createAsyncSlice

