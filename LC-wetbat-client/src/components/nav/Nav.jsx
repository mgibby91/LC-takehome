import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComment, faCog, faThLarge } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {

  return (
    <nav className='nav-main-container'>
      <div className="top-nav-container">
        <div className="top-nav-left">
          <FontAwesomeIcon icon={faThLarge} class='top-nav-icon' id='left-nav-icon' />
          <h2><Link to='/' id='home-link'>Wet Bat Travel</Link></h2>
        </div>
        <div className="top-nav-right">
          <input type="text" placeholder='Search' id='nav-search' />
          <FontAwesomeIcon icon={faBell} class='top-nav-icon' />
          <FontAwesomeIcon icon={faComment} class='top-nav-icon' />
          <FontAwesomeIcon icon={faCog} class='top-nav-icon' />
          <img src="https://golf.com/wp-content/uploads/2018/07/tiger_woods_headshot-300x300.png" alt="" className='user-image' />
        </div>
      </div>
    </nav>
  )

}