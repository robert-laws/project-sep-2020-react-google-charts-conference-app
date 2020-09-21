import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='page-footer blue darken-2'>
      <div className='container'>
        <div className='row'>
          <div className='col l2 s12 m6'></div>
          <div className='col l4 s12 m6'>
            <article id='text-6' className='panel widget widget_text'>
              <h5>About Data Dashboard</h5>{' '}
              <div>
                <p>Data Dashboard shows stats using React.</p>
              </div>
            </article>
          </div>
          <div className='col l4 s12 m6'>
            <article
              id='categories-2'
              className='panel widget widget_categories'
            >
              <h5>Pages</h5>
              <ul>
                <li>
                  <Link className='white-text' to='/'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className='white-text' to='/service'>
                    Service Desk
                  </Link>
                </li>
                <li>
                  <Link className='white-text' to='/instruction'>
                    Instruction
                  </Link>
                </li>
                <li>
                  <Link className='white-text' to='/collections'>
                    Alma - Collections
                  </Link>
                </li>
                <li>
                  <Link className='white-text' to='/loans'>
                    Alma - Loans
                  </Link>
                </li>
              </ul>
            </article>
          </div>
          <div className='col l2 s12 m6'></div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container center-align'>
          Copyright 2020 - GU-Q Library
        </div>
      </div>
    </footer>
  );
};
