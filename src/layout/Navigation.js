import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link className='brand-logo' to='/'>
          Data Dashboard
        </Link>
        <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
          <i className='material-icons'>menu</i>
        </a>
        <ul id='top-navigation' className='right hide-on-med-and-down'>
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
      </div>
    </nav>
  );
};
