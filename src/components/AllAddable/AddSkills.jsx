import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AddSkills() {
    const token =  localStorage.getItem('token');
    const navigate = useNavigate();
    const BaseUrl=import.meta.env.VITE_BASE_URL;

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const name=e.target.skill.value;
        const proficiency=e.target.level.value;
        const res = await axios.post(`${BaseUrl}create/createSkills`,{token,name,proficiency});
        alert(res.data.message);
        navigate('/dashboard')
    }


  return (
    <div className=''>
    <div className='flex justify-center items-center mt-24'>
        <form action="submit" onSubmit={handleSubmit} className='w-1/2 p-10 bg-gray-300 rounded-2xl flex flex-col gap-2'>
            <div className='w-full flex gap-5'>
                <label htmlFor="Skill">Skill</label>
                <input type="text" placeholder='Enter the Skill to add' name='skill' className='flex-1 bg-transparent border-b-2 border-gray-600 outline-none'/>
            </div>
            <div className='w-full flex gap-5'>
                <label htmlFor="level">Level</label>
                <input type="number" placeholder='Enter level' name='level' className='flex-1  bg-transparent border-b-2 border-gray-600 outline-none'/>
            </div>
            <div>
                <button className='btn bg-blue-500 m-5 w-1/2 hover:bg-blue-300'>
                    Submit
                </button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default AddSkills