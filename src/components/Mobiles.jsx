import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';

export default function Mobiles() {
    return (
        <div className="md:hidden flex items-center py-2">
            <Swiper
                slidesPerView="2.5"
                spaceBetween={10}
                className="px-4"
            >
                <SwiperSlide className="min-w-[100px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                    <Link to={'shock-absorbes'} className="px-3 w-[120px] py-1 text-plum rounded-lg mx-3 hover:text-indigo-300 active:text-indigo-300" >Mobiles</Link>
                </SwiperSlide>
                <SwiperSlide className="min-w-[100px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                    <Link to={'shock-absorbes'} className="px-3 w-[120px] py-1 text-plum rounded-lg mx-3 hover:text-indigo-300 active:text-indigo-300" >Laptops</Link>
                </SwiperSlide>
                <SwiperSlide className="min-w-[100px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                    <Link to={'shock-absorbes'} className="px-3 w-[120px] py-1 text-plum rounded-lg mx-3 hover:text-indigo-300 active:text-indigo-300" >Accessories</Link>
                </SwiperSlide>
                <SwiperSlide className="min-w-[100px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                    <Link to={'shock-absorbes'} className="px-3 w-[120px] py-1 text-plum rounded-lg mx-3 hover:text-indigo-300 active:text-indigo-300" >Others</Link>
                </SwiperSlide>
                <SwiperSlide className="min-w-[100px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                    <Link to={'shock-absorbes'} className="px-3 w-[120px] py-1 text-plum rounded-lg mx-3 hover:text-indigo-300 active:text-indigo-300" >Gadgets</Link>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}
