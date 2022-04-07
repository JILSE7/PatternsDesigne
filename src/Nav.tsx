
import { NavLink } from 'react-router-dom';

import icon from './favicon.svg';


export const Nav = ({children}:any) => {
  return (
    <div className='main-layout'>
        <nav>
            <img src={icon} alt='icon'/>
            <ul>
                <li>
                    <NavLink to={"/register"} className={({isActive}) => isActive? 'nav-active' : '' }>Register</NavLink>
                </li>
                <li>
                    <NavLink to={"/registerFormikPage"} className={({isActive}) => isActive? 'nav-active' : '' }>Register Formik Page</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"} className={({isActive}) => isActive? 'nav-active' : '' }>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/users"}className={({isActive}) => isActive? 'nav-active' : '' }>Users</NavLink>
                </li>
                <li>
                    <NavLink to={"/formik"}className={({isActive}) => isActive? 'nav-active' : '' }>Formik</NavLink>
                </li>
                <li>
                    <NavLink to={"/formikYup"}className={({isActive}) => isActive? 'nav-active' : '' }>Formik Yup</NavLink>
                </li>
                <li>
                    <NavLink to={"/formikComponents"}className={({isActive}) => isActive? 'nav-active' : '' }>FormikComponents</NavLink>
                </li>
                <li>
                    <NavLink to={"/formikAbstraction"}className={({isActive}) => isActive? 'nav-active' : '' }>Formik Abstraction</NavLink>
                </li>
                <li>
                    <NavLink to={"/dinamycForm"}className={({isActive}) => isActive? 'nav-active' : '' }>Dynamic Form</NavLink>
                </li>
            </ul>
        </nav>
        {
            children
        }
    </div>
  )
}
