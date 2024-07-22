import React from 'react'
import axios from 'axios'
import LocationInput from './LocationInput.jsx';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function AddExp() {
  const [present, setPresent] = React.useState(false);
  const [location, setLocation] = useState('');
  const BaseUrl=import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const company = e.target.company.value;
    const title = e.target.title.value;
    const startDate = e.target.startDate.value;
    const endDate = present ? present : e.target.endDate.value;
    const description = e.target.description.value;
    const token = localStorage.getItem('token');
    try{
      const res =await axios.post(`${BaseUrl}create/createExp`, { token, company, title, startDate, endDate, location, description }); 
      alert(res.data.message);
      e.target.reset();
      navigate('/dashboard');
    }
    catch(err){
      alert(err.response.data.message);
      console.log(err);
    }
  };



  return (
    <>
      <div className='flex items-center w-full'>
          <div className='w-full flex justify-center items-center mt-10'>
            <form action="submit" className='w-1/2 p-10 bg-gray-300 rounded-2xl flex flex-col gap-2' onSubmit={handleSubmit}>
              {
                  <div className='w-full flex gap-5'>
                    <label htmlFor="Present">Present</label>
                    <input type="checkbox" name='present' checked={present} onChange={(e) => {
                      setPresent(e.target.checked);
                      setChecked(true);
                    }} />
                  </div>
              }
              <div className='w-full flex gap-5'>
                <label htmlFor="Company">Company</label>
                <input type="text" placeholder='Enter the Company Name' name='company' className='flex-1 bg-transparent border-b-2 border-gray-600 outline-none'/>
              </div>
              <div className='w-full flex gap-5'>
                <label htmlFor="Title">Title</label>
                <input type="text" placeholder='Enter the title' name='title' className='flex-1  bg-transparent border-b-2 border-gray-600 outline-none'/>
              </div>
              <div className='w-full flex gap-5'>
                <label htmlFor="startDate">Start Date</label>
                <input type="date" placeholder='Enter the Start Date' name='startDate' className='flex-1  bg-transparent border-b-2 border-gray-600 outline-none'/>
              </div>
              <div className='w-full flex gap-5'>
                {
                  !present && (
                    <>
                      <label htmlFor="endDate">End Date</label>
                      <input type="date" placeholder='Enter the End Date' name='endDate' className='flex-1  bg-transparent border-b-2 border-gray-600 outline-none'/>
                    </>
                  )
                }
              </div>
              <div className="w-full flex gap-5">
                <label htmlFor="Location">Location</label>
                 <LocationInput onSelect={handleLocationSelect} />
              </div>
              <div className='w-full flex gap-5'>
                <label htmlFor="Description">Description</label>
                <textarea type="text" placeholder='Enter the Description' name='description' className='flex-1  bg-transparent border-b-2 border-gray-600 outline-none' />
              </div>
              <div>
                <button className='btn bg-blue-500 m-5 w-1/2 hover:bg-blue-300'>
                  Submit
                </button>
              </div>
            </form>
          </div>
      </div>
    </>
  )
}

export default AddExp