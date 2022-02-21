import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer/CategoriesContainer'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'


const Home = () => {
  return (
    <div>
        <CategoriesContainer  />
        <ItemListContainer greeting={'Bienvenidos a House Store'} />
    </div>
  )
}

export default Home