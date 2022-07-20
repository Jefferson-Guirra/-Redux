import React from "react";
import {useSelector,useDispatch} from 'react-redux'

function App() {
  const state = useSelector((state)=>state)
  const dispatch = useDispatch()
  
  console.log(state)
  return (
    <div >
      <h1>total: {state}</h1>
      <button onClick={()=>dispatch({type:'INCREMENTAR'})}>adicionar</button>
      <button onClick={()=>dispatch({type:'REDUZIR'})}>remover</button>
    </div>
  );
}

export default App;
