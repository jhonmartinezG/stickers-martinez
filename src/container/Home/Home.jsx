import React from 'react'
import CarouselComponent from '../../components/Carousel/CarouselComponent'
import CategoriesContainer from '../../components/CategoriesContainer/CategoriesContainer'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'



const Home = () => {
  return (
    <div>
        <CarouselComponent />
        <CategoriesContainer />
        <ItemListContainer greeting={'Bienvenidos a House Store'} />
    </div>
  )
}

export default Home