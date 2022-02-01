import React from 'react';

const ItemListContainer = ({ greeting, text }) => {
    return (
        <div className='flex w-5/5 justify-center items-center h-44 flex-col'>
            <h1 className='text-6xl font-extrabold underline hover:underline decoration-sky decoration-8'>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;