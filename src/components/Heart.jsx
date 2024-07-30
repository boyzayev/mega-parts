import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function Heart({ product }) {
    const [likedProducts, setLikedProducts] = useState({});

    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem('likedProducts')) || {};
        setLikedProducts(storedLikes);
    }, []);

    const handleClick = (id) => {
        setLikedProducts(prevState => {
            const newLikes = { ...prevState, [id]: !prevState[id] };
            localStorage.setItem('likedProducts', JSON.stringify(newLikes));
            return newLikes;
        });
    };

    return (
        <div>
            <div className="md:flex hidden items-center">
                <button
                    className={`border border-gray-300 rounded p-2 hover:bg-gray-100 ${likedProducts[product.id] ? 'text-red-500' : ''}`}
                    onClick={() => handleClick(product.id)}
                >
                    {likedProducts[product.id] ? <FaHeart className='text-2xl' /> : <FaRegHeart className='text-2xl' />}
                </button>
            </div>
        </div>
    );
}
