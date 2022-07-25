const localStorage = (store)=> (next)=> (action)=>{
  const {meta} = action
  if(meta && meta.localStorage !==undefined){
    const {key,value} = meta.localStorage
    window.localStorage.setItem(key,JSON.stringify(value))
  }
 
  return next(action)
}

export default localStorage