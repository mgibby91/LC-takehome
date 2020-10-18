import React from 'react';

export default function QuotesListItem({
  id,
  name,
  destination,
  price,
  departureDate
}) {

  return (
    <div className='quotes-list-item'>
      <div className="quotes-list-item-name">{name}</div>
      <div className="quotes-list-item-destination">{destination}</div>
      <div className="quotes-list-item-price">{price}</div>
      <div className="quotes-list-item-departure-date">{departureDate}</div>
    </div>
  )

}