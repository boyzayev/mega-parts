
import { Button, Checkbox } from "@material-tailwind/react";
import React from 'react';
import { useNavigate } from "react-router";

export default function Register() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login")
    }
    const handleLogin = () => {
        navigate("/login")
    }
    return (
        <div className="p-9 px-20">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAAAQCA
            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
            UrcNrJiwFq2tskzlgxeJC9YljY26MkaLiwMFD
            SzvuI4lyGqUuf4cKHmJL2z/2CNgdx34bG7JsAciy6AZLcJ3HkZy85CZO17SHzWJDe+Tf7CO9VfhezapRq19O4CCCO+RUJcefSdr24QZfQUKP28lw/A8mWuPbIm854tra94n77d3Xs04hO0R3O0zjO77VPIVoFd2Cbz0llL0IG+uYbtd8T15my6N6gvORuyow0Yj/7WKdgzwewSY81oXUVunHklqUo0rT11bZXp+IoaGaU2rGQZg/xFgyk6tonW5/r8D0djm+JRZCc8LXnBORNf68hey9tEO2zvMHmPls7uyQDXZS88D32S3eDPYjtRd0etkl/HurfdryMJmGul5gGQZYLhzk45dgieFkwTTMMOhmKJS7GzDtkAC7S3mA+CfDdNA9s0Ng2zW8dIHgkq+qkTHM9qoeK6/S
            /7m+mGQNFad3sOlf2Y9Shmvsr00sH/AVKqPHSxFNqqwAAAABJRU5ErkJggg==" alt="" />
            <div className="flex justify-between items-center">
                <div className='flex-col flex gap-5'>
                    <h1 className="text-2xl font-bold mt-4">Register from your email</h1>
                    <div className="">
                        <h1 className='text-xl'>Phone number</h1>
                        <div className="w-[450px]">
                            <input type="text" class="flex w-full focus:border-indigo-500 focus:border-[2px] rounded-md border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 h-16 sm:h-[70px] border-b-green-500" placeholder="Enter your phone number" required="" />
                        </div>
                    </div>
                    <div className="">
                        <h1 className='text-xl'>Username</h1>
                        <div className="w-[450px]">
                            <input type="text" class="flex w-full focus:border-indigo-500 focus:border-[2px] rounded-md border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 h-16 sm:h-[70px] border-b-green-500" placeholder="Enter your phone number" required="" />
                        </div>
                    </div>
                    <div className="">
                        <h1 className='text-xl'>Enter your password</h1>
                        <div className="w-[450px]">
                            <input type="password" class="flex w-full focus:border-indigo-500 focus:border-[2px] rounded-md border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 h-16 sm:h-[70px] border-b-green-500" placeholder="Enter your phone number" required="" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <Checkbox className="text-center" label="Remember Me" />
                        <h1>Forgot password ?</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={handleLogin} className="inline-flex items-center bg-blue-500 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none   disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-primary/90 w-full h-16 sm:h-[70px] px-4 py-6 mt-3 text-white">
                            Register
                        </button>
                    </div>
                    <div className="">
                        <h1>Already have an accunt? <span onClick={handleClick} className="text-blue-500 cursor-pointer">Login</span></h1>
                    </div>
                </div>
                <div className="w-[500px] h-[540px]">
                    <img className="w-full h-full rounded-lg" src="https://mega-parts1.netlify.app/assets/login-register-bg-34833911.jpg" alt="Background" />
                </div>
            </div>
        </div>
    );
}
