import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
import CartProvider, { CartContext } from "../../context/CartProvider";





const ItemCount = ({initalValue, stock, dataList}) => {


    let [counter, setCounter] = useState(initalValue);
    const [isClicked, setIsClicked] = useState(false)

     const incrementNumber = () => {
         counter < stock && setCounter(counter + 1)
     }

     const decrementNumber = () => {
        counter <= initalValue ? setCounter(counter = initalValue) : setCounter(counter - 1)
     }

     const addItemCart = () => {
        Swal.fire(
            'Productos agregado al carrito',
            `Tus ${counter} productos han sido agregados al`,
            'success'
        )
        setIsClicked(true)
     }

     const { arrayProducts, setArrayProducts } = useContext(CartContext)


     const addElement = () => {
         const objectItem = {
             id: dataList.id,
             title: dataList.title,
             cuantity: counter,
             price: dataList.price,
             image: dataList.pictureUrl
         }
         setArrayProducts([...arrayProducts, objectItem ])
         console.log(arrayProducts)
     }

    return (
        <div className="flex flex-col border my-10 mx-4 border-2 w-52">
            
                { !isClicked && <div className="flex flex-col">
                        <div className="flex justify-around items-center py-2 bg-gray-light ">
                            <button className="font-extrabold text-sky text-2xl" onClick={incrementNumber}>+</button>
                            <p>{counter}</p>
                            <button className="font-extrabold text-sky text-2xl" onClick={decrementNumber}>-</button>
                        </div>
                        <button className="btn btn-primary" onClick={() => addItemCart()} >Agregar al carrito</button>
                    </div>
                }
                { isClicked && <div className="flex flex-col">
                    <NavLink to={"/cart"} ><button className="btn btn-primary" onClick={() => addElement()}>Ir al carrito de compras</button></NavLink> 
                </div>
                }
        </div>
    )
}

export default ItemCount;