import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import { incrementar,reduzir } from "./store/contador";
import { abrir,fechar } from "./store/modal";


function App() {
  const {contador,modal} = useSelector(state=>state)
  console.log(contador,modal)
  const dispatch = useDispatch()
  
  return (
    <div >
      <h1>total: {contador} </h1>
      <button onClick={()=> dispatch(incrementar())}>adicionar</button>
      <button onClick={()=> dispatch (reduzir())}>remover</button>
      {modal && <p>MODAL TESTE</p>}
      <button onClick={()=> dispatch (abrir())}>abrir</button>
      <button onClick={()=> dispatch (fechar())}>fechar</button>


    </div>
  );
}

export default App