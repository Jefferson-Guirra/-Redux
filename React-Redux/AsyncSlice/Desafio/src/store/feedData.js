import createAssyncSlice from "../Helper/CreateAssyncSlice";

const feedData = createAssyncSlice({
  name:'feed',
  fetchConfig:(page = 1)=>({
    url:`https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options:{
      method:'GET',
      cache:'no-store'
      
    }
  })
})

export const fetchFeed = feedData.asyncAction
export default feedData.reducer
export  const clearFeed = feedData.OutLogin