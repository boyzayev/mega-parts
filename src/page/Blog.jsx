import React from 'react'
import About from '../components/About'

export default function Blog() {
    return (
        <div className="">
            <div className="bg-[#F4F0F8]">
                <div className='container'>
                    <About />
                </div>
            </div>
            <div className="container">
                <h1 className='text-3xl mt-4 p-2 text-blue-500 font-bold'>All posts</h1>
                <hr />
                <br />
                <div className="">

                    <div className="">
                        <div className="">

                            <div className="flex flex-wrap gap-4">

                                <div className="flex gap-4  justify-center items-center flex-wrap">
                                    <img className="w-[full]" src="https://mega-parts1.netlify.app/assets/blog2-39769c7f.png" alt="" />
                                    <div className="max-w-[full]">
                                        <h5 style={{ textTransform: "uppercase", letterSpacing: "8px" }} className="text-blue-500  text-xl font-semibold">Startup</h5>
                                        <h4 className="text-3xl font-bold mt-6">Design tips for designers that cover everything <br /> you need</h4>
                                        <p className="mt-8 text-lg font-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br /> pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                                    </div>
                                </div>

                                <div className="flex gap-4 justify-center items-center  flex-wrap">
                                    <img className="w-[full]" src="https://mega-parts1.netlify.app/assets/blog3-1db143f2.png" alt="" />
                                    <div className="max-w-[full]">
                                        <h5 style={{ textTransform: "uppercase", letterSpacing: "8px" }} className="text-blue-500  text-xl font-semibold">BUSINESS</h5>
                                        <h4 className="text-3xl font-bold mt-6">How to build rapport with your web design <br /> clientsed</h4>
                                        <p className="mt-8 text-lg font-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br /> pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                                    </div>
                                </div>

                                <div className="flex gap-4 justify-center items-center flex-wrap">
                                    <img className="w-[full]" src="https://mega-parts1.netlify.app/assets/blog4-2a293ce5.png" alt="" />
                                    <div className="max-w-[full]">
                                        <h5 style={{ textTransform: "uppercase", letterSpacing: "8px" }} className="text-blue-500  text-xl font-semibold">Startup</h5>
                                        <h4 className="text-3xl font-bold mt-6">Logo design trends to avoid in 2022</h4>
                                        <p className="mt-7 text-lg font-normal ">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br /> pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                                    </div>
                                </div>

                                <div className="flex gap-4 justify-center items-center flex-wrap">
                                    <img className="w-[full]" src="https://mega-parts1.netlify.app/assets/blog5-cfaf77d7.png" alt="" />
                                    <div className="max-w-[full]">
                                        <h5 style={{ textTransform: "uppercase", letterSpacing: "8px" }} className="text-blue-500  text-xl font-semibold">TECHNOLOGY</h5>
                                        <h4 className="text-3xl font-bold mt-6">8 Figma design systems you can download for <br /> free today</h4>
                                        <p className="mt-8 text-lg font-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br /> pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="hidden md:flex items-center justify-between w-full bg-[#237CFF] h-[120px] my-6 rounded-lg p-8 text-white">
                    <div>
                        <h1 className="text-2xl">Super discount on more than 100 USD</h1>
                        <p className="opacity-70">Have you ever finally just write dummy info</p>
                    </div>
                    <button className="active:scale-[1.02] h-10 bg-[#FF9017] px-3 py-2 text-white rounded-lg">Shop now</button>
                </div>
            </div>
            <br />
        </div>
    )
}
