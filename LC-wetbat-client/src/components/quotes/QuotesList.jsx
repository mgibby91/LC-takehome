import React from 'react';
import QuotesListItem from './QuotesListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons';


export default function QuotesList({ quotesData }) {

  console.log('quotesListData', quotesData);

  const quotesListItems = quotesData.map((quote, index) => {
    return <QuotesListItem
      key={index}
      id={quote.quotes_id}
      name={quote.name}
      destination={quote.destination_location}
      price={quote.price_cents}
      departureDate={quote.departure_date}
    />
  })

  return (
    <div className='quotes-list-container card-container'>

      <div className="quotes-list-title">
        <FontAwesomeIcon icon={faCommentDollar} id='quotes-main-icon' />
        <div className="quotes-list-title-title">Current Quotes</div>
      </div>

      <div className="quotes-list-sort">
        <div className="quotes-sort-title">Sort By:</div>
        <div className="quotes-sort-price">
          <div className="quotes-sort-price-title">Price</div>
          <div className="sort-price-btn-low sort-btn">Low</div>
          <div className="sort-price-btn-high sort-btn">High</div>
        </div>
        <div className="quotes-sort-date">
          <div className="quotes-sort-date-title">Date</div>
          <div className="sort-date-btn-low sort-btn">New</div>
          <div className="sort-date-btn-high sort-btn">Old</div>
        </div>
      </div>

      <div className="quotes-list-body">
        <div className="quotes-list-body-titles">
          <div className="quotes-list-name">NAME</div>
          <div className="quotes-list-destination">DESTINATION</div>
          <div className="quotes-list-price">PRICE</div>
          <div className="quotes-list-departure-date">DEPARTURE DATE</div>
        </div>
        <div className="quotes-list-body-items">
          {quotesListItems}
        </div>
      </div>
    </div>
  )


}