import React from 'react';
import '../../styles/quotes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

export default function QuotesView({
  quotesData,
  transportationData,
  currentQuoteID
}) {

  console.log('quoteview props', quotesData);
  console.log('quoteview props', transportationData);
  console.log('quoteview props', currentQuoteID);

  return (
    <div className="card-container">

      <div className="quotes-list-title">
        <FontAwesomeIcon icon={faForward} id='quotes-view-icon' />
        <div className="quotes-list-title-title">Quote Details</div>
      </div>

      <div className="quotes-view-body">
        <div className="quotes-view-item">
          <div className="quotes-view-item-title">FROM</div>
          <div className="quotes-view-item-content"></div>
        </div>
        <div className="quotes-view-item">
          <div className="quotes-view-item-title">DESTINATION</div>
          <div className="quotes-view-item-content"></div>
        </div>
        <div className="quotes-view-item">
          <div className="quotes-view-item-title">DEPARTURE DATE</div>
          <div className="quotes-view-item-content"></div>
        </div>
        <div className="quotes-view-item">
          <div className="quotes-view-item-title">RETURN DATE</div>
          <div className="quotes-view-item-content"></div>
        </div>
        <div className="quotes-view-item">
          <div className="quotes-view-item-title">TRAVELLERS NO.</div>
          <div className="quotes-view-item-content"></div>
        </div>
        <div className="quotes-view-item">
          <div className="quotes-view-item-title">TRANSPORTATION</div>
          <div className="quotes-view-item-content"></div>
        </div>
        <div className="quotes-view-item">
          <div className="quotes-view-item-title">NAME</div>
          <div className="quotes-view-item-content"></div>
        </div>
        <div className="quotes-view-item">
          <div className="quotes-view-item-title">PRICE</div>
          <div className="quotes-view-item-content"></div>
        </div>
        <div className="quotes-view-item">
          <div className="quotes-view-item-title">CONTACT INFO</div>
          <div className="quotes-view-item-content"></div>
        </div>
        <div className="quotes-view-item">

        </div>
      </div>


    </div>
  )

}