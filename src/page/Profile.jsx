import React from 'react'

export default function Profile() {
    return (
        <div>
            <div className="px-2 my-4 p-4 sm:container flex flex-col gap-5 items-center relative -top-12 justify-center">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full lg:w-1/2">
                    <div className="w-32 h-32 relative right-12  flex justify-center items-center select-none mt-16">
                        <img src="https://mega-parts1.netlify.app/assets/oval-7fd3c30e.svg" alt="" className="absolute " />
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-plum  text-[104px] absolute left-12" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Don’t have any order :)</h2>
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
        </div>
    )
}
