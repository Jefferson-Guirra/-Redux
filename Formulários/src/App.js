import React from 'react'
import { useDispatch} from 'react-redux'
import { adicionarDatas } from './store/date'

const App = () => {
  const dispatch = useDispatch()
  const [partida, setPartida] = React.useState('')
  const [retorno, setRetorno] = React.useState('')
  const [nome,setNome] = React.useState('')
  
  function handleSubmit(event) {
    event.preventDefault()
    dispatch(adicionarDatas({
      nome,
      partida,
      retorno,
      
    }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='nome'>Nome</label>
        <input type='text' id='nome' value={nome} onChange={({target})=> setNome(target.value)}/>
      </p>
      <p>
        <label htmlFor="partida">Partida</label>
        <input
          type="date"
          id="partida"
          value={partida}
          onChange={({ target }) => setPartida(target.value)}
        />
      </p>
      {partida}
      <p>
        <label htmlFor="retorno">Retorno</label>
        <input
          type="date"
          id="partida"
          value={retorno}
          onChange={({ target }) => setRetorno(target.value)}
        />
      </p>
      {retorno}
      <button>buscar</button>
    </form>
  )
}

export default App
