import React from 'react'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import Nav from '../compound-component/components/Nav'
import About from '../screens/About'
import Users from '../screens/Users';
import ShoppingPageRefactor from '../compound-component/pages/ShoppingPageRefactor';

const Navigation = () => {
  return (
    <BrowserRouter>
        <Nav>
        <Routes>
            <Route path="/" element={<ShoppingPageRefactor/>} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />} />

            <Route path="/*" element={<Navigate to={"/"} replace/>} />


      </Routes>
      </Nav>
    </BrowserRouter>
  )
}

export default Navigation