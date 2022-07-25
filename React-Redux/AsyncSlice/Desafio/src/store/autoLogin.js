import { fetchFeed } from "./feedData"
import { fetchUser } from "./user"

const autoLogin= () => async (dispatch,getState)=>{
 const {token} = getState()
try{
    if (token.data.token !== null){
        await dispatch(fetchUser(token.data.token))
     } 
     const {user} = getState()
        if (user.data.id !==null) await dispatch(fetchFeed())
}catch{}
 

 
}


export default autoLogin