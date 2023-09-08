import React from 'react'
import './style.css'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'


const Content = () => {
  const [items, setItems] = useState([
    { 
      id:1,
      checked:false,
      item:"item1"
    },
    { 
      id:2,
      checked:false,
      item:"item2"
    },
    { 
      id:3,
      checked:false,
      item:"item3"
    }
  ]);
  
  const handleCheck = (id)=>{
    const listItems = items.map((item)=>(id=== item.id) ? { ...item, checked : !item.checked} : item)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  const handleDelete = (id)=>{
    const listItems = items.filter((item)=>item.id !== id)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }
       
  return (
    <main>
    {items.length ? (
     <ul>
      {
        items.map((item)=>(
          <li className = "item" key={item.id}>
            <input
              type='checkbox'
              onChange={()=>handleCheck(item.id)}
              checked= {item.checked}
            />
            <label
            style={(item.checked) ? {textDecoration: 'line-through'} : null}
            onDoubleClick={()=>handleCheck(item.id)}
            >{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" onClick={()=> handleDelete(item.id)}/>
          </li>
        ))
      }
     </ul>):(
        <p style={{marginTop: '2rem'}}>Your List is Empty</p>
     )}
    </main>
  )
}

export default Content
