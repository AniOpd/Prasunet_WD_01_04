import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const BaseUrl=import.meta.env.VITE_BASE_URL;

    const handleLogin =async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       try{
        const res = await axios.post(`${BaseUrl}user/login`,{email,password});
        if(res.status===200){
            alert(res.data.message);
            localStorage.setItem('token',res.data.token);
            console.log(localStorage.getItem('token'));
            window.location.href='/dashboard';
        }
       }catch(err){
           alert(err.response.data.message);
       }
    }

  return (
   <>
   
    <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-10 rounded-lg shadow-lg">
            <form action='submit' onSubmit={handleLogin}>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-800 font-bold">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter Email" className="border border-gray-300 p-2 w-full rounded-lg" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-800 font-bold">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" className="border border-gray-300 p-2 w-full rounded-lg" />
                </div>
                <div className="mb-6">
                    <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded-lg">Login</button>
                </div>
                <Link to='/forgetPass' className='text-sm text-blue-500 font-thin'>
                   Forget Password
                </Link>
            </form>
        </div>  
    </div>
   
   </>
  )
}

export default Login