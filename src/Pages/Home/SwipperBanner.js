import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'

import "./styles.css";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";

export default function SwipperBanner() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={banner1} alt=''/></SwiperSlide>
        <SwiperSlide> <img src={banner2} alt=''/></SwiperSlide>
        <SwiperSlide> <img src={banner3} alt=''/></SwiperSlide>
        <SwiperSlide> <img src={banner4} alt=''/></SwiperSlide>
        <SwiperSlide> <img src={banner1} alt=''/></SwiperSlide>
        <SwiperSlide> <img src={banner2} alt=''/></SwiperSlide>
        <SwiperSlide> <img src={banner3} alt=''/></SwiperSlide>
        <SwiperSlide> <img src={banner4} alt=''/></SwiperSlide>
        <SwiperSlide> <img src={banner1} alt=''/></SwiperSlide>
      </Swiper>
    </>
  );
}