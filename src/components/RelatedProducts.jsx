import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartPlus } from 'react-icons/fa';
import { ShoppingCartContext } from '../layout/MainLayout';

const products = [
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
            { "image": "/images/parts/part5.png", "id": 6 }
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

const RelatedProducts = () => {
    const { handleAddToCart } = useContext(ShoppingCartContext);
    const [quantity, setQuantity] = useState(0);
    return (
        <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">Related Products</h2>
            <Swiper
                spaceBetween={0}
                breakpoints={{
                    360: { // Small devices (sm)
                        slidesPerView: 1.5,
                    },
                    640: { // Small devices (sm)
                        slidesPerView: 2,
                    },
                    768: { // Medium devices (md)
                        slidesPerView: 3,
                    },
                    1024: { // Large devices (lg)
                        slidesPerView: 4,
                    },
                    1280: { // Extra-large devices (xl)
                        slidesPerView: 6.2, // Adjust if needed
                    },
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <div className="bg-white p-4 rounded-lg shadow-none">
                            <div className="w-[172px] h-[172px] p-5 bg-[#eee] rounded-lg overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                            <p className="text-gray-500 mt-1">Price</p>
                            <button
                                className="flex items-center w-full justify-center  gap-2 mt-4 border-blue-500 text-blue-500 font-bold text-xs py-3 px-4 rounded-lg border-[2px]"
                                type="button"
                                onClick={() => handleAddToCart(product)}
                            >
                                Move to Cart
                                <FaCartPlus />
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RelatedProducts;
