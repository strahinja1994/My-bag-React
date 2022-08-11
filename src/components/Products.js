import React from 'react';
import { dataBags } from './BagsData';
import PurpleHearts from './PurpleHearts'
import Fullscreen from './Fullscreen';

export default function Products() {

    const bags = dataBags.map((bag) => {
        return(
            <div key={bag.id} className='products__bags-bag'>
                <div className='products__bags-bag--cover'>
                    <img src={bag.src} alt={bag.alt} className='products__bags-bag--image' />
                    <PurpleHearts
                        purpleHeart={bag.purple}
                    />
                    <Fullscreen
                        zoom={bag.maximize}
                        image={bag.src}
                        alt={bag.alt}
                        title={bag.title}
                        text={bag.text}
                        price={bag.price}
                    />
                    <button className='products__bags-bag--button'>Add to cart</button>
                </div>
                <h2 className='products__bags-bag--title'>{bag.title}</h2>
                <h3 className='products__bags-bag--price'>{bag.price}$</h3>
            </div>
        )
    })

    return(
        <main id='products' className='products'>
            <h1 className='products__title'>Our Products</h1>
            <div className='products__bags'>
                {bags}
            </div>
        </main>
    )
}