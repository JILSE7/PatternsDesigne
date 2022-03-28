import React from 'react'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import RegisterPage from '../03-forms/pages/RegisterPage';
import { Nav } from '../Nav';

import About from '../screens/About'
import Users from '../screens/Users';


const Navigation = () => {
  return (
    <BrowserRouter>
        <Nav>
        <Routes>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />} />

            <Route path="/*" element={<Navigate to={"/register"} replace/>} />


      </Routes>
      </Nav>
    </BrowserRouter>
  )
}

export default Navigation