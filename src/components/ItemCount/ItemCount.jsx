import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
import CartProvider, { CartContext } from "../../context/CartProvider";

const ItemCount = ({initalValue, stock, dataList}) => {


    let [counter, setCounter] = useState(initalValue);

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
        const objectItem = {
            id: dataList.id,
            title: dataList.title,
            cuantity: counter,
            price: dataList.price,
            image: dataList.pictureUrl
        }
        setArrayProducts([...arrayProducts, objectItem ])

        setCuantity(cuantity + counter)
     }

     const { arrayProducts, setArrayProducts, cuantity, setCuantity, isInCart } = useContext(CartContext)

     arrayProducts.length <= 0 && setCuantity(0)


    return (
        <div>
            <div className="flex flex-col mx-4 w-52">
                { !isInCart(dataList.id) && <div className="flex flex-col">
                        <div className="flex justify-around items-center py-2 bg-gray-light ">
                            <button className="font-extrabold text-sky text-2xl" onClick={incrementNumber}>+</button>
                            <p>{counter}</p>
                            <button className="font-extrabold text-sky text-2xl" onClick={decrementNumber}>-</button>
                        </div>
                        <button className="btn btn-primary" onClick={() => addItemCart()} >Agregar al carrito</button>
                    </div>
                }
                
            </div>
            { 
                isInCart(dataList.id) && <NavLink to={"/cart"} ><button className="btn btn-primary">Terminar mi compra</button></NavLink> 
            }
        </div>
    )
}

export default ItemCount;