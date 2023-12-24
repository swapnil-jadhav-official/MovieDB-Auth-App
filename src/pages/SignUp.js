import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {
    //Email
    const [email, setEmail] = useState("");

    //Password
    const [password, setPassword] = useState("");

    const { user, signUp } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signUp(email, password);

            //on successful sign up, redirect to the home page
            navigate("/");          

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <div className='w-full min-h-screen relative'>
            <img 
                className='absolute h-full object-cover w-full' 
                src="https://www.hulu.com/static/hitch/s3/attachments/ckzoylttk003x1v6mcd4p0gk2-ckxgnvin29r771v5fyutjbf5c-bundle-6400x2640-desktop-1x.jpg" 
                alt='Movie posters' 
            />
            
            {/* <div className='fixed w-full z-50 mt-24'> */}
            <div className='absolute flex justify-center w-full items-center h-full'>
                <div className='max-w-[450px] px-8 pt-4 bg-black/90 text-white rounded-lg shadow-xl'>
                    <h1 className='font-bold text-center text-3xl max-w-[380px]'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='max-w-[380px] mx-auto py-8 z-40'>
                        <input
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            placeholder='Email' 
                            className='bg-gray-700 rounded outline-none px-4 py-2 w-full' 
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password" 
                            placeholder='Password' 
                            className='bg-gray-700 rounded outline-none px-4 py-2 w-full mt-4' 
                        />
                        <button className='text-white bg-green-600 hover:bg-opacity-60 duration-150 w-full mt-10 py-3 rounded font-bold'>Sign Up</button>
                        <div className='my-8 flex justify-between text-sm text-gray-500'>
                            <p>
                                <input type="checkbox" /> Remember me
                            </p>
                            <a href='https://www.netflix.com/LoginHelp' className='hover:underline'>Need Help?</a>
                        </div>
                        <p className='text-sm text-gray-500'>Already a member? <Link to="/login" className='hover:underline duration-100 text-white'>Sign in now</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp;