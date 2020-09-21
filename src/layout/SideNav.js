import React from 'react';
import { NavLink } from 'react-router-dom';

export const SideNav = () => {
  return (
    <ul className='sidenav' id='mobile-demo'>
      <li>
        <NavLink to='/service'>Service Desk</NavLink>
      </li>
      <li>
        <NavLink to='/instruction'>Instruction</NavLink>
      </li>
      <li>
        <NavLink to='/collections'>Alma - Collections</NavLink>
      </li>
      <li>
        <NavLink to='/loans'>Alma - Loans</NavLink>
      </li>
    </ul>
  );
};
