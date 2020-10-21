import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDollarSign } from '@fortawesome/free-solid-svg-icons';

export default function SideNav(props) {

  return (
    <div className="side-nav-container">
      <ul className="nav-links">
        <Link to='/' className='side-nav-list-item' onClick={(e) => props.setSelected(e.target.textContent)}>
          <FontAwesomeIcon icon={faHome} class='side-nav-icon' />
          <li>Home</li>
        </Link>
        <Link to='/quotes' className='side-nav-list-item' onClick={(e) => props.setSelected(e.target.textContent)}>
          <FontAwesomeIcon icon={faDollarSign} class='side-nav-icon' />
          <li>Quotes</li>
        </Link>
      </ul>
    </div >
  )

}