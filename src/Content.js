import React from 'react'
import './style.css'


const Content = () => {

    const handleNameChange = ()=>{
        const name = ['Bob','Vraj','Shefali','Rishabh']
        const i= Math.floor(Math.random() * 4)
        return name[i]
      }
      const handleClick = ()=>{
        console.log("You click the button")
      }
      const handleClick2 = (name)=>{
        console.log(`${name} was click the button`)
      }
      const handleClick3 = (e)=>{
        console.log(e.target.innerHTML)
      }
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={()=> handleClick2('Vraj')}>Click Here</button>
      <button onClick={(e)=> handleClick3(e)}>Click Here</button>

    </main>
  )
}

export default Content
