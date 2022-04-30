import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, Pagination, Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax } from 'swiper';


//banner
import banner1 from '../../banner-1.jpg'
import banner2 from '../../banner-2.jpg'
import banner3 from '../../banner-3.jpg'
import banner4 from '../../banner-4.jpg'
import banner5 from '../../banner-5.jpg'
import banner6 from '../../banner-6.jpg'
import banner7 from '../../banner-7.jpg'
import banner8 from '../../banner-8.jpg'
import banner9 from '../../banner-9.jpg'

const Carousel = () => {
    return (
        <div className='slider-body '>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
                <SwiperSlide><img src={banner1}alt=''/></SwiperSlide>
          <SwiperSlide><img src={banner2}alt=''/></SwiperSlide>
          <SwiperSlide><img src={banner3}alt=''/></SwiperSlide>
          <SwiperSlide><img src={banner4}alt=''/></SwiperSlide>
          <SwiperSlide><img src={banner5}alt=''/></SwiperSlide>
          <SwiperSlide><img src={banner6}alt=''/></SwiperSlide>
          <SwiperSlide><img src={banner7}alt=''/></SwiperSlide>
          <SwiperSlide><img src={banner8}alt=''/></SwiperSlide>
          <SwiperSlide><img src={banner9}alt=''/></SwiperSlide>
          
        </Swiper>
      </div>
    );
};

export default Carousel;
