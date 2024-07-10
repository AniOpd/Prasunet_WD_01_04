import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
        <div className=" min-h-screen flex flex-col">
    <Header/>
    <Outlet />
    <Footer />
        </div>
    </>
  )
}

export default App
