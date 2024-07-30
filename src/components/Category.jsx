import { useState } from 'react';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Category() {
    const [selectedCurrency, setSelectedCurrency] = useState('USZ');

    const handleMenuItemClick = (currency) => {
        setSelectedCurrency(currency);
    };

    return (
        <div>
            <div className="shadow bg-white  lg:px-12 px-[15px] w-full py-2 md:flex hidden items-center justify-between flex-wrap gap-x-3">
                <div className="flex items-center gap-x-6 font-medium">
                    <button
                        className="align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-gray-900 active:bg-gray-900/20 hover:bg-[#fafafb] font-medium p-1 px-1 rounded text-md flex items-center capitalize gap-3"
                        type="button"
                        onClick={() => console.log('All Category clicked')}
                    >
                        All Category
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 3V5H3V3H12ZM16 19V21H3V19H16ZM22 11V13H3V11H22Z"></path>
                        </svg>
                    </button>
                    <Link to={'/shock-absorbes'}>Shock Absorbes</Link>
                    <a href="">Brake Discs</a>
                    <a href="">Spark Plugs</a>
                    <Link to={'/blogs'}>Blogs</Link>
                </div>
                <div>
                    <div className="relative flex items-center px-2 bg-white">
                        <h2 className="hidden md:block">English:</h2>
                        <Menu>
                            <MenuHandler>
                                <Button className='bg-transparent text-1xl outline-none hover:shadow-none shadow-none rounded-none border-none text-black'>
                                    {selectedCurrency}
                                </Button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem onClick={() => handleMenuItemClick('USZ')}>USZ</MenuItem>
                                <MenuItem onClick={() => handleMenuItemClick('EURO')}>EURO</MenuItem>
                                <MenuItem onClick={() => handleMenuItemClick('USD')}>USD</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
}
