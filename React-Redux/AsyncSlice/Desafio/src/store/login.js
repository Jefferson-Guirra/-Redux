import { fetchFeed } from "./feedData";
import  { fetchToken } from "./token";
import { fetchUser } from "./user";


const login= (usuário)=> async (dispatch,getState)=>{
  try{
    const {payload} = await dispatch(fetchToken(usuário))
    if(payload.token !== undefined){
      await dispatch(fetchUser(payload.token))
    }
    const {user} = getState()
    if (user.data.id !== undefined) await dispatch(fetchFeed())
  }catch{}

  
  
  
  
}

export default login