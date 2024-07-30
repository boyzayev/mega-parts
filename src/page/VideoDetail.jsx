import React, { useState, useEffect, useContext } from 'react';
import { FaCheck, FaChevronRight, FaEye, FaShoppingBasket } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { TbBasketCheck, TbWorld } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';
import { UnderlineTabs } from '../components/UnderlineTabs';
import ProductRecommendations from '../components/ProductRecommendations';
import RelatedProducts from '../components/RelatedProducts';
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

const VideoDetail = () => {
    const [quantity, setQuantity] = useState(0);
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const { id } = useParams();
    const [activeItem, setActiveItem] = useState('');
    const { handleAddToCart } = useContext(ShoppingCartContext);

    // Fetch product details based on URL parameter
    useEffect(() => {
        const foundProduct = products.find((item) => item.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedImage(foundProduct.image);
            setActiveItem(foundProduct.image);
        }
    }, [id]);

    // Initialize liked products from local storage
    const [likedProducts, setLikedProducts] = useState({});
    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem('likedProducts')) || {};
        setLikedProducts(storedLikes);
    }, []);

    // Toggle like status for the product
    const handleClick = (id) => {
        setLikedProducts(prevState => {
            const newLikes = { ...prevState, [id]: !prevState[id] };
            localStorage.setItem('likedProducts', JSON.stringify(newLikes));
            return newLikes;
        });
    };

    // Display loading message if no product is found
    if (!product) {
        return <p>Loading...</p>;
    }

    const { title, cost, description, productImages, discount, subtitle } = product;

    return (
        <div className='container mx-auto p-4'>
            <div className="lg:flex hidden gap-4 mb-4 ">
                <Link to="/" className="text-gray-400 flex gap-2 items-center">
                    <h1>Home</h1>
                    <FaChevronRight />
                </Link>
                <Link to="/shock-absorbes" className="text-gray-400 flex gap-2 items-center">
                    <h1>Shock-absorbes</h1>
                    <FaChevronRight />
                </Link>
                <Link to="/shock-absorbes" className="text-gray-400 flex gap-2 items-center">
                    <h1>Gears</h1>
                    <FaChevronRight />
                </Link>
                <Link to="/shock-absorbes" className="text-gray-400 flex gap-2 items-center">
                    <h1>Auto gears</h1>
                    <FaChevronRight />
                </Link>
            </div>
            <div className="flex justify-between gap-2 flex-wrap bg-white rounded-lg p-5 border">
                <div className="">
                    <div className="w-full flex justify-center items-center h-[300px] bg-white border rounded p-2">
                        <img src={selectedImage} alt={title} className="w-96 h-96 p-7" />
                    </div>
                    <div className="flex gap-3 mt-3">
                        {productImages.map((img) => (
                            <div key={img.id}>
                                <img
                                    src={img.image}
                                    alt={`Product ${img.id}`}
                                    className={`md:w-16 md:h-16 w-12 h-11 border p-2 rounded cursor-pointer ${activeItem === img.image ? 'border-blue-500' : ''}`}
                                    onClick={() => {
                                        setSelectedImage(img.image);
                                        setActiveItem(img.image);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between ">
                <div className="">
                    <div className="flex gap-3 text-center">
                        <FaCheck className='text-green-500 mt-1 text-md flex justify-center items-center' />
                        <h1 className='flex justify-center items-center text-center text-green-500'>In stock</h1>
                    </div>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-gray-600">{subtitle}</p>
                    <p className="text-black font-bold text-2xl">Cost: <span className='text-red-500 font-bold text-center underline'>{cost}</span> UZS</p>
                    <p className="mt-2 text-purple-200 text-sm ">{description}</p>
                    <div className="flex gap-4 items-center mt-2">
                        <div className="flex gap-2 justify-center items-center">
                            <FaEye style={{ color: "#ccc" }} className='text-xl' />
                            <h1 style={{ color: "#ccc" }} className='text-center flex justify-center items-center'>32 reviews</h1>
                        </div>
                        <h1 style={{ color: "#ccc" }}>•</h1>
                        <div className="flex gap-2 items-center justify-center">
                            <FaShoppingBasket style={{ color: "#ccc" }} className='text-xl' />
                            <h1 style={{ color: "#ccc" }} className='text-center flex justify-center items-center'>154 sold</h1>
                        </div>
                    </div>
                    <div className=''>
                        <div className="bg-[#FFF0DF] w-full mt-2 p-3 hidden md:flex justify-between items-center">
                            <div className="px-2">
                                <h3 className="text underline font-semibold text-[#FA3434]">
                                    <Link href="">{cost}</Link>
                                </h3>
                                <p className="text-[#606060] text-sm">50-100 pcs</p>
                            </div>
                            <div className="px-2 border-l-[1px] border-[#BDC1C8]">
                                <h3 className="text underline font-semibold">
                                    <Link href="">{cost}</Link>
                                </h3>
                                <p className="text-[#606060] text-sm">50-100 pcs</p>
                            </div>
                            <div className="px-2 border-l-[1px] border-[#BDC1C8]">
                                <h3 className="text underline font-semibold">
                                    <Link href="">{cost}</Link>
                                </h3>
                                <p className="text-[#606060] text-sm">50-100 pcs</p>
                            </div>
                        </div>
                        <div className="hidden md:block my-3">
                            <div className="flex py-3 border-b-[1px] border-[#BDC1C8]">
                                <div className="w-1/3 text-[#8B96A5]">Price:</div>
                                <div className="w-2/3 text-[#505050]">Negotiable</div>
                            </div>
                            <div className="border-b-[1px] border-[#BDC1C8]">
                                <div className="flex py-2">
                                    <div className="w-1/3 text-[#8B96A5]">Type:</div>
                                    <div className="w-2/3 text-[#505050]">Classic shoes</div>
                                </div>
                                <div className="flex py-2">
                                    <div className="w-1/3 text-[#8B96A5]">Material:</div>
                                    <div className="w-2/3 text-[#505050]">Plastic Material</div>
                                </div>
                                <div className="flex py-2">
                                    <div className="w-1/3 text-[#8B96A5]">Design:</div>
                                    <div className="w-2/3 text-[#505050]">Modern nice</div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="mt-4 flex md:flex-nowrap flex-wrap gap-2">
                            <button className="border-[2px] border-blue-500 w-full font-bold text-blue-500 py-2 px-4 rounded">Shop now</button>
                            <button
                                style={{ textTransform: "uppercase" }}
                                onClick={() => handleAddToCart(product)}
                                className="bg-blue-500 text-[12px] gap-1 text-white py-2 w-full font-bold px-4 rounded flex justify-center items-center">
                                Add to cart <TbBasketCheck className='text-[17px]' />
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                    <div className="p-4 border rounded">
                        <div className="flex items-center">
                            <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-lg font-bold">R</span>
                            </div>
                            <div className="ml-4">
                                <h2 className="font-bold">Supplier</h2>
                                <p>Guanjoi Trading LLC</p>
                            </div>
                        </div>
                        <hr className='mt-3' />
                        <div className="mt-3">
                            <div className="flex text-center gap-2">
                                <MdOutlineVerifiedUser className='text-xl' />
                                <h1 className='text-center flex justify-center items-center '>Verified</h1>
                            </div>
                            <div className="flex text-center gap-2 mt-2">
                                <TbWorld className='text-xl' />
                                <h1 className='text-center flex justify-center items-center '>Shipping</h1>
                            </div>
                        </div>
                        <hr className='mt-3' />
                        <div className="flex flex-col">
                            <button style={{ border: "3px solid green" }} className="bg-none text-green-800 font-bold py-2 px-4 rounded mt-3">Send inquiry</button>
                            <button
                                style={{ textTransform: "uppercase" }}
                                onClick={() => handleClick(product.id)}
                                className="bg-green-700 text-sm text-center font-bold text-white py-3 px-4 rounded mt-3 flex justify-center items-center gap-2">
                                Add to favorite <IoIosHeart className='text-xl' />
                            </button>
                        </div>
                    </div>
                <div className="grid grid-cols-12 gap-2 mt-3 row">
                    <div className="md:col-span-8 col-span-12 bg-white rounded-lg p-2 border">
                        <UnderlineTabs />
                    </div>
                    <div className="md:col-span-4 col-span-12 bg-white rounded-lg p-3 border">
                        <ProductRecommendations />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <RelatedProducts />
            </div>
        </div>
    );
};

export default VideoDetail;
