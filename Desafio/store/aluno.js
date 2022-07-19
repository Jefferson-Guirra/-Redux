//ESTADO INICIAL
export const aluno = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

//CONSTANTES
const INCREMENTAR = 'aluno/INCREMENTAR_TEMPO'
const REDUZIR = 'aluno/REDUZIR_TEMPO'
const MODIFICAR = 'aluno/MODIFICAR_EMAIL'

//ACTIONS

export const incrementar = ()=> ({type:INCREMENTAR})
export const reduzir = ()=> ({type:REDUZIR})
export const modificar = (payload) => ({type:MODIFICAR,payload})


const reducer = immer.produce((state,action)=>{
  switch (action.type){
    case INCREMENTAR:
      state.diasRestantes = state.diasRestantes + 1
      break
    case REDUZIR:
      state.diasRestantes = state.diasRestantes - 1
      break
    case MODIFICAR:
        state.email = action.payload
        break
  }
},aluno)

export default reducer