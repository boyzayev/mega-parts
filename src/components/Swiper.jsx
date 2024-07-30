import React, { useState } from 'react';
// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ImageSwiper() {
    const [activeItem, setActiveItem] = useState('Automobile');

    const items = [
        'Automobile', 'Piston', 'Bus', 'Car',
        'Air Filter', 'Scooter', 'Telephone', 'Tablets'
    ];

    return (
        <div>
            <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between gap-2">
                    <div className="flex-col lg:flex hidden">
                        {items.map((item) => (
                            <button
                                key={item}
                                className={`text-xl p-2 rounded w-[150px] ${activeItem === item ? 'bg-gray-200 text-black' : 'bg-white text-black'}`}
                                onClick={() => setActiveItem(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="w-full md:w-[800px] flex justify-center items-center">
                        <Swiper
                            pagination={{ dynamicBullets: true }}
                            modules={[Pagination]}
                            className="mySwiper rounded-lg w-full"
                        >
                            <SwiperSlide>
                                <div className="relative">
                                    <img className='w-full md:h-[400px] h-[200px] object-cover' src="/images/hompage-3.avif" alt="Image 2" />
                                    <div className="absolute top-0 left-0 p-4">
                                        <h1 className='md:text-xl text-xs text-white'>Latest trending</h1>
                                        <h1 className='md:text-2xl text-xl font-bold text-white mt-2'>Electronic items</h1>
                                        <div className="mt-4">
                                            <button className='bg-white hover:bg-blue-500 hover:text-white text-black p-2 rounded'>Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative">
                                    <img className='w-full md:h-[400px] h-[200px] object-cover' src="/images/homepage-4.avif" alt="Image 3" />
                                    <div className="absolute top-0 left-0 p-4">
                                        <h1 className='md:text-xl text-xs text-white'>Latest trending</h1>
                                        <h1 className='md:text-2xl text-xl font-bold text-white mt-2'>Electronic items</h1>
                                        <div className="mt-4">
                                            <button className='bg-white hover:bg-blue-500 hover:text-white text-black p-2 rounded'>Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative">
                                    <img className='w-full md:h-[400px] h-[200px] object-cover' src="/images/homepage-5.avif" alt="Image 4" />
                                    <div className="absolute top-0 left-0 p-4">
                                        <h1 className='md:text-xl text-xs text-white'>Latest trending</h1>
                                        <h1 className='md:text-2xl text-xl font-bold text-white mt-2'>Electronic items</h1>
                                        <div className="mt-4">
                                            <button className='bg-white hover:bg-blue-500 hover:text-white text-black p-2 rounded'>Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative">
                                    <img className='w-full md:h-[400px] h-[200px] object-cover' src="/images/homepage-6.avif" alt="Image 5" />
                                    <div className="absolute top-0 left-0 p-4">
                                        <h1 className='md:text-xl text-xs text-white'>Latest trending</h1>
                                        <h1 className='md:text-2xl text-xl font-bold text-white mt-2'>Electronic items</h1>
                                        <div className="mt-4">
                                            <button className='bg-white hover:bg-blue-500 hover:text-white text-black p-2 rounded'>Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="p-2 lg:block hidden">
                        <div className="bg-[#E3F0FF] rounded p-2">
                            <div className="flex gap-3">
                                <img className='w-12 h-12' src="/images/Avatar.png" alt="" />
                                <div className="flex-col">
                                    <h1>Hi, user</h1>
                                    <h1>Let's get started</h1>
                                </div>
                            </div>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-gray-100 w-full h-10 mt-3 bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 text-lg">Join now</button>
                            <button className="inline-flex items-center text-blue-500 justify-center whitespace-nowrap rounded-md font-medium ring-offset-gray-100 w-full h-10 mt-1 bg-white hover:bg-white px-4 py-2 text-lg">Login</button>
                        </div>
                        <div className="bg-[#F38332] mt-2 py-2 pl-3 pr-8 text-white rounded-lg">
                            <p className="text-[20px] min-h-[95px]">Get US $10 off with a new supplier</p>
                        </div>
                        <div className="bg-[#55BDC3] mt-2 py-2 pl-4 pr-8 text-white rounded-lg">
                            <p className="text-[20px] min-h-[95px]">Send quotes with supplier preferences</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
