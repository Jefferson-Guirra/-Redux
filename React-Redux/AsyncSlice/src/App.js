import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementar, somar } from './store/contador'
import { autoLogin, Login } from './store/login'

function App() {
  const dispatch = useDispatch()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const {data} = useSelector((state)=> state.login.user)
  
  React.useEffect(()=>{
    dispatch(autoLogin())
  },[dispatch])
  
  function handleSubmit(event) {
    event.preventDefault()
    dispatch(Login({ username, password }))
    
    
  }
  return (
    <>
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
      </form>
      <button onClick={()=> dispatch(somar(2))}>Somar</button>
      <p>{data?.email}</p>
    </>
    )

}



export default App
