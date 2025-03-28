import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

const ProductSwiper = () => {
    const products1 = [
        {
            "id": 1,
            "image": "/images/parts/part1.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 5,
            "title": "Akom",
            "subtitle": "Brake Disc",
            "cost": 110000,
            "productImages": [
                { "image": "/images/parts/part1.png", "id": 1 },
                { "image": "/images/recommenddedparts/part1.png", "id": 2 },
                { "image": "/images/recommenddedparts/part2.png", "id": 3 },
                { "image": "/images/recommenddedparts/part3.png", "id": 4 },
                { "image": "/images/recommenddedparts/part4.png", "id": 5 },
                { "image": "/images/recommenddedparts/part1.png", "id": 6 }
            ]

        },
        {
            "id": 2,
            "image": "/images/parts/part2.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 7,
            "title": "Plug",
            "subtitle": "Brake Disc",
            "cost": 120000,
            "productImages": [
                { "image": "/images/parts/part2.png", "id": 1 },
                { "image": "/images/parts/part2.png", "id": 2 },
                { "image": "/images/parts/part2.png", "id": 3 },
                { "image": "/images/parts/part2.png", "id": 4 },
                { "image": "/images/parts/part2.png", "id": 5 },
                { "image": "/images/parts/part2.png", "id": 6 }
            ]

        },
        {
            "id": 3,
            "image": "/images/parts/part3.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 1,
            "title": "Absorbes",
            "subtitle": "Brake Disc",
            "cost": 130000,
            "productImages": [
                { "image": "/images/parts/part3.png", "id": 1 },
                { "image": "/images/parts/part3.png", "id": 2 },
                { "image": "/images/parts/part3.png", "id": 3 },
                { "image": "/images/parts/part3.png", "id": 4 },
                { "image": "/images/parts/part3.png", "id": 5 },
                { "image": "/images/parts/part3.png", "id": 6 }
            ]

        },
        {
            "id": 4,
            "image": "/images/parts/part4.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 9,
            "title": "Air fresher",
            "subtitle": "Brake Disc",
            "cost": 140000,
            "productImages": [
                { "image": "/images/parts/part4.png", "id": 1 },
                { "image": "/images/parts/part4.png", "id": 2 },
                { "image": "/images/parts/part4.png", "id": 3 },
                { "image": "/images/parts/part4.png", "id": 4 },
                { "image": "/images/parts/part4.png", "id": 5 },
                { "image": "/images/parts/part4.png", "id": 6 }
            ]

        },
        {
            "id": 5,
            "image": "/images/parts/part5.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 6,
            "title": "Fara",
            "subtitle": "Brake Disc",
            "cost": 150000,
            "productImages": [
                { "image": "/images/parts/part5.png", "id": 1 },
                { "image": "/images/parts/part5.png", "id": 2 },
                { "image": "/images/parts/part5.png", "id": 3 },
                { "image": "/images/parts/part5.png", "id": 4 },
                { "image": "/images/parts/part5.png", "id": 5 },
                { "image": "/images/parts/part5.png", "id": 6 }
            ]

        },
        {
            "id": 6,
            "image": "/images/recommenddedparts/part1.png",
            "description": "Shock Absorbes and Brake Discs and parts for automobiles main parts",
            "discount": 8,
            "title": "Shina",
            "subtitle": "Brake Disc",
            "cost": 160000,
            "productImages": [
                { "image": "/images/parts/part6.png", "id": 1 },
                { "image": "/images/parts/part6.png", "id": 2 },
                { "image": "/images/parts/part6.png", "id": 3 },
                { "image": "/images/parts/part6.png", "id": 4 },
                { "image": "/images/parts/part6.png", "id": 5 },
                { "image": "/images/parts/part6.png", "id": 6 }
            ]
        },
        {
            "id": 7,
            "image": "/images/recommenddedparts/part3.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 5,
            "subtitle": "Brake Disc",
            "title": "Moy",
            "cost": 110000,
            "productImages": [
                { "image": "/images/parts/part1.png", "id": 1 },
                { "image": "/images/recommenddedparts/part1.png", "id": 2 },
                { "image": "/images/recommenddedparts/part2.png", "id": 3 },
                { "image": "/images/recommenddedparts/part3.png", "id": 4 },
                { "image": "/images/recommenddedparts/part4.png", "id": 5 },
                { "image": "/images/recommenddedparts/part1.png", "id": 6 }
            ]

        },
        {
            "id": 8,
            "image": "/images/parts/part2.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 7,
            "title": "Kalpak",
            "subtitle": "Brake Disc",
            "cost": 120000,
            "productImages": [
                { "image": "/images/parts/part2.png", "id": 1 },
                { "image": "/images/parts/part2.png", "id": 2 },
                { "image": "/images/parts/part2.png", "id": 3 },
                { "image": "/images/parts/part2.png", "id": 4 },
                { "image": "/images/parts/part2.png", "id": 5 },
                { "image": "/images/parts/part2.png", "id": 6 }
            ]

        },
        {
            "id": 9,
            "image": "/images/parts/part3.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 1,
            "title": "Kuzov",
            "subtitle": "Brake Disc",
            "cost": 130000,
            "productImages": [
                { "image": "/images/parts/part3.png", "id": 1 },
                { "image": "/images/parts/part3.png", "id": 2 },
                { "image": "/images/parts/part3.png", "id": 3 },
                { "image": "/images/parts/part3.png", "id": 4 },
                { "image": "/images/parts/part3.png", "id": 5 },
                { "image": "/images/parts/part3.png", "id": 6 }
            ]

        },
        {
            "id": 10,
            "image": "/images/parts/part4.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 9,
            "title": "Tanirovka",
            "subtitle": "Brake Disc",
            "cost": 140000,
            "productImages": [
                { "image": "/images/parts/part4.png", "id": 1 },
                { "image": "/images/parts/part4.png", "id": 2 },
                { "image": "/images/parts/part4.png", "id": 3 },
                { "image": "/images/parts/part4.png", "id": 4 },
                { "image": "/images/parts/part4.png", "id": 5 },
                { "image": "/images/parts/part4.png", "id": 6 }
            ]

        },
        {
            "id": 11,
            "image": "/images/recommenddedparts/part3.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 6,
            "title": "Akumlator",
            "subtitle": "Brake Disc",
            "cost": 150000,
            "productImages": [
                { "image": "/images/parts/part5.png", "id": 1 },
                { "image": "/images/parts/part5.png", "id": 2 },
                { "image": "/images/parts/part5.png", "id": 3 },
                { "image": "/images/parts/part5.png", "id": 4 },
                { "image": "/images/parts/part5.png", "id": 5 },
                { "image": "/images/parts/part5.png", "id": 6 }
            ]

        },
        {
            "id": 12,
            "image": "/images/parts/part6.png",
            "description": "Shock Absorbes and Brake Discs and parts for automobiles main parts",
            "discount": 8,
            "title": "Zapchast",
            "subtitle": "Brake Disc",
            "cost": 160000,
            "productImages": [
                { "image": "/images/parts/part6.png", "id": 1 },
                { "image": "/images/parts/part6.png", "id": 2 },
                { "image": "/images/parts/part6.png", "id": 3 },
                { "image": "/images/parts/part6.png", "id": 4 },
                { "image": "/images/parts/part6.png", "id": 5 },
                { "image": "/images/parts/part6.png", "id": 6 }
            ]
        }
    ];

    const products2 = [
        {
            "id": 1,
            "image": "/images/parts/part1.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 5,
            "title": "Akom",
            "subtitle": "Brake Disc",
            "cost": 110000,
            "productImages": [
                { "image": "/images/parts/part1.png", "id": 1 },
                { "image": "/images/recommenddedparts/part1.png", "id": 2 },
                { "image": "/images/recommenddedparts/part2.png", "id": 3 },
                { "image": "/images/recommenddedparts/part3.png", "id": 4 },
                { "image": "/images/recommenddedparts/part4.png", "id": 5 },
                { "image": "/images/recommenddedparts/part1.png", "id": 6 }
            ]

        },
        {
            "id": 2,
            "image": "/images/parts/part2.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 7,
            "title": "Plug",
            "subtitle": "Brake Disc",
            "cost": 120000,
            "productImages": [
                { "image": "/images/parts/part2.png", "id": 1 },
                { "image": "/images/parts/part2.png", "id": 2 },
                { "image": "/images/parts/part2.png", "id": 3 },
                { "image": "/images/parts/part2.png", "id": 4 },
                { "image": "/images/parts/part2.png", "id": 5 },
                { "image": "/images/parts/part2.png", "id": 6 }
            ]

        },
        {
            "id": 3,
            "image": "/images/parts/part3.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 1,
            "title": "Absorbes",
            "subtitle": "Brake Disc",
            "cost": 130000,
            "productImages": [
                { "image": "/images/parts/part3.png", "id": 1 },
                { "image": "/images/parts/part3.png", "id": 2 },
                { "image": "/images/parts/part3.png", "id": 3 },
                { "image": "/images/parts/part3.png", "id": 4 },
                { "image": "/images/parts/part3.png", "id": 5 },
                { "image": "/images/parts/part3.png", "id": 6 }
            ]

        },
        {
            "id": 4,
            "image": "/images/parts/part4.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 9,
            "title": "Air fresher",
            "subtitle": "Brake Disc",
            "cost": 140000,
            "productImages": [
                { "image": "/images/parts/part4.png", "id": 1 },
                { "image": "/images/parts/part4.png", "id": 2 },
                { "image": "/images/parts/part4.png", "id": 3 },
                { "image": "/images/parts/part4.png", "id": 4 },
                { "image": "/images/parts/part4.png", "id": 5 },
                { "image": "/images/parts/part4.png", "id": 6 }
            ]

        },
        {
            "id": 5,
            "image": "/images/parts/part5.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 6,
            "title": "Fara",
            "subtitle": "Brake Disc",
            "cost": 150000,
            "productImages": [
                { "image": "/images/parts/part5.png", "id": 1 },
                { "image": "/images/parts/part5.png", "id": 2 },
                { "image": "/images/parts/part5.png", "id": 3 },
                { "image": "/images/parts/part5.png", "id": 4 },
                { "image": "/images/parts/part5.png", "id": 5 },
                { "image": "/images/parts/part5.png", "id": 6 }
            ]

        },
        {
            "id": 6,
            "image": "/images/recommenddedparts/part1.png",
            "description": "Shock Absorbes and Brake Discs and parts for automobiles main parts",
            "discount": 8,
            "title": "Shina",
            "subtitle": "Brake Disc",
            "cost": 160000,
            "productImages": [
                { "image": "/images/parts/part6.png", "id": 1 },
                { "image": "/images/parts/part6.png", "id": 2 },
                { "image": "/images/parts/part6.png", "id": 3 },
                { "image": "/images/parts/part6.png", "id": 4 },
                { "image": "/images/parts/part6.png", "id": 5 },
                { "image": "/images/parts/part6.png", "id": 6 }
            ]
        },
        {
            "id": 7,
            "image": "/images/recommenddedparts/part3.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 5,
            "subtitle": "Brake Disc",
            "title": "Moy",
            "cost": 110000,
            "productImages": [
                { "image": "/images/parts/part1.png", "id": 1 },
                { "image": "/images/recommenddedparts/part1.png", "id": 2 },
                { "image": "/images/recommenddedparts/part2.png", "id": 3 },
                { "image": "/images/recommenddedparts/part3.png", "id": 4 },
                { "image": "/images/recommenddedparts/part4.png", "id": 5 },
                { "image": "/images/recommenddedparts/part1.png", "id": 6 }
            ]

        },
        {
            "id": 8,
            "image": "/images/parts/part2.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 7,
            "title": "Kalpak",
            "subtitle": "Brake Disc",
            "cost": 120000,
            "productImages": [
                { "image": "/images/parts/part2.png", "id": 1 },
                { "image": "/images/parts/part2.png", "id": 2 },
                { "image": "/images/parts/part2.png", "id": 3 },
                { "image": "/images/parts/part2.png", "id": 4 },
                { "image": "/images/parts/part2.png", "id": 5 },
                { "image": "/images/parts/part2.png", "id": 6 }
            ]

        },
        {
            "id": 9,
            "image": "/images/parts/part3.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 1,
            "title": "Kuzov",
            "subtitle": "Brake Disc",
            "cost": 130000,
            "productImages": [
                { "image": "/images/parts/part3.png", "id": 1 },
                { "image": "/images/parts/part3.png", "id": 2 },
                { "image": "/images/parts/part3.png", "id": 3 },
                { "image": "/images/parts/part3.png", "id": 4 },
                { "image": "/images/parts/part3.png", "id": 5 },
                { "image": "/images/parts/part3.png", "id": 6 }
            ]

        },
        {
            "id": 10,
            "image": "/images/parts/part4.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 9,
            "title": "Tanirovka",
            "subtitle": "Brake Disc",
            "cost": 140000,
            "productImages": [
                { "image": "/images/parts/part4.png", "id": 1 },
                { "image": "/images/parts/part4.png", "id": 2 },
                { "image": "/images/parts/part4.png", "id": 3 },
                { "image": "/images/parts/part4.png", "id": 4 },
                { "image": "/images/parts/part4.png", "id": 5 },
                { "image": "/images/parts/part4.png", "id": 6 }
            ]

        },
        {
            "id": 11,
            "image": "/images/recommenddedparts/part3.png",
            "description": "Shock Absorbes and Brake Discs and parts",
            "discount": 6,
            "title": "Akumlator",
            "subtitle": "Brake Disc",
            "cost": 150000,
            "productImages": [
                { "image": "/images/parts/part5.png", "id": 1 },
                { "image": "/images/parts/part5.png", "id": 2 },
                { "image": "/images/parts/part5.png", "id": 3 },
                { "image": "/images/parts/part5.png", "id": 4 },
                { "image": "/images/parts/part5.png", "id": 5 },
                { "image": "/images/parts/part5.png", "id": 6 }
            ]

        },
        {
            "id": 12,
            "image": "/images/parts/part6.png",
            "description": "Shock Absorbes and Brake Discs and parts for automobiles main parts",
            "discount": 8,
            "title": "Zapchast",
            "subtitle": "Brake Disc",
            "cost": 160000,
            "productImages": [
                { "image": "/images/parts/part6.png", "id": 1 },
                { "image": "/images/parts/part6.png", "id": 2 },
                { "image": "/images/parts/part6.png", "id": 3 },
                { "image": "/images/parts/part6.png", "id": 4 },
                { "image": "/images/parts/part6.png", "id": 5 },
                { "image": "/images/parts/part6.png", "id": 6 }
            ]
        }
    ];

    return (
        <div className="grid grid-cols-12 gap-0">
            <div className="col-span-3 md:flex hidden justify-center items-center">
                <img className='w-full h-full object-cover' src="https://mega-parts1.netlify.app/assets/yellow-parts-26ecadc9.jpg" alt="" />
            </div>
            <div className="md:col-span-9 col-span-12">
                <div className="w-full p-0">
                    <Swiper spaceBetween={0} slidesPerView={4.5}
                        breakpoints={{
                            360: { // Small devices (sm)
                                slidesPerView: 2,
                            },
                            640: { // Small devices (sm)
                                slidesPerView: 2,
                            },
                            768: { // Medium devices (md)
                                slidesPerView: 3,
                            },
                            1024: { // Large devices (lg)
                                slidesPerView: 3.5,
                            },
                            1280: { // Extra-large devices (xl)
                                slidesPerView: 4.5, // Adjust if needed
                            },
                        }}
                        className="swiper-container">
                        {products1.map((product) => (
                            <SwiperSlide key={product.id} className="flex p-0 border bg-white flex-col">
                                <Link to={`/product/${product.id}`}>
                                    <div className="mt-2 p-2">
                                        <p>{product.title}</p>
                                        <p>Brake Disc</p>
                                    </div>
                                    <div className="flex justify-end mt-2 px-4">
                                        <img src={product.image} alt={product.title} className="w-20 h-20 object-cover" />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="w-full p-0">
                    <Swiper spaceBetween={0} slidesPerView={4.5}
                        breakpoints={{
                            360: { // Small devices (sm)
                                slidesPerView: 2,
                            },
                            640: { // Small devices (sm)
                                slidesPerView: 2,
                            },
                            768: { // Medium devices (md)
                                slidesPerView: 3,
                            },
                            1024: { // Large devices (lg)
                                slidesPerView: 3.5,
                            },
                            1280: { // Extra-large devices (xl)
                                slidesPerView: 4.5, // Adjust if needed
                            },
                        }}
                        className="swiper-container">
                        {products2.map((product) => (
                            <SwiperSlide key={product.id} className="flex p-0 border bg-white flex-col">
                                <Link to={`/product/${product.id}`}>
                                    <div className="mt-2 p-2">
                                        <p>{product.title}</p>
                                        <p>Brake Disc</p>
                                    </div>
                                    <div className="flex justify-end mt-2 px-4">
                                        <img src={product.image} alt={product.title} className="w-20 h-20 object-cover" />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ProductSwiper;
