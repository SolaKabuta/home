import MobileHero from '/images/mobile-image-hero-1.jpg'
import MobileHero2 from '/images/mobile-image-hero-2.jpg'
import MobileHero3 from '/images/mobile-image-hero-3.jpg'



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import {Navigation, EffectFade, Pagination} from 'swiper/modules';
import 'swiper/css/effect-fade';
import SwiperNavBtns from "../SwiperNavBtns.jsx";

const HeroSection = () => {
    return (
        <>
            <Swiper
                    spaceBetween={30}
                     loop={true}
                     effect={'fade'}
                     pagination={{
                         clickable: true,
                     }}
                     modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper">
                <SwiperSlide>
                    <img
                        className={''}
                        src={MobileHero}
                        alt={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className={''}
                        src={MobileHero2}
                        alt={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className={''}
                        src={MobileHero3}
                        alt={'/'}/>
                </SwiperSlide>

                {/*NAVIGATION BUTTONS*/}
                <div
                    className={'absolute bottom-0 right-0 z-50 '}>
                    <SwiperNavBtns/>
                </div>
            </Swiper>

        </>
    );
};

export default HeroSection;