import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

export default function HomeQuickQuote() {

  return (
    <div className="home-card-container">

      <div className="quotes-list-title">
        <FontAwesomeIcon icon={faForward} id='quotes-main-icon' />
        <div className="quotes-list-title-title">Quick Quote</div>
      </div>

      <div className="quick-quote-body">
        <div className="quick-quote-body-text">In development</div>
      </div>
    </div>
  )

}