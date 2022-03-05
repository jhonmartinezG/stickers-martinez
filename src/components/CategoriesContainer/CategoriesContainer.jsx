import React from 'react'
import Categories from '../Categories/Categories'
import sala from '../../assets/sala.jpg'
import comedor from '../../assets/comedor.jpg'
import habitacion from '../../assets/habitacion.jpg'
import decoracion from '../../assets/decoracion.jpg'



const CategoriesContainer = () => {
  return (
    <div className='flex w-full wrap'>
            <Categories category={'comedores'} backgroundImage={comedor} />
            <Categories category={'habitaciones'} backgroundImage={habitacion}/>
            <Categories category={'salas'} backgroundImage={sala}/>
            <Categories category={'decoraciones'} backgroundImage={decoracion}/>  
    </div>
  )
}

export default CategoriesContainer