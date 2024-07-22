import React from 'react'
import {Link } from 'react-router-dom'
import Project from '../AllEditables/Project.jsx'
import Skills from '../AllEditables/Skills.jsx'
import Experience from '../AllEditables/Exp.jsx'
import Profile from '../AllEditables/Profile.jsx'

function Dashboard() {

  const [page, setPage] = React.useState(<Profile />);

  const ProfileHandeler = () => {
      setPage(<Profile />)
  }
  const ExpHandeler = () => {
    setPage(<Experience />)
  }
  const SkillsHandler = () => {
    setPage(<Skills />)
  }
  const ProjectHandler = () => {
    setPage(<Project />)
  }



  return (
    <>
      <div className='flex gap-2'>
        <div className='sideNav md:w-1/5 h-full border-r-2 border-b-2 border-gray-400'>
          <div className='md:flex flex-col gap-2 p-2'>
            <div className='flex items-center gap-2'>
              <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='logo' className='w-10 h-10' />
              <h1 className='text-2xl font-semibold text-yellow-300'>Admin</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <Link onClick={ProfileHandeler} className='p-2 bg-gray-200 rounded-md hover:bg-gray-300'>Profile</Link>
              <Link onClick={ExpHandeler} className='p-2 bg-gray-200 rounded-md hover:bg-gray-300'>Experience</Link>
              <Link onClick={SkillsHandler} className='p-2 bg-gray-200 rounded-md hover:bg-gray-300'>Skills</Link>
              <Link onClick={ProjectHandler} className='p-2 bg-gray-200 rounded-md hover:bg-gray-300'>Projects</Link>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          {page}
        </div>
      </div>
    </>
  )
}

export default Dashboard