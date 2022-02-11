import React from 'react';
import ItemList from './ItemList';


const ItemListContainer = ({ greeting }) => {
    return (
        <div  className="d-flex p-2 bd-highlight flex-column justify-content-center align-items-center flex-wrap">
            <h1 className='text-6xl font-extrabold underline hover:underline decoration-sky decoration-8 py-8'>{greeting}</h1>
            <div className='flex flex-wrap'>
                <ItemList/>
            </div>
        </div>
    );
};

export default ItemListContainer;
