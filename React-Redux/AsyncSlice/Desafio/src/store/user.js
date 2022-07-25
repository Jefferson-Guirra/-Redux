import createAssyncSlice from "../Helper/CreateAssyncSlice";


const user = createAssyncSlice({
  name:'user',
  fetchConfig:(token)=>({
    url:'https://dogsapi.origamid.dev/json/api/user',
    options:{
      method:'GET',
      headers:{
        Authorization: 'Bearer ' + token
      }
    }

  })
})

export const fetchUser = user.asyncAction
export default user.reducer
export const clearUser = user.OutLogin