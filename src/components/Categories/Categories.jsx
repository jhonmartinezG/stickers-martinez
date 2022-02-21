import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Categories.css'


const Categories = ({category, backgroundImage}) => {
  return (
        <NavLink to={`/category/${category}`} className='categories-container flex justify-center items-end hover:brightness-105 cursor-pointer no-underline '
            style={{ backgroundImage: `url(${backgroundImage})` , backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
            >
            <h4 className='text-white font-black uppercase no-underline'>{category} </h4>
        </NavLink>
      
    
  )
}

export default Categories