import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name:'date',
  initialState:{
    formData:{}
  },
  reducers:{
    adicionarDatas(state,action){
      state.formData=action.payload
    }
  }
})

export default slice.reducer
export const { adicionarDatas} = slice.actions