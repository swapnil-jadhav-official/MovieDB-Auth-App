import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {user, logIn} = UserAuth();

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }

  return (
    <>
        <div className='w-full h-screen relative'>
            <img className='absolute h-full object-cover w-full' src="https://www.hulu.com/static/hitch/s3/attachments/ckzoylttk003x1v6mcd4p0gk2-ckxgnvin29r771v5fyutjbf5c-bundle-6400x2640-desktop-1x.jpg" alt='Movie posters' />
            
            <div className='fixed w-full py-24 z-50 mt-24'>
                <div className='mx-auto max-w-[450px] px-8 py-24 bg-black/90 text-white rounded-lg shadow-xl'>
                    <h1 className='font-bold text-3xl max-w-[380px] mx-auto'>Sign In</h1>
                    <form onSubmit={handleSignIn} className='max-w-[380px] mx-auto py-12'>
                        <input 
                          onClick={(e) => setEmail(e.target.value)} 
                          type="email" 
                          placeholder='Email' 
                          className='bg-gray-700 rounded outline-none px-4 py-3 w-full' 
                        />
                        {error && <p className='text-red-500 text-sm mt-2'>* {error}</p>}
                        <input 
                          onClick={(e) => setPassword(e.target.value)} 
                          type="password" 
                          placeholder='Password' 
                          className='bg-gray-700 rounded outline-none px-4 py-3 w-full mt-4' 
                        />
                        <button className='text-white bg-green-600 hover:bg-opacity-60 duration-150 w-full mt-12 py-3 rounded font-bold'>Sign In</button>
                        <div className='my-8 flex justify-between text-sm text-gray-500'>
                            <p>
                                <input type="checkbox" /> Remember me
                            </p>
                            <a href='#' className='hover:underline'>Need Help?</a>
                        </div>
                        <p className='text-sm text-gray-500'>Not a member yet? <Link to="/signup" className='hover:underline duration-100 text-white'>Sign up now</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login;