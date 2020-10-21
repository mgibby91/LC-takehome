import React from 'react';

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

  let dollars = price / 100;
  dollars = dollars.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const date = new Date(departureDate).toString().split(' ');
  const finalDate = `${date[1]} ${date[2]}, ${date[3]}`

  return (
    <div className={quoteListClass} onClick={() => setSelectedQuote(id)}>
      <div className="quotes-list-item-name">{name}</div>
      <div className="quotes-list-item-destination">{destination}</div>
      <div className="quotes-list-item-price">{dollars}</div>
      <div className="quotes-list-item-departure-date">{finalDate}</div>
    </div>
  )

}