import React from 'react'
import DragonGame from './Components/DragonGame';
import "./index.css"

const App = () => {

  return (
    <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#000000"}}>
      <DragonGame/>
    </div>
  )
}

export default App;
