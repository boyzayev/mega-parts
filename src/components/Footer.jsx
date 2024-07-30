// Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 py-6">
            <div className="container p-3 mx-auto flex flex-col md:flex-row justify-around flex-wrap items-center">
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <img src="data:image/png;base64,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" alt="Mega Parts" className="" />
                    <p className="text-center mt-4 md:text-left">
                        Best information about the company <br /> goes here but now lorem ipsum is
                    </p>
                    <div className="mt-3">
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-blue-600 text-gray-500 hover:text-white">
                                <FaFacebookF className="" />
                            </a>
                            <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-blue-600 text-gray-500 hover:text-white">
                                <FaTwitter className="" />
                            </a>
                            <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-blue-600 text-gray-500 hover:text-white">
                                <FaLinkedinIn className="" />
                            </a>
                            <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-blue-600 text-gray-500 hover:text-white">
                                <FaInstagram className="" />
                            </a>
                            <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-blue-600 text-gray-500 hover:text-white">
                                <FaYoutube className="" />
                            </a>
                        </div>
                    </div>
                    <div className="flex mt-4 space-x-4">
                        <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="flex justify-between gap-4 flex-wrap items-center">
                    <div className="mb-4 md:mb-0">
                        <h4 className="font-bold mb-2">About</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-900">Find store</a></li>
                            <li><a href="#" className="hover:text-gray-900">Categories</a></li>
                            <li><a href="#" className="hover:text-gray-900">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="font-bold mb-2">Partnerships</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-900">Find store</a></li>
                            <li><a href="#" className="hover:text-gray-900">Categories</a></li>
                            <li><a href="#" className="hover:text-gray-900">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="font-bold mb-2">Information</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-900">Money Refund</a></li>
                            <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
                            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="font-bold mb-2">For users</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-gray-900">Login</a></li>
                            <li><a href="#" className="hover:text-gray-900">Settings</a></li>
                            <li><a href="#" className="hover:text-gray-900">Register</a></li>
                            <li><a href="#" className="hover:text-gray-900">My orders</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className="font-bold mb-2">Get app</h4>
                        <div className="flex flex-col gap-2">
                            <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAqCAMAAABGF89mAAAAV1BMVEUAAAAcHBwbGxscHBwcHBwcHBwYGBggICAYGBgcHBz///84ODjGxsaqqqoqKiq4uLibm5vx8fGNjY1xcXFVVVXj4+NUVFRHR0fU1NTi4uJ/f39jY2OOjo4ak0OxAAAACXRSTlMA39DAgGAQICAufgJrAAADQElEQVRYw+2Y65LTMAxGA3uBT5LvTpxL3/85seqU3QRSWGDJMMOZTOq6io8sJT+aruueHx/w1/n41CmfP+AUPnyu8nPcan/unnAaj91HnMZDhxP5L99jC96ZY/kcAl5hY4zfyybtrsI3cH6zPBLJZgnh7L6ztGBDvzd7DPGtciaitJUDdkRxboHBkhDhnBRIm8rOFczig4Y6F5GMeN3DuAzOCGN2xv6s3BN57OUYIRbOOhg9TVUD0anJJlhXc2OVG4bJMcEUgA2Gmmuspxx/Vi79jO/Kde2YjR9SHauar1Oz81IFGFsnUooZMTd5rEdyMaYfywfvTA2zixFJ/Fpu46W6IDbLkoRXed22lSplsQ5MWrUMk3fy7MH5h3JPyiShfeYXubj52s9FndbUUD08irb74pLHItFDhWZGKnoAZikJ9bg4w/fl6t4y4v3Yy4ede2K8H3u528kz3pG9PNwr+tCPFndJQhQM/6KctrhNoCGacY9IwUehyQIX84fl/RgE9whBN+01RaHfLnvAKxZKnnT1YpZixNehNYm93OrMrU0cF5ieTE3BRneNg/fFxfY9HcrHjXtbZkecKWrvyYSxp4mrTvp+pFBuqUdei0TUO9ieRqGQ6/epDx7cU2W0B3K/k+uyDRXV5SeVX5O6kNQ5ugBzHV1JurQZgLXsRn8tek1fRzo5WzYUD+SZdrxEJkqaXFa5tA5X+dT2adcEoxDRZFf5SO0+Leh1ZMm184G8Ru1IWBESY4S8yk2bYCa5Lf+VpSe/yltqkVKTDxSuy09H8kQvbAK5XlmhYG/ykex6i0mT88CoFJpWeZhaK5cmZ5KslCM55GDjUYet7oNmoCXXjLiOQlgTN00uq1woX4vJTb4mk4ZDOW+eNv+qH9xuCqlyGoda3YvKp2EZ1zDbkxmGudc0Hc2lBk9D8WSwyiOZUgylQzmK2oPI9qkYyN0eJ1vL7ltiTKIjWcP4elGYtfOk+79oj51V+cvDdMGxHOx91o9k5pdJy/Y2UDlK5vXxYx3d4CWVNS7z9dx+5TWG82J/70+DypUmfzP/sHzDf/mvyh9wGh+7R5zGU/d83guhrus+nWT/8KlTnk54KfTw+Nx1XwA2sM3EXVybUQAAAABJRU5ErkJggg==" alt="App Store" className="h-10" /></a>
                            <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAqCAMAAABGF89mAAAAP1BMVEUcHBz////GxsaqqqqNjY3j4+M4ODhVVVUqKirx8fHi4uJxcXHU1NSbm5t/f39HR0djY2M5OTm4uLiAgIBGRkYT9P96AAACpklEQVRYw+2YW47jIBBF763iacCv9P7XOpTRKElrJulIk3F/9JEMomRxXFDwYZDZRfx3FiUJTgGnsHmCASexZShOw2HBaUT88E1JMQAhhONBOrrOR+yDZIE3MovTiEk16aQJbtWsC9LenIRSAcH7SBMM+d24eHStAFFKdW+VL9olErK0O/luSz+VIstbM68JqOlz5s4Bq5ayieCNrKL7BVnkTg7ddQ+l4CJ4KyFhlHjAUeAJRgo2sOA/wcWA06A6PU3Pbucf9SF+4M3wsE8u4Z45kz2MR4jiBt+plobIC3Kzcyq4RZlbcZ4P7f7Owux95hTgp1fkZr/XO2qyfsULchtd2F6Vc28kdY4YbJwweFXezUMe5zl8Uc7aLP3flTdzxpVFstdgYcm19D41Pzlth3z2lHCVb1lMnoQdB3dM5FgeylmLY2dYG6N9vBjLlrPutpeOk3oq0H17ppjcsTafF3RYY1wri8mjb2GpjCnLWI3Hci2NnXwZ8tU23FsFRWEACtvYi52xWBkuhzyxIjXKdaY2XGFW56hHGoXzY7laCmRLMCIbBo1m6eS6HnP0VohONXmktpxdGpmXUiKGvDJndnm0b2R4JB/lXq8lYitpbH7q2kMuI4HIeafJxOQLKSXdFtyQr907GuFMfX7UJF6jcRy8aFsojFYzLuUpIFWGmc1mNnnKOQAtfJYXOntVbSYyPLtkasQtq2f2mbxY9pTKKeHCSTKdrWmtPOQoI/ZZnjIl5yPlSnl2vRZ8YitSZaS0qdRjW5e97hGdInLp5uZuYlCHQWvHSdFFi4UZH8jVWcW8QCoB2Kh4wvP7inrp6pdYOMVVuOIrXFjwV9wW8CqrJ+nwnFEA/5gUY/rqmwt++A5EnMYCh9NQ5ICT2M7+FUbqB/470WXyF0cDFWnNVVswAAAAAElFTkSuQmCC" alt="Google Play" className="h-10" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 flex justify-between items-center px-4 pt-1 mt-6  text-center">
                <p className="text-sm">© IT LIVE 2024 All rights reserved.</p>
                <div className="mt-2">
                    <button className="border border-gray-300 px-4 py-2 text-sm rounded">Languages</button>
                </div>
            </div>
        </footer>
    );
};

