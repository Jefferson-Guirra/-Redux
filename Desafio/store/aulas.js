//ESTADO INICIAL
const initialState  = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

//CONSTANTES
const COMPLETAR_AULA= 'aula/COMPLETAR'
const COMPLETAR_CURSO= 'curso/COMPLETAR'
const RESETAR_CURSO= 'curso/RESETAR'

//ACTIONS

export const completarAula = (payloader) => ({type:COMPLETAR_AULA,payloader})
export const completarCurso = ()=> ({type:COMPLETAR_CURSO})
export const resetarCurso = ()=> ({type:RESETAR_CURSO})

const reducer = immer.produce((state,action)=>{
  switch (action.type){
    case COMPLETAR_AULA:
      const index = state.findIndex((item)=>item.id===action.payloader)
      if(!isNaN(index) && state[index]) state[index].completa = true
      break
    case COMPLETAR_CURSO:
      state.forEach((aula)=>aula.completa=true)
      break
    case RESETAR_CURSO:
      state.forEach((aula)=>aula.completa=false)
      break

  }
},initialState)

export default reducer

