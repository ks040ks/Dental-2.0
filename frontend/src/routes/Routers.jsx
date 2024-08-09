import React from 'react'
import Home from '../pages/Home'
import Service from '../pages/Service'
import Signup  from '../pages/Signup'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Doctor from '../pages/Doctor/Doctor.jsx'
import DoctorDetail from '../pages/Doctor/DoctorDetail'
import MyAccount from '../Dashboard/useraccount/MyAccount.jsx'
import Dashboard from '../Dashboard/doctoraccount/Dashboard.jsx'

import {Routes,Route} from "react-router-dom"
import ProtectedRoute from './ProtectedRoute.jsx'

function Routers () {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/doctor' element={<Doctor/>}/>
    <Route path='/doctor/:id' element={<DoctorDetail/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={'patient'}><MyAccount/></ProtectedRoute>}/>
    <Route path='/doctor/profile/me' element={<ProtectedRoute allowedRoles={'doctor'}><Dashboard/></ProtectedRoute>}/>
    <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRoles={'doctor'}><Dashboard/></ProtectedRoute>}/>
   </Routes>
  )
}

export default Routers