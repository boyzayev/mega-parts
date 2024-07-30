import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaChevronRight, FaFilter, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Checkbox,
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    IconButton,
} from "@material-tailwind/react";
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiLeftArrow } from 'react-icons/bi';
import { RiDeleteBin6Line, RiGhost2Fill } from 'react-icons/ri';
import Heart from '../components/Heart';

export default function Absorbes({ setButtons, buttons }) {
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

    const [selectedCurrency, setSelectedCurrency] = useState('Featured');
    const [open, setOpen] = useState(0);
    const [view, setView] = useState('card');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [filters, setFilters] = useState([]);

    const totalItems = products1.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getItemProps = (index) => ({
        variant: currentPage === index ? "filled" : "text",
        color: "gray",
        onClick: () => setCurrentPage(index),
    });

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleMenuItemClick = (currency) => setSelectedCurrency(currency);



    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const toggleView = () => setView(view === 'card' ? 'list' : 'card');

    const handleAddToFilter = (filter) => {
        setFilters(prevFilters => {
            if (prevFilters.includes(filter)) {
                return prevFilters.filter(f => f !== filter);
            } else {
                return [...prevFilters, filter];
            }
        });
    };
    const handleDelete = (filter) => {
        setFilters(prevFilters => prevFilters.filter(f => f !== filter));
    };

    const handleClearAll = () => {
        setFilters([]);
    };

    const currentProducts = products1.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const renderProducts = () => {
        return currentProducts.map((product) => (
            <div key={product.id} className={`border bg-white rounded-lg p-5 mt-3 ${view === 'card' ? 'w-full' : 'flex justify-center items-center'}`}>

                <div className={`flex justify-between ${view === 'card' ? 'flex-row' : 'flex-col'}`}>
                    <div className={`flex ${view === 'card' ? 'gap-3' : 'flex-col'}`}>

                        <div className={`${view === 'card' ? 'w-[100px]' : 'w-[200px] h-[200px]'}`}>
                            <Link to={`/product/${product.id}`}>

                                <img src={product.image} alt={product.title} className="w-full h-full" />
                            </Link>
                        </div>
                        <div className={`${view === 'card' ? 'text-left' : 'text-center'}`}>
                            <h2 className="font-semibold ">{product.title}</h2>
                            <Link to={`/product/${product.id}`}>

                                <a className="text-blue-600 underline text-xl font-semibold hover:underline">
                                    Show price
                                </a>
                            </Link>
                            <Link to={`/product/${product.id}`}>
                                {view === 'card' && (
                                    <div className="text-sm text-gray-500">
                                        <p>154 orders • <span className="text-green-600">Free shipping</span></p>
                                        <p>{product.description}</p>
                                        <a href="#" className="text-blue-600 text-sm hover:underline">
                                            View details
                                        </a>
                                    </div>
                                )}
                            </Link>
                        </div>
                    </div>
                    <Heart product={product} />
                </div>
            </div>
        ));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="lg:flex hidden gap-4 mb-4">
                <Link to="/" className="text-gray-400 flex gap-2 items-center">
                    <h1>Home</h1>
                    <FaChevronRight />
                </Link>
                <Link to="/shock-absorbes" className="text-gray-400 flex gap-2 items-center">
                    <h1>Shock-absorbes</h1>
                    <FaChevronRight />
                </Link>
            </div>

            <div className="flex gap-4">
                <aside className="w-1/4 md:block hidden">
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(1)}>Category</AccordionHeader>
                        <AccordionBody>
                            <div className="flex flex-col gap-2">
                                <div onClick={() => handleAddToFilter('Brakes')}>Brakes</div>
                                <div onClick={() => handleAddToFilter('Muffler')}>Muffler</div>
                                <div onClick={() => handleAddToFilter('Steering Gear')}>Steering Gear</div>
                                <div onClick={() => handleAddToFilter('Transmission')}>Transmission</div>
                                <div onClick={() => handleAddToFilter('Gears')}>Gears</div>
                                <div onClick={() => handleAddToFilter('See all')} className="text-blue-500 cursor-pointer">See all</div>
                            </div>
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(2)}>Cars</AccordionHeader>
                        <AccordionBody>
                            {["Chevrolet Tico", "Chevrolet Matiz", "Chevrolet Cobalt", "Chevrolet Damas", "Chevrolet Gentra"].map(car => (
                                <div key={car} className="flex items-center">
                                    <Checkbox />
                                    <span>{car}</span>
                                </div>
                            ))}
                            <div className="text-blue-500 cursor-pointer">See all</div>
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(3)}>Other Products</AccordionHeader>
                        <AccordionBody>
                            {["Metalic", "Plastic Cover", "Automatic", "Mechanical", "Plastic"].map(product => (
                                <div key={product} className="flex items-center">
                                    <Checkbox />
                                    <span>{product}</span>
                                </div>
                            ))}
                            <div className="text-blue-500 cursor-pointer">See all</div>
                        </AccordionBody>
                    </Accordion>
                </aside>

                {/* Main Content */}
                <main className="w-full">
                    <div className="bg-white border rounded flex justify-between items-center p-3 mb-4">
                        <h1 className='md:flex gap-2 hidden'>{totalItems} items in <span className="font-bold md:block hidden">Mobile Accessories</span></h1>
                        <div className="flex items-center gap-4">
                            <div className="lg:flex hidden items-center text-sm">
                                <Checkbox /> Verified only
                            </div>
                            <div className="relative border rounded flex items-center px-2 bg-white">
                                <h2 className="hidden md:block text-black">Sort by:</h2>
                                <Menu>
                                    <MenuHandler>
                                        <Button className="bg-transparent w-[150px] text-black border-none shadow-none hover:shadow-none">
                                            {selectedCurrency}
                                        </Button>
                                    </MenuHandler>
                                    <FaFilter />
                                    <MenuList>
                                        <MenuItem onClick={() => handleMenuItemClick('Featured')}>Featured</MenuItem>
                                        <MenuItem onClick={() => handleMenuItemClick('Smartphone')}>Smartphone</MenuItem>
                                        <MenuItem onClick={() => handleMenuItemClick('Automobiles')}>Automobiles</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>

                            <div className="flex border rounded">
                                <div
                                    className={`py-2 px-2 ${view === 'list' ? 'bg-gray-100' : ''}`}
                                    onClick={toggleView}
                                >
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl active:scale-[1.1]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 11V3H5c-1.1 0-2 .9-2 2v6h8zm2 0h8V5c0-1.1-.9-2-2-2h-6v8zm-2 2H3v6c0 1.1.9 2 2 2h6v-8zm2 0v8h6c1.1 0 2-.9 2-2v-6h-8z"></path></svg>
                                </div>
                                <div
                                    className={`py-2 px-2 ${view === 'card' ? 'bg-gray-100' : ''}`}
                                    onClick={toggleView}
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        viewBox="0 0 448 512"
                                        className="text-2xl"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 ">

                        {filters.map(filter => (
                            <div key={filter} className="bg-blue-500 text-white rounded px-3 py-1 flex items-center gap-2">
                                <span>{filter}</span>
                                <button onClick={() => handleDelete(filter)}>
                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                        ))}
                        {filters.length > 0 && (
                            <Button onClick={handleClearAll} className="bg-red-500 shadow-none hover:shadow-none text-white rounded px-3 py-1">Clear All</Button>
                        )}
                    </div>
                    <div className={`grid ${view === 'card' ? 'grid-cols-1' : 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1'} gap-4`}>
                        {renderProducts()}
                    </div>

                    <div className="flex justify-end items-center gap-4 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="relative md:flex hidden border rounded  items-center px-2 bg-white">
                                <h2 className="hidden md:block text-black">Show:</h2>
                                <Menu className=''>
                                    <MenuHandler>
                                        <Button className="bg-transparent hover:shadow-none w-[50px] text-black border-none shadow-none">
                                            {itemsPerPage}
                                        </Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem onClick={() => setItemsPerPage(5)}>5</MenuItem>
                                        <MenuItem onClick={() => setItemsPerPage(10)}>10</MenuItem>
                                        <MenuItem onClick={() => setItemsPerPage(15)}>15</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button
                                variant="text"
                                className="flex items-center hover:gap-2 border"
                                onClick={prevPage}
                                disabled={currentPage === 1}
                            >
                                <FaAngleLeft className="h-4 w-4" />
                            </Button>
                            <div className="flex items-center gap-2">
                                {[...Array(totalPages)].map((_, index) => (
                                    <IconButton
                                        key={index}
                                        {...getItemProps(index + 1)}
                                    >
                                        {index + 1}
                                    </IconButton>
                                ))}
                            </div>
                            <Button
                                variant="text"
                                className="flex items-center gap-2 border"
                                onClick={nextPage}
                                disabled={currentPage === totalPages}
                            >
                                <FaAngleRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}
