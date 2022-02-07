import React from 'react';
import ItemCount from './ItemCount';
import silla from '../assets/silla.jpg';
import escritorio from '../assets/escritorio.jpg';


const ItemListContainer = ({ greeting }) => {
    return (
        <div className='flex w-100 justify-center items-center h-44 flex-col mt-40 '>
            <h1 className='text-6xl font-extrabold underline hover:underline decoration-sky decoration-8'>{greeting}</h1>
            <div className='flex flex-wrap'>
                <ItemCount productName={"Silla Sala Comedor"} initalValue={1} stock={7} img={silla} />
                <ItemCount productName={"Escritorio 120cm"} initalValue={1} stock={3} img={escritorio} />
            </div>
        </div>
    );
};

export default ItemListContainer;
