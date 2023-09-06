import React from 'react'
import './style.css'


const Footer = () => {
    const today = new Date();
    console.log(today.getFullYear())
  return (
    <footer>
      <p>copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer
