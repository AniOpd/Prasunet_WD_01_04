import React,{useState,useEffect} from 'react'
import { Link , NavLink } from 'react-router-dom'

function Header() {
  const [auth,setAuth] = useState(false);
  
  useEffect(()=>{
    const isAuth = localStorage.getItem('token');
    if(isAuth){
      setAuth(true);
    }
  },[localStorage.getItem('token')])

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  }

  return (
   <>
   <div className="navbar  bg-cyan-800 text-white max-w-full sticky top-0 z-50 flex justify-between">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="bt btn btn-ghost lg:hidden" >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase text-black">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/projects'>Projects</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/skills'>Skills</Link></li>
      {auth && <li><NavLink to='/dashboard' className={({isActive})=>`duration-200 ${isActive ? "text-yellow-500" : "text-black"} hover:bg-yellow-400 `}>Dashboard</NavLink></li>}
      {auth && <li><NavLink to='/logout' className={({isActive})=>`duration-200 ${isActive ? "text-yellow-500" : "text-black"} hover:bg-yellow-400 `}>Logout</NavLink></li>}
      {!auth && <li><NavLink to='/login' className={({isActive})=>`duration-200 ${isActive ? "text-yellow-500" : "text-black"} hover:bg-yellow-400 `}>Login</NavLink></li>}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl hover:bg-cyan-800">Anish</Link>
  </div>
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 uppercase">
    <li><NavLink to='/' className={({isActive})=>`duration-200 ${isActive ? "text-yellow-500" : "text-black"} hover:bg-yellow-400 `}>Home</NavLink></li>
      <li><NavLink to='/about' className={({isActive})=>`duration-200 ${isActive ? "text-yellow-500" : "text-black"} hover:bg-yellow-400 `}>About</NavLink></li>
      <li><NavLink to='/projects' className={({isActive})=>`duration-200 ${isActive ? "text-yellow-500" : "text-black"} hover:bg-yellow-400 `}>Projects</NavLink></li>
      <li><NavLink to='/contact' className={({isActive})=>`duration-200 ${isActive ? "text-yellow-500" : "text-black"} hover:bg-yellow-400 `}>Contact</NavLink></li>
      <li><NavLink to='/skills' className={({isActive})=>`duration-200 ${isActive ? "text-yellow-500" : "text-black"} hover:bg-yellow-400 `}>Skills</NavLink></li>
      {auth && <li><NavLink to='/dashboard' className={({isActive})=>`duration-200 ${isActive ? "text-yellow-500" : "text-black"} hover:bg-yellow-400 `}>Dashboard</NavLink></li>}
      {auth && <li><NavLink onClick={handleLogout} className={({isActive})=>`duration-200 ${ "text-black"} hover:bg-yellow-400 `}>Logout</NavLink></li>}
      {!auth && <li><NavLink to='/login' className={({isActive})=>`duration-200 ${isActive ? "text-yellow-500" : "text-black"} hover:bg-yellow-400 `}>Login</NavLink></li>}
    </ul>
  </div>
</div>
   </>
  )
}

export default Header
