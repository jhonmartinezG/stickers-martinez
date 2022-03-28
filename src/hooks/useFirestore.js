import { addDoc, collection } from "firebase/firestore";
import React from 'react'
import { useState } from "react";
import db from "../service/firebase";




const useFirestore = () => {

    const [orders, setOrders ] = useState( )
    const [success, setSuccess] = useState()

    const createOrder = async ({ clientData }) => {
    
      setSuccess(false)

      try {
        const order = collection(db,"orders")
        const collect = await addDoc(order, clientData)
        
        setOrders(collect.id)

        setSuccess(true)
  
      } catch (error) {
        console.log(error)
        setSuccess(false)
      }
    }

  return {
    createOrder, orders, success
  }
}

export default useFirestore

