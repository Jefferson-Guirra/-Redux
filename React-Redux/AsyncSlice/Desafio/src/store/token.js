import createAssyncSlice from "../Helper/CreateAssyncSlice";
import getLocalStorage from "../Helper/getLocalStorage";

const token = createAssyncSlice({
  name:'token',
  initialState:{
    data:{
      token:getLocalStorage('token',null)
    }
  },
  reducers:{
    fetchLogout(state){
      state.loading = false
      state.data = null
      state.error = null
    },
    fetchSucess:{
      reducer(state,action){
        state.loading = false
        state.data = action.payload
        state.error = null
      },
      prepare(payload){
        return{
          payload,
          meta:{
            localStorage:{
              key:'token',
              value:payload.token
            }
          }
        }
      }
    }
  },
  fetchConfig: (user)=>({
    url:'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
    options:{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(user)
    }
  })
  
  
})

export const fetchToken = token.asyncAction
export const clearToken = token.OutLogin
export default token.reducer
