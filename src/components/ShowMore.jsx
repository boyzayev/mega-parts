import { Button } from '@material-tailwind/react';
import React, { useContext, useState } from 'react';
import { ShoppingCartContext } from '../layout/MainLayout';

const ShowMore = ({ products, itemsPerPage, setProducts }) => {
    const [visibleCount, setVisibleCount] = useState(itemsPerPage);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + itemsPerPage);
    };
    const removeAll = () => {
        setProducts([])
        
        localStorage.removeItem('cart');
    };
    const removeItem = (id) => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cart.filter(product => product.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        
    };
    const { handleAddToCart } = useContext(ShoppingCartContext);


    return (
        <>
            <div className="grid md:grid-cols-3 grid-cols-1 xl:grid-cols-5 gap-2 sm:gap-8 gap-y-5 my-4 py-2 w-full h-full">
                {products.slice(0, visibleCount).map(product => (
                    <div key={product.id} className="border-2 select-none rounded-md bg-[#f6f7f9] flex flex-col h-full">
                        <div>
                            <a
                                className="bg-[#eee] border-2 rounded-lg w-full h-[200px] flex items-center justify-center"
                                href={`/product/${product.id}`}
                            >
                                <img
                                    className="max-w-[159px] h-[150px] w-fit hover:scale-[1.1] hover:transition hover:duration-200 hover:ease-linear"
                                    src={product.image}
                                    alt={product.title}
                                />
                            </a>
                            <div className="p-2">
                                <div className="w-full py-2">
                                    <p>{product.title}</p>
                                    <span className="text-[#8B96A5]">{product.cost}</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        className="relative align-middle bg-blue-500 select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white w-12 "
                                        type="button" onClick={() => removeItem(product.id)}
                                    >
                                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 448 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
                                            </svg>
                                        </span>
                                    </button>
                                    <button
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] text-plum w-full border-plum flex items-center justify-between gap-2"
                                        type="button" onClick={() => handleAddToCart(product)}
                                    >
                                        to cart
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 576 512"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center">
            <Button className='flex justify-center items-center' onClick={removeAll}>Remove</Button>
            </div>
            {visibleCount < products.length && (
                <div className="flex justify-center mt-4">
                    <button
                        className="font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-85 text-[#0A74FF] bg-white border-2 border-[#0A74FF]"
                        type="button"
                        onClick={handleShowMore}
                    >
                        Show More
                    </button>
                </div>
            )}
            <br />
        </>
    );
};

export default ShowMore;
