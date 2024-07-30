import React from 'react';

export default function Send() {
    return (
        <div>
            <div className="bg-[#EFF2F4] w-full h-[190px]">
                <div className="container mx-auto p-8 text-center max-w-screen-lg">
                    <h1 className="font-bold text-2xl my-1">Subscribe to our newsletter</h1>
                    <p className="text-slate-500">Get daily news on upcoming offers from many suppliers all over the world</p>
                    <div>
                        <form action="" className="flex flex-wrap items-center justify-center mt-5">
                            <div className="flex w-62 h-full items-center gap-2 px-2 bg-white border-2 border-slate-400 mx-2 rounded-md">
                                <span className="text-2xl text-slate-400">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
                                    </svg>
                                </span>
                                <input className="h-10 border-none focus:outline-none w-full" type="email" name="email" placeholder="Email" />
                                <div style={{position:"relative", left:"10px"}} className="">
                                <button className="inline-flex items-center bg-blue-500 text-white justify-center whitespace-nowrap rounded-md   h-10 text-lg p-3 ml-2">
                                    Subscribe
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
