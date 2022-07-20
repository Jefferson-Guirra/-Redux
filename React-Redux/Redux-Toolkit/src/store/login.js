/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: 'login',
  initialState:{
    loading:false,
    data:null,
    error:null
  },
  reducers: {
    fetchStarted(state) {
      state.loading=true
    },
    fetcSucess(state,action){
      state.loading=false
      state.data = action.payload
      state.error = null
    },
    fetchError (state,action) {
      state.loading = null
      state.data = null
      state.error = action.payload
    }


  }
  
})

export const {fetcSucess,fetchError,fetchStarted} = slice.actions

export const fetcToken = (user)=>{
  return async(dispatch)=>{
    try{
      dispatch(fetchStarted())
      const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
        method:'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      const data = await response.json()
      return dispatch(fetcSucess(data))
    } catch(error){
      return dispatch(fetchError(error.message))
    }

  }
}


export default slice.reducer