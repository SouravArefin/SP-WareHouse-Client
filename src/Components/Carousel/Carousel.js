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
import banner1 from '../../Greenbee/10002.jpg'
import banner2 from '../../Greenbee/10003.jpg'
import banner3 from '../../Greenbee/10004.jpg'


const Carousel = () => {
    return (
        <div className='slider-body mt-[-20px]'>
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
          
          
        </Swiper>
      </div>
    );
};

export default Carousel;
