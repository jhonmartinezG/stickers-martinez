import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({ greeting }) => {

    const [info, setInfo] = useState(null)

    const { category } = useParams()

    const data = [
      {
          id: 0,
          title: "Silla Comedor",
          categoria: 'comedores',
          description: "Silla en policabornato blanco o negro con patas en pino pátula y soporte metálico negro. ¡Cómodas y versátiles! Nuestras sillas Eames se adaptan a cualquier lugar y lo llenan mucho estilo.",
          price: 150000,
          pictureUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/Eamesnegra_3_2400x.jpg",
          initalValue: 1,
          stock: 7
      },
      {
          id: 1,
          title: "Comedor",
          categoria: 'comedores',
          description: "Mesa de comedor para 4 puestos, fabricada en madera roble finger joint o pino triplex y pintada con pintura a base de agua. Acabado natural y poro semiabierto. ¡Amamos este comedor porque es fresco y a la vez acogedor! Este estilo se adapta a cualquier necesidad en tu hogar.",
          price: 150000,
          pictureUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/DSC_9738_2400x.jpg",
          initalValue: 1,
          stock: 7
      },
      {
          id: 2,
          title: "Mesa de noche",
          categoria: 'salas',
          description: "Mesa de noche fabricada en chapilla de roble francés y pintada con pintura a base de agua, acabado natural y poro semi-abierto. Cuenta con dos cajones de apertura con riel y un entrepaño bajo.  No incluye accesorios ni decoración",
          price: 950000,
          pictureUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/WhatsAppImage2021-04-29at8.26.30AM_4_720x.jpg",
          initalValue: 1,
          stock: 7
      },
      {
        id: 3,
        title: "Cama Cassara",
        categoria: 'habitaciones',
        description: "Cama en madera alistonada con acabado natural y apliques en poliuretano blanco. Incluye espaldar en madera con dos mesas de noche. No incluye colchón.",
        price: 950000,
        pictureUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/Cama-Cassara_2400x.jpg",
        initalValue: 1,
        stock: 7
      },
      {
        id: 4,
        title: "Espejo Alongado",
        categoria: 'decoraciones',
        description: "Espejo alongado con borde en chapilla de roble ",
        price: 770000,
        pictureUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/Espejoalongado_2_2400x.jpg",
        initalValue: 1,
        stock: 7
      },
      {
        id: 5,
        title: "Mesa de comedor circular",
        categoria: 'comedores',
        description: "Comedor circular en roble pintado con pintura a base de agua con patas en roble ranurado",
        price: 1800000,
        pictureUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/DSC_9624_2400x.jpg",
        initalValue: 1,
        stock: 7
      }
    ]
  
    useEffect(() => {
      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => { 
          resolve(data);
        }, 3000);
      });
  
      myPromise
      .then(response => {
        if(category){
          const categoryList = response.filter(
            (product) => product.categoria === category
          );
          return setInfo(categoryList);
        } 

        return setInfo(response)
      })
      .catch((err) => {
        console.log(err);
      })
    }, [])

    console.log(info)

   

    return (
        <div className="flex p-2 flex-col justify-center items-center ">
            <h1 className='text-6xl font-extrabold underline hover:underline decoration-sky decoration-8 py-8'>{greeting}</h1>
            <div className='d-flex flex-wrap'>
                <ItemList data={info}/>
            </div>
        </div>
    );
};

export default ItemListContainer;
