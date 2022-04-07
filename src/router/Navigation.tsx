
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import {RegisterPage,FormikPage} from '../03-forms/pages/';
import { Nav } from '../Nav';

import About from '../screens/About'
import Users from '../screens/Users';
import {FormikPageYup,FormikComponents,FormikAbstraction,RegisterFormikPage, DinamikForm} from '../03-forms/pages';




const Navigation = () => {
  return (
    <BrowserRouter>
        <Nav>
        <Routes>
            <Route path='/formik' element={<FormikPage/>}/>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/registerFormikPage" element={<RegisterFormikPage/>} />
            <Route path="/formikYup" element={<FormikPageYup/>} />
            <Route path="/formikComponents" element={<FormikComponents/>} />
            <Route path="/formikAbstraction" element={<FormikAbstraction/>} />
            <Route path="/dinamycForm" element={<DinamikForm/>} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />} />

            <Route path="/*" element={<Navigate to={"/register"} replace/>} />


      </Routes>
      </Nav>
    </BrowserRouter>
  )
}

export default Navigation