import React, { useState } from "react";



const ItemCount = ({initalValue, stock}) => {

    let [counter, setCounter] = useState(initalValue);

     const incrementNumber = () => {
         counter < stock && setCounter(counter + 1)
     }

     const decrementNumber = () => {
        counter <= initalValue ? setCounter(counter = initalValue) : setCounter(counter - 1)
     }

    return (
        <div className="flex flex-col border my-10 mx-4 border-2">
            <div className="flex justify-around items-center py-2 bg-gray-light ">
                <button className="font-extrabold text-sky text-2xl" onClick={incrementNumber}>+</button>
                <p>{counter}</p>
                <button className="font-extrabold text-sky text-2xl" onClick={decrementNumber}>-</button>
            </div>
        </div>
    )
}

export default ItemCount;