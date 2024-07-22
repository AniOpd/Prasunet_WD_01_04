import React from 'react'
import axios from 'axios'

function ForgotPass() {
    const BaseUrl=import.meta.env.VITE_BASE_URL;

    const handleResePass=async (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const otp = e.target.otp.value;
        const res = await axios.post(`${BaseUrl}user/resetPassword/anishd988@gmail.com`,{password,otp});
        if(res.status===200){
            alert(res.data.message);
            window.location.href='/login';
        }
    }

  return (
   <>
    <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-10 rounded-lg shadow-lg">
            <form action='submit' onSubmit={handleResePass}>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-800 font-bold">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" className="border border-gray-300 p-2 w-full rounded-lg" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-800 font-bold">Confirm Password</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="confirm Password" className="border border-gray-300 p-2 w-full rounded-lg" required/>
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-800 font-bold">OTP</label>
                    <input type="password" name="otp" id="otp" placeholder="Enter OTP" className="border border-gray-300 p-2 w-full rounded-lg" />
                </div>
                <div className="mb-6">
                    <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded-lg">Submit</button>
                </div>
            </form>
        </div>  
    </div>
   </>
  )
}

export default ForgotPass