import createAssyncSlice from "../Helper/CreateAssyncSlice";



const slice = createAssyncSlice({
  name:'userPhoto',
  initialState:{
    cache:5000
  },
  fetchConfig: ()=> ({
    url:'https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=10&_user=0',
    options:{
      method:'GET',
      cache:'no-store'
    },
  })
})
export const getOverFiveKg= (state)=>{
  const {data} = state.userPhoto
  const OverFiveKg = data?.filter(({peso})=> peso>=5)
  const transformPound = OverFiveKg?.map(( photo ) => ({...photo, peso:Math.floor(photo.peso * 2.2)}))
  return transformPound
   
  }
export const fetchPhoto = slice.asyncAction
export default slice.reducer