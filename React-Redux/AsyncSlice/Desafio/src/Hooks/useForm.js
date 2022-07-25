import React from "react"
const types = {
  email:{
    regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message:'Email inválido.'
  },
  password:{
    regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: 'A senha deve conter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.'
  }
}
const useForm = (type)=>{
  const [error,setError] = React.useState(null)
  const [value,setValue] = React.useState('')
  
  function validate(value){
    if(type === false) return true
    if(value.length===0){
      setError('Preencha este Campo.')
      return false
    }
    if (types[type] && !types[type].regex.test(value)){
      setError(types[type].message)
      return false
    }
    else {
      setError(null)
      return true
    }
  

  }
  function onChange({target}){
    setValue(target.value)
    if(error)validate(target.value)
  }


  return {
    value,
    error,
    onChange,
    setValue,
    onBlur:()=>validate(value),
    validate:()=> validate(value)
  }
  
}
export default useForm