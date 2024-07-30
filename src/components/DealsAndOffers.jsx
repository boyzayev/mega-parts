import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const DealsAndOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  useEffect(() => {
    const targetDate = new Date('2024-07-31T23:59:59');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-1 mt-3">
      <div className="flex md:justify-start justify-center md:items-stretch items-center md:flex-nowrap flex-wrap mb-4">
        <div className="bg-white border md:w-96 w-full  border-gray-300 p-4">
          <h2 className="text-xl font-bold">Deals and offers</h2>
          <p className="text-sm text-gray-500">Hygiene equipments</p>
          <div className="flex space-x-2 mt-2">
            <div className="bg-gray-800 font-bold text-white p-2 rounded text-center">
              <p>{timeLeft.days}</p>
              <p>Days</p>
            </div>
            <div className="bg-gray-800 font-bold text-white p-2 rounded text-center">
              <p>{timeLeft.hours}</p>
              <p>Hours</p>
            </div>
            <div className="bg-gray-800 font-bold text-white p-2 rounded text-center">
              <p>{timeLeft.minutes}</p>
              <p>Mins</p>
            </div>
            <div className="bg-gray-800 font-bold text-white p-2 rounded text-center">
              <p>{timeLeft.seconds}</p>
              <p>Sec</p>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={3.5}
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
                slidesPerView: 4,
            },
            1280: { // Extra-large devices (xl)
                slidesPerView: 5.4, // Adjust if needed
            },
        }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex flex-col items-center border bg-white border-gray-300 p-2 rounded">
              <Link to={`/product/${product.id}`} className='text-center'>

                <img src={product.image} alt={product.title} className="w-32 h-32 object-contain" />
                <p className="mt-2">{product.title}</p>
                <p className="text-red-500">-{product.discount}%</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DealsAndOffers;
