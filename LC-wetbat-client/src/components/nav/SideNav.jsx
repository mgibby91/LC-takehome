import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDollarSign } from '@fortawesome/free-solid-svg-icons';

export default function SideNav({
  selected,
  setSelected
}) {

  // console.log('sidenav props', props);

  return (
    <div className="side-nav-container">
      <ul className="nav-links">
        <Link
          to='/'
          className={selected === 'Home' ? 'side-nav-list-item side-nav-selected' : 'side-nav-list-item'}
          onClick={() => setSelected('Home')}
        >
          <FontAwesomeIcon icon={faHome} class='side-nav-icon' />
          <li>Home</li>
        </Link>
        <Link
          to='/quotes'
          className={selected === 'Quotes' ? 'side-nav-list-item side-nav-selected' : 'side-nav-list-item'}
          onClick={() => setSelected('Quotes')}
        >
          <FontAwesomeIcon icon={faDollarSign} class='side-nav-icon' />
          <li>Quotes</li>
        </Link>
      </ul>
    </div >
  )

}