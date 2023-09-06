import React from 'react'
import './style.css'


const Content = () => {

    const handleNameChange = ()=>{
        const name = ['Bob','Vraj','Shefali','Rishabh']
        const i= Math.floor(Math.random() * 4)
        return name[i]
      }
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
    </main>
  )
}

export default Content
