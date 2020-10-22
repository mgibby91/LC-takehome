import React from 'react';
import dollarsConverter from '../../helpers/dollarsConverter';
import humanReadableDate from '../../helpers/humanReadableDate';

const classNames = require('classnames');

export default function QuotesListItem({
  id,
  name,
  destination,
  price,
  departureDate,
  selected,
  setSelectedQuote
}) {

  const quoteListClass = classNames('quotes-list-item', { 'quotes-list-selected': selected })

  const dollars = dollarsConverter(price);
  const finalDate = humanReadableDate(departureDate);

  return (
    <div className={quoteListClass} onClick={() => setSelectedQuote(id)}>
      <div className="quotes-list-item-name">{name}</div>
      <div className="quotes-list-item-destination">{destination}</div>
      <div className="quotes-list-item-price">{dollars}</div>
      <div className="quotes-list-item-departure-date">{finalDate}</div>
    </div>
  )

}