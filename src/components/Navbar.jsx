import React from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { FaUser } from 'react-icons/fa';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FaCartShopping } from 'react-icons/fa6';
import { AiFillHeart } from 'react-icons/ai';
import Category from './Category';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { Sidebar } from './Sidebar';
import Mobiles from './Mobiles';

export default function Navbar() {
    return (
        <div>
            <div className="bg-white relative lg:h-[140px] md:h-[190px] h-[130px]  fixed top-0 left-0 z-50 w-full">
                <div className="flex  gap-2 p-2 pt-4 justify-around items-center flex-wrap">
                    <div className="md:hidden block">
                        <Sidebar />
                    </div>
                    <Link to={'/'} className='md:w-96 w-[160px] flex justify-center items-center'>
                        <img className='flex justify-center items-center' src="data:image/png;base64,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" alt="logo" />
                    </Link>
                    <div>
                        <form className="w-full  max-h-[40px] border-2 pl-3  border-plum md:flex hidden  items-center justify-between rounded" style={{ border: "2px solid blue" }}>

                            <input
                                required
                                className="min-w-[260px]  focus:outline-none h-[20px] rounded-none"
                                type="text"
                                placeholder="Search"
                            />
                            <div className=" text-center flex justify-center items-center tex">
                                <h1 className="text-[27px] flex justify-center items-center text-center">
                                    <span className="inline-block w-px bg-blue-500 h-full">&nbsp;</span>
                                </h1>
                            </div>
                            <Menu className='bg-none md:block hidden'>
                                <MenuHandler className='md:block hidden'>
                                <Button variant="text">Category</Button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>Menu Item 1</MenuItem>
                                    <MenuItem>Menu Item 2</MenuItem>
                                    <MenuItem>Menu Item 3</MenuItem>
                                    <hr className="my-3" />
                                    <MenuItem>Menu Item 4</MenuItem>
                                </MenuList>
                            </Menu>
                            <button
                                type="submit"
                                className="align-middle md:block hidden bg-blue-500 select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-plum w-[100px] rounded-sm p-2"
                            >
                                Search
                            </button>
                        </form>
                    </div>

                    <Icon />
                </div>
                <hr className='w-full mt-3' />
                <div className="">
                    <Category />
                </div>
                <div className="">
                    <Mobiles/>
                </div>
            </div>
        </div>
    );
}
