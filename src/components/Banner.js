import React from 'react';

export default function Banner() {
    return(
        <div className='banner'>
            <img src='../images/banner.png' alt='banner, dog in bag' className='banner__image' />
            <div className='banner__info'>
                <h3 className='banner__info-collection'>Huge collection</h3>
                <h1 className='banner__info-title'>New bags</h1>
                <p className='banner__info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae nam officiis et pariatur autem, nobis repellat odio deleniti, quia unde possimus? Sunt quo veniam excepturi tempora esse suscipit nihil.</p>
                <button className='banner__info-button'>Shop Now</button>
            </div>
        </div>
    )
}