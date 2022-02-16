import React from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


const ItemListContainer = ({ greeting }) => {
    return (
        <div  className="flex p-2 flex-col justify-center items-center ">
            <h1 className='text-6xl font-extrabold underline hover:underline decoration-sky decoration-8 py-8'>{greeting}</h1>
            <div className='flex flex-wrap'>
                <ItemList/>
            </div>
        </div>
    );
};

export default ItemListContainer;
