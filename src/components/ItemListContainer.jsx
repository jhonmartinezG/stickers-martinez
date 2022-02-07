import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className='flex w-100 justify-center items-center h-44 flex-col mt-40 '>
            <h1 className='text-6xl font-extrabold underline hover:underline decoration-sky decoration-8'>{greeting}</h1>
            <div className='flex flex-wrap'>
                <ItemCount productName={"Silla Sala Comedor"} initalValue={1} stock={7} />
            </div>
        </div>
    );
};

export default ItemListContainer;
