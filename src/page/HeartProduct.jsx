import React, { useState, useEffect, useContext } from 'react';
import ShowMore from '../components/ShowMore'; // Import the ShowMore component
import { ShoppingCartContext } from '../layout/MainLayout';

const products = [{
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
}];

export default function HeartProduct() {
    const [likedProducts, setLikedProducts] = useState([]);
    const { handleAddToCart } = useContext(ShoppingCartContext);

    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem('likedProducts')) || {};
        const likedProductIds = Object.keys(storedLikes).filter(id => storedLikes[id]);
        const likedProductsList = products.filter(product => likedProductIds.includes(product.id.toString()));
        setLikedProducts(likedProductsList);
    }, []);
    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };
    const removeAll = () => {
        setLikedProducts([])

        localStorage.removeItem('cart');
    };
    const removeItem = (id) => {
        setLikedProducts(prevProducts => prevProducts.filter(product => product.id !== id));
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cart.filter(product => product.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));

    };





    return (
        <div className='container'>
            {likedProducts.length > 0 ? (
                <ShowMore products={likedProducts} removeAll={removeAll} removeItem={removeItem} handleShowMore={handleShowMore} setProducts={setLikedProducts} itemsPerPage={6} />
            ) : (
                <div className="px-2 my-4 p-4 sm:container flex flex-col gap-5 items-center relative -top-12 justify-center">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full lg:w-1/2">
                        <div className="w-32 h-32 relative right-12 flex justify-center items-center select-none mt-16">
                            <img src="https://mega-parts1.netlify.app/assets/oval-7fd3c30e.svg" alt="" className="absolute" />
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                className="text-[#0A74FF] text-[104px] absolute left-12"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm6-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="font-semibold text-xl text-center">No Products Liked</h1>
                            <p className="text-center text-[#8B96A5]">Your liked products will be displayed here</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
