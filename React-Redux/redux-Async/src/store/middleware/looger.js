const logger = (store)=> (next)=> (action)=>{
  console.group(action.type)
  console.log('Action: ',action)
  console.log('Prev-State: ',store.getState())
  next(action)
  console.log('Next-State: ', store.getState())
  console.groupEnd()
  return next (action)
}

export default logger