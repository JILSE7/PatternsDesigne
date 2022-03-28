import React from 'react';
import { NavLink } from 'react-router-dom';

import icon from './favicon.svg';

export const Nav = ({children}:any) => {
  return (
    <div className='main-layout'>
        <nav>
            <img src={icon} alt='icon'/>
            <ul>
                <li>
                    <NavLink to={"/"} className={({isActive}) => isActive? 'nav-active' : '' }>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"} className={({isActive}) => isActive? 'nav-active' : '' }>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/users"}className={({isActive}) => isActive? 'nav-active' : '' }>Users</NavLink>
                </li>
            </ul>
        </nav>
        {
            children
        }
    </div>
  )
}
