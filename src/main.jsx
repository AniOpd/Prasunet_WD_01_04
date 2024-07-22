import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import Login from './components/Login/Login.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import ForgotPass from './components/ForgotPass/ForgotPass.jsx'
import AddSkill from './components/AllAddable/AddSkills.jsx'
import AddExp from './components/AllAddable/AddExp.jsx'
import AddProject from './components/AllAddable/AddProject.jsx'

import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<ContactForm />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/forgetPass' element={<ForgotPass />} />
      <Route path='/addSkill' element={<AddSkill />} />
      <Route path='/addExp' element={<AddExp />} />
      <Route path='/addProject' element={<AddProject />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
