import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Icon() {
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <Link to={'profile'}>

                    <div className="flex-col ho flex justify-center items-center">
                        <FaUser className='md:text-2xl text-xl' />
                        <h1 className='text-xs md:block hidden'>Profile</h1>
                    </div>
                </Link>
                <Link to={'/heartProduct'}>
                    <div className="flex-col ho flex justify-center items-center">
                        <AiFillHeart className='md:text-2xl text-xl ' />
                        <h1 className='md:block hidden text-xs'>Favorites</h1>
                    </div>
                </Link>
                <Link to={'/cart'}>
                    <div className="flex-col ho flex justify-center items-center">
                        <FaCartShopping className='md:text-2xl text-xl' />
                        <h1 className='md:block hidden text-xs'>My Cart</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}
