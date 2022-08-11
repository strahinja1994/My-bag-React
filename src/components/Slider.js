import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider() {

    SwiperCore.use([Autoplay]);

    const messages = [
        {id:'number1', text:"20% off on your first order!" },
        {id:'number2', text:"Summer sale starts now, visit any store."},
        {id:'number3', text:"Our collections are limited so hurry up!"}
    ]

    const titles = messages.map((message) => {
        return(
            <SwiperSlide className='slider__description'  key={message.id}>
                <h1 className='slider__description-title'>{message.text}</h1>
            </SwiperSlide>
        )
    })

    return(
        <Swiper className='slider'
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{delay: 4000, disableOnInteraction: true}}
        >
            {titles}
        </Swiper>
    )
}