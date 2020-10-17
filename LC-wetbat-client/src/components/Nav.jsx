import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

  return (
    <nav className='nav-main-container'>
      <h3>Website Logo</h3>
      <ul className="nav-links">
        <Link to='/'>
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  )

}