import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';




const ItemDetailContainer = () => {

    const datos = [
        {
            id: 0,
            title: "Silla Comedor",
            description: "Silla en policabornato blanco o negro con patas en pino pátula y soporte metálico negro. ¡Cómodas y versátiles! Nuestras sillas Eames se adaptan a cualquier lugar y lo llenan mucho estilo.",
            price: 150000,
            pictureUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/Eamesnegra_3_2400x.jpg",
            initalValue: 1,
            stock: 7
        },
        {
            id: 1,
            title: "Comedor",
            description: "Mesa de comedor para 4 puestos, fabricada en madera roble finger joint o pino triplex y pintada con pintura a base de agua. Acabado natural y poro semiabierto. ¡Amamos este comedor porque es fresco y a la vez acogedor! Este estilo se adapta a cualquier necesidad en tu hogar.",
            price: 150000,
            pictureUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/DSC_9738_2400x.jpg",
            initalValue: 1,
            stock: 7
        },
        {
            id: 2,
            title: "Mesa de noche",
            description: "Mesa de noche fabricada en chapilla de roble francés y pintada con pintura a base de agua, acabado natural y poro semi-abierto. Cuenta con dos cajones de apertura con riel y un entrepaño bajo.  No incluye accesorios ni decoración",
            price: 950000,
            pictureUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/WhatsAppImage2021-04-29at8.26.30AM_4_720x.jpg",
            initalValue: 1,
            stock: 7
        },
        {
          id: 3,
          title: "Mesa de noche",
          description: "Mesa de noche fabricada en chapilla de roble francés y pintada con pintura a base de agua, acabado natural y poro semi-abierto. Cuenta con dos cajones de apertura con riel y un entrepaño bajo.  No incluye accesorios ni decoración",
          price: 950000,
          pictureUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/WhatsAppImage2021-04-29at8.26.30AM_4_720x.jpg",
          initalValue: 1,
          stock: 7
        }
    ]

    const {id} = useParams()

    const [information, setInformation] = useState(null)

    useEffect(() => {
        const getData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(datos)
            }, 7000)
            
        })

        getData
        .then(response => {
            setInformation(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    console.log('data detail', information)
    
  return (
    <div className='flex justify-center align-center'>
        {
            information != null ? <h1>{<ItemDetail data={information[id]}/> }</h1> : <Loading />
        }
    </div>
  )
}

export default ItemDetailContainer