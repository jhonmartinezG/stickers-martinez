import React from 'react'
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Checkout from '../components/Checkout/Checkout';
import QuienesSomos from '../components/QuienesSomos/QuienesSomos';
import Navbar from '../components/Navbar/Navbar';
import Home from '../container/Home/Home';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Cart from '../components/Cart/Cart';

const Rutas = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/quienessomos' element={<QuienesSomos/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas