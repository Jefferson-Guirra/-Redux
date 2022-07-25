import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchToken,fetchLogin } from './store/login'

function App() {
  const {data} = useSelector((state)=> state.login.user)
  const dispatch = useDispatch()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  function handleSubmit(event) {
    event.preventDefault()
    dispatch(fetchLogin({ username, password }))
    
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <label style={{ display: 'block' }} htmlFor="username">
        Usuário
      </label>
      <input
        value={username}
        type="text"
        id="username"
        onChange={({ target }) => setUsername(target.value)}
      />
      {username}
      <label style={{ display: 'block' }} htmlFor="password">
        Senha
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>enviar</button>
       <p>{data?.email}</p>
    </form>
  )
}



export default App
