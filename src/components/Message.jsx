import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React, { useState } from 'react';

export default function Message() {
    const [selectedCurrency, setSelectedCurrency] = useState('5');

    const handleMenuItemClick = (currency) => {
        setSelectedCurrency(currency);
    };
    return (
        <div className="relative mt-4">
            <div className="h-full">
                <img src="/images/banner-request.jpg" alt="Request Banner" className="w-full h-full" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-between bg-opacity-50 text-white md:p-4 p-2">
                <div className="md:p-4 p-0">
                    <h1 className="md:text-3xl text-md font-bold mb-2">
                        An easy way to send requests <br /> to all suppliers
                    </h1>
                    <p className="text-xl md:block hidden">
                        Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do eiusmod tempor incididunt.
                    </p>
                    <button className="md:mt-4 mt-0 text-white p-2 px-8 bg-[#2563EB] text-xl rounded">Send Inquiry</button>
                </div>
                <div className="bg-white rounded p-4 lg:block hidden">
                    <form className="bg-white w-full h-full rounded-md p-6 flex flex-col gap-4">
                        <h1 className="font-bold text-black text-xl">Send quote to suppliers</h1>
                        <input
                            type="text"
                            className="flex h-10 w-full focus:border-indigo-500 text-black focus:border-[2px] border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                            placeholder="What item you need?"
                        />
                        <textarea
                            className="flex min-h-[80px] w-full focus:border-indigo-500 text-black focus:border-[2px] rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Type something"
                            style={{ height: '60px' }}
                        />
                        <div className="flex gap-4 items-center">
                            <input
                                type="number"
                                className="flex h-10 focus:border-indigo-500 text-black focus:border-[2px] border border-input bg-background px-3  text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2"
                                placeholder="Quantity"
                            />
                            <div>
                                <div className="relative border rounded flex items-center px-2 bg-white">
                                    <h2 className="hidden md:block text-black">Psc:</h2>
                                    <Menu>
                                        <MenuHandler>
                                            <Button className='bg-transparent h-10 flex justify-center items-center bg-none text-1xl outline-none hover:shadow-none shadow-none rounded-none border-none text-black'>
                                                {selectedCurrency}
                                            </Button>
                                        </MenuHandler>
                                        <MenuList>
                                            <MenuItem onClick={() => handleMenuItemClick('1')}>1</MenuItem>
                                            <MenuItem onClick={() => handleMenuItemClick('5')}>5</MenuItem>
                                            <MenuItem onClick={() => handleMenuItemClick('10')}>10</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                        <button
                            className="inline-flex bg-[#2563EB] items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[160px] text-lg"
                            type="submit"
                        >
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
