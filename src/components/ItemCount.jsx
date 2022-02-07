import React, { useState } from "react";
import Silla from '../assets/silla.jpg';


const ItemCount = ({ productName, initalValue, stock}) => {

    let [counter, setCounter] = useState(initalValue);

     const incrementNumber = () => {
         counter < stock ? setCounter(counter + 1) : setCounter(counter = stock)
     }

     const decrementNumber = () => {
        counter <= initalValue ? setCounter(counter = initalValue) : setCounter(counter - 1)
     }

    return (
        <div className="flex flex-col border my-10 mx-5 border-2">
            <div className="flex flex-col items-center pb-2 border border-b-2 ">
                <img className="w-60 h-60" src={Silla} alt="" />
                <p>{productName}</p>
            </div>
            <div className="flex justify-around items-center py-2 bg-gray-light ">
                <button className="font-extrabold text-sky text-2xl" onClick={incrementNumber}>+</button>
                <p>{counter}</p>
                <button className="font-extrabold text-sky text-2xl" onClick={decrementNumber}>-</button>
            </div>
        </div>
    )
}

export default ItemCount;