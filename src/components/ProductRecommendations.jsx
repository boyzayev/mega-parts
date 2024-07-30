import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing a right arrow icon, if needed

const ProductRecommendations = () => {
  const products = [
    { id: 1, src: '/images/parts/part1.png', alt: 'Part 1', title: 'Shock Absorbers and Brake Discs and parts', price: 'price' },
    { id: 2, src: '/images/parts/part2.png', alt: 'Part 2', title: 'Shock Absorbers and Brake Discs and parts', price: 'price' },
    { id: 3, src: '/images/parts/part3.png', alt: 'Part 3', title: 'Shock Absorbers and Brake Discs and parts', price: 'price' },
    { id: 4, src: '/images/parts/part4.png', alt: 'Part 4', title: 'Shock Absorbers and Brake Discs and parts', price: 'price' },
    { id: 5, src: '/images/parts/part5.png', alt: 'Part 5', title: 'Shock Absorbers and Brake Discs and parts', price: 'price' },
    { id: 6, src: '/images/recommenddedparts/part1.png', alt: 'Part 6', title: 'Shock Absorbers and Brake Discs and parts for automobiles main parts', price: 'price' },
    { id: 7, src: '/images/recommenddedparts/part3.png', alt: 'Part 7', title: 'Shock Absorbers and Brake Discs and parts', price: 'price' },
  ];

  return (
    <div className="lg:col-span-2 col-span-7 bg-white p-2 h-full rounded-lg ">
      <h3 className="font-semibold text-xl">You may like</h3>
      <div className="flex flex-col gap-2 my-3">
        {products.map(product => (
          <div key={product.id} className="flex gap-3">
            <a
              className="max-w-20 w-full max-h-20 rounded-md p-2 flex items-center justify-center border-[1px] border-[#DEE2E7] overflow-hidden"
              href={`/product/${product.id}`}
            >
              <img
                className="w-full h-full hover:scale-[1.1] hover:transition hover:duration-200 hover:ease-linear"
                src={product.src}
                alt={product.alt}
              />
            </a>
            <div>
              <h2>{product.title}</h2>
              <p className="text-[#8B96A5]">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendations;
