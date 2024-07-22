import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Profile() {

  const [profile, setProfile] = React.useState("");
  const BaseUrl=import.meta.env.VITE_BASE_URL;

  useEffect(()=>{
      fetch(`${BaseUrl}show/profile`)
          .then((res)=>res.json())
          .then((data)=>{
              setProfile(data);
              console.log(data);
      })
  },[])





  return (
    <>
      <div className='flex justify-center items-center p-10'>
        <div className='card bg-gray-200 p-10 w-full flex flex-col'>
            <div>
                <h1 className='text-3xl text-gray-600 font-semibold text-center'>Profile</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <img src={profile.profile_picture} alt="profile" className='w-40 h-40 rounded-full'/>
                <p>Name-{profile.name}</p>
                <p>Email-{profile.email}</p>
                <p>Leetcode Username-{profile.leetcode_username}</p>
                <p>GitHub Username-{profile.gitHub_username}</p>
                <p>intro-{profile.intro}</p>
                {profile && <p>Description-{profile.description.map((des,index)=>{
                  return <button className='m-1 p-2 btn' key={index} >
                  {des}
                </button>
                })}</p>}
               {profile&& <p>Skils-{profile.skills.map((skill,index)=>{
                 return <button className='m-1 p-2 btn' key={index}>
                    {skill}
                  </button>
                })}</p>}
                <p>Resume-{<a className='text-blue-500'>{profile.resume}</a>}</p>
                <Link to={`/editProfile/${profile._id}`}>
                <button className='btn'>
                  Edit
                </button>
                </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile