import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const CarouselComponent = () => {
  return (
    <Carousel>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0318/3188/3907/files/Banner-3C_1944x.jpg" alt='caorusel' />
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0318/3188/3907/files/Banner-2C_1944x.jpg" alt='caorusel' />
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0318/3188/3907/files/Banner-4C_1944x.gif"  alt='caorusel'/>
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0318/3188/3907/files/Banner-1C_1944x.gif" alt='caorusel' />
        </div>
    </Carousel>
  )
}

export default CarouselComponent
