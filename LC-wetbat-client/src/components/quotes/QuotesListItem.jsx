import React from 'react';

export default function QuotesListItem({
  name,
  destination,
  price,
  departureDate
}) {

  let dollars = price / 100;
  dollars = dollars.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const date = new Date(departureDate).toString().split(' ');
  const finalDate = `${date[1]} ${date[2]}, ${date[3]}`

  return (
    <div className='quotes-list-item'>
      <div className="quotes-list-item-name">{name}</div>
      <div className="quotes-list-item-destination">{destination}</div>
      <div className="quotes-list-item-price">{dollars}</div>
      <div className="quotes-list-item-departure-date">{finalDate}</div>
    </div>
  )

}