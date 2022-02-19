import React from 'react'
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Checkout from '../components/Checkout/Checkout';
import QuienesSomos from '../components/QuienesSomos/QuienesSomos';
import Navbar from '../components/Navbar/Navbar';





const Rutas = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Welcome to Jaus Store'}/>} />
            <Route path='/cart' element={<ItemDetailContainer />} />
            <Route path='/cart/checkout' element={<Checkout />} />
            <Route path='/quienessomos' element={<QuienesSomos/>}/>
            <Route path='/item/:id' element={<QuienesSomos/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas