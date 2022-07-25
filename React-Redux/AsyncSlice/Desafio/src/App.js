import React from 'react'
import Input from './Components/Input'
import './App.css'
import Button from './Components/Button'
import { useDispatch, useSelector } from 'react-redux'
import login from './store/login'
import autoLogin from './store/autoLogin'
import Feed from './Components/Feed'
import useForm from './Hooks/useForm'

function App() {
  const state = useSelector(state => state)
  const loading = state.user.loading === true
  const user = state.user
  const dispatch = useDispatch()
  let wait = false
  const usuario = useForm()
  const password = useForm('password')
  const email = useForm('email')

  React.useEffect(() => {
    if (!wait) {
      dispatch(autoLogin())
      wait = true
    }
  }, [dispatch])

  function handleSubmit(event) {
    event.preventDefault()
    if(usuario.validate() && password.validate() && email.validate()){
      dispatch(login({ username: 'dog', password: 'dog' }))
    }
    
  }

  if (!user.data)
    return (
      <section className="container">
        <div className={`content  ${loading && 'contentActive'}`}>
          <form className="scale" onSubmit={handleSubmit}>
            <Input label="Usuário" id="username" type="text" {...usuario} />
            <Input label="Email" id="email" type="email" {...email} />
            <Input type="password" label="Senha" id="password" {...password} />
            <Button>Criar</Button>
          </form>
        </div>
      </section>
    )
  else {
    return <Feed />
  }
}

export default App
