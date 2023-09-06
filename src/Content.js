import React from 'react'
import './style.css'
import { useState } from 'react';


const Content = () => {
  const [name, setName] = useState('Dave');
  const [count,setCount] = useState(0)

    const handleNameChange = ()=>{
        const name = ['Bob','Vraj','Shefali','Rishabh']
        const i= Math.floor(Math.random() * 4)
        setName(name[i]) 
      }
      const handleClick = ()=>{
        setCount(count + 1)
        console.log(count)
      }
      const handleClick2 = ()=>{
        console.log(count)
      }
     
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Count 1</button>
      <button onClick={handleClick2}>Count 2</button>

    </main>
  )
}

export default Content
