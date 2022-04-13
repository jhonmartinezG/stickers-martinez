import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import db from '../../service/firebase';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

  const { info, setInfo } = useContext(CartContext)
  const category = useParams()

  const getData = async () => {
    const data = collection(db,"items")
    const col = await getDocs(data)
    const result = col.docs.map((doc) => doc = ({id: doc.id,...doc.data()}))
    if(category.category) {
      const categoryList = result.filter(
        (item) => item.categoria === category.category
      );
      setInfo(categoryList)
    } else {
      setInfo(result)
    }
  }  

  useEffect(() =>{
      getData()
  }, [])

    return (
        <div className="flex p-2 flex-col justify-center items-center ">
            <h1 className='greeting text-4xl font-extrabold underline hover:underline decoration-brown decoration-8 py-8'>{greeting}</h1>
            <div className='d-flex flex-wrap'>
                  <ItemList data={info}/>
            </div>
        </div>
    );
};

export default ItemListContainer;
