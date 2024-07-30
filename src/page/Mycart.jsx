import React, { useState, useEffect, useContext } from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import RelatedProducts from '../components/RelatedProducts';
import { ShoppingCartContext } from '../layout/MainLayout';

const MyCart = () => {
    const [quantities, setQuantities] = useState({});
    const [likedProducts, setLikedProducts] = useState({});
    const { cartData, setCartData } = useContext(ShoppingCartContext);
    const { handleAddToCart } = useContext(ShoppingCartContext);

    
    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem('likedProducts')) || {};
        setLikedProducts(storedLikes);
    }, []);

    const updateQuantity = (id, newQuantity) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max(1, newQuantity)
        }));
    };

    const addToCart = (product) => {
        const itemExists = cartData.find(item => item.id === product.id);
        if (itemExists) {
            updateQuantity(product.id, quantities[product.id] + 1);
        } else {
            setCartData(prevData => [...prevData, product]);
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [product.id]: 1
            }));
        }
    };

    const removeItem = (id) => {
        setCartData(prevData => prevData.filter(item => item.id !== id));
        setQuantities(prevQuantities => {
            const { [id]: _, ...rest } = prevQuantities;
            return rest;
        });
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cart.filter(product => product.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const increaseQuantity = (item) => {
        console.log('increment')
        handleAddToCart(item)    
    };

    const decreaseQuantity = (item) => {
        console.log('increment')
        handleAddToCart(item) 
    };

    const removeAll = () => {
        setCartData([]);
        setQuantities({});
        localStorage.removeItem('cart');
    };

    const handleClick = (id) => {
        setLikedProducts(prevState => {
            const newLikes = { ...prevState, [id]: !prevState[id] };
            localStorage.setItem('likedProducts', JSON.stringify(newLikes));
            return newLikes;
        });
    };

    const totalPrice = cartData.reduce((total, item) => total + (item.cost * item.quantity), 0);

    return (
        <div className='container'>
            {cartData.length > 0 ? (
                <>
                    <h1 className='text-2xl font-bold'>My Cart ({cartData.length})</h1>
                    {cartData.map(item => (
                        <div key={item.id} className="w-full my-2 flex flex-col md:flex-row justify-between border-b border-[#DEE2E7] pb-4">
                            <div className="flex gap-4 md:w-2/3">
                                <div className="overflow-hidden min-w-[63px] h-[63px] md:w-20 md:h-20 border border-[#DEE2E7] rounded-md">
                                    <a
                                        className="w-full h-full bg-[#f7f7f7] rounded-md p-2 flex items-center justify-center border border-[#DEE2E7] hover:scale-110 transition-transform duration-200 ease-linear"
                                        href={`/product/${item.id}`}
                                    >
                                        <img className="w-full h-full" src={item.image} alt={item.title} />
                                    </a>
                                </div>
                                <div>
                                    <h1 className="text-lg md:text-xl font-semibold">{item.title}</h1>
                                    <p className="text-[#8B96A5] text-md">{item.description}</p>
                                    <div className="flex gap-2 my-3">
                                        <button
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background p-3 text-red-500 h-6 hover:bg-red-500 hover:text-white"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <span className="hidden sm:block">Remove</span>
                                            <FaTrash className="block sm:hidden" />
                                        </button>
                                        <button
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background p-3 text-blue-500 h-6 hover:bg-blue-500 hover:text-white"
                                            onClick={() => handleClick(item.id)}
                                        >
                                            <span className="hidden sm:block">Add Favorite</span>
                                            <FaHeart className="block sm:hidden" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse md:block items-center justify-between">
                                <h2 className="font-semibold">
                                    {item.cost * item.quantity} <span className="ml-2 text-sm font-thin">UZS</span>
                                </h2>
                                <div className="my-4">
                                    <div className="flex items-center justify-around text-lg gap-2 w-24 border border-[#BDC1C8] px-3 py-2 rounded-md">
                                        <button onClick={() => decreaseQuantity(item)} className="h-4 w-4" >
                                            <AiOutlineMinus />
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => increaseQuantity(item)}>
                                            <AiOutlinePlus />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="w-full flex flex-col gap-2 pb-3 border-b border-[#DEE2E7]">
                        <div className="flex text-xl justify-between">
                            <span className="text-[#8B96A5]">Subtotal:</span>
                            <span>{totalPrice} UZS</span>
                        </div>
                        <div className="flex text-xl justify-between">
                            <span className="text-[#8B96A5]">Shipping:</span>
                            <span>150000 UZS</span>
                        </div>
                        <div className="flex text-xl justify-between">
                            <span className="text-[#8B96A5]">Tax:</span>
                            <span>120000 UZS</span>
                        </div>
                        <div className="flex text-xl justify-between">
                            <span className="text-xl font-semibold">Total:</span>
                            <span className="font-semibold">
                                {totalPrice + 150000 + 120000} <span className="ml-2 text-sm font-thin">UZS</span>
                            </span>
                        </div>
                        <button className="w-full p-2 rounded text-white bg-green-500">Checkout ({cartData.length} items)</button>
                    </div>
                    <div className="flex justify-between mt-3">
                        <a href="/">
                            <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex gap-2">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"></path>
                                </svg>
                                Back to shop
                            </button>
                        </a>
                        <button onClick={removeAll} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-plum font-medium border-2 border-plum">
                            Remove all
                        </button>
                    </div>
                    <div className="mt-2 bg-white rounded-lg p-3 border">
                        <RelatedProducts addToCart={addToCart} />
                    </div>
                </>
            ) : (
                <div className="px-2 my-4 p-4 sm:container flex flex-col gap-5 items-center relative -top-12 justify-center">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full lg:w-1/2">
                        <div className="w-32 h-32 relative right-12 flex justify-center items-center select-none mt-16">
                            <img src="https://mega-parts1.netlify.app/assets/oval-7fd3c30e.svg" alt="" className="absolute" />
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-[#0A74FF] text-[104px] absolute left-12" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4">Don’t have any orders :)</h2>
                            <p className="text-[#868686]">It seems like you have not logged in to your account. You may easily create an account.</p>
                        </div>
                    </div>
                    <button
                        className="font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-85 text-[#0A74FF] bg-white border-2 border-[#0A74FF]"
                        type="button"
                        style={{ position: 'relative', overflow: 'hidden' }}
                    >
                        Create account
                    </button>
                </div>
            )}
            <br />
        </div>
    );
};

export default MyCart;
