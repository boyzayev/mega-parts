import React from 'react';

export default function About() {
    return (
        <div>
            <div className="flex md:flex bg-[#F4F0F8] gap-1 md:gap-3 justify-between md:container lg:px-12 py-[84px] px-[15px]">
                <div className="w-full  md:w-1/2 flex flex-col gap-20">
                    <div>
                        <h1 className="text-3xl font-bold">Step-by-step guide to choosing great font pairs</h1>
                        <p className="my-4">By John Doe | May 23, 2022</p>
                        <p className="hidden md:block">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>
                    <button className="py-3 px-8 w-[170px] bg-[#FFD050] flex items-center gap-2 active:scale-[1.02]">
                        Read more 
                        <svg 
                            stroke="currentColor" 
                            fill="currentColor" 
                            strokeWidth="0" 
                            viewBox="0 0 320 512" 
                            height="1em" 
                            width="1em" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                    </button>
                </div>
                <div className="w-[515px] h-[395px] hidden md:block">
                    <img className="w-full h-full object-cover" src="/images/blog1.png" alt="blog1" />
                </div>
            </div>
            
        </div>
    );
}
