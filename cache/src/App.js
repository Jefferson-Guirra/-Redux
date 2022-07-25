import React from 'react'
import Photos from './Photos'

const App = () => {
  const [toggle,setToggle] = React.useState(true)
  

  
  return (
    <div>
      <button onClick={()=> setToggle((state)=> !state)}>exibir</button>
      {toggle && <Photos />}
    </div>
  )
}

export default App