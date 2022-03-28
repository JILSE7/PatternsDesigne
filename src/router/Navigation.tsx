import React from 'react'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import { Nav } from '../Nav';

import About from '../screens/About'
import Users from '../screens/Users';


const Navigation = () => {
  return (
    <BrowserRouter>
        <Nav>
        <Routes>
            <Route path="/" element={<h1>f</h1>} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />} />

            <Route path="/*" element={<Navigate to={"/"} replace/>} />


      </Routes>
      </Nav>
    </BrowserRouter>
  )
}

export default Navigation