import React, { useState, useEffect } from 'react'
import "./App.css"
import cw from "./assets/cw.svg"
import Card from './components/Card'




const App = () => {
  const [user, setUser] = useState([])

  useEffect(()=>{
    randomUser()
  },[])

  const randomUser =()=> {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => setUser(data.results) )
  }


  return (
    <div>
      <div className="App">
          <img src={cw} alt="cw_logo" style={{"margin":"50px"}}/>

          {user.map((item,index) => {
            return <Card ömer={item} key={index} randomUser={randomUser}/>
            
          })}

      </div>

    </div>
  )
}

export default App
