import React, { useState, useEffect } from 'react';
import '../../styles/quotes.css';
import dollarsConverter from '../../helpers/dollarsConverter';
import humanReadableDate from '../../helpers/humanReadableDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

export default function QuotesView({
  quotesData,
  transportationData,
  currentQuoteID,
  confirmDeleteQuote
}) {

  const [state, setState] = useState({
    departureLocation: '',
    distinationLocation: '',
    departureDate: '',
    returnDate: '',
    travellersNumber: '',
    transportation: [],
    name: '',
    priceCents: 0,
    phoneNumber: '',
    email: '',
    confirmDelete: false,
    showError: false,
  });

  // Set current quote
  useEffect(() => {

    for (let quote of quotesData) {
      if (currentQuoteID === quote.quotes_id) {
        setState({
          departureLocation: quote.departure_location,
          distinationLocation: quote.destination_location,
          departureDate: quote.departure_date,
          returnDate: quote.return_date,
          travellersNumber: quote.number_of_travellers,
          transportation: transportationData[currentQuoteID],
          name: quote.name,
          priceCents: quote.price_cents,
          phoneNumber: quote.phone_number,
          email: quote.email
        })
      }
    }

  }, [currentQuoteID, quotesData, transportationData]);

  function setTransportationList(transportationArr) {
    let finalStr = '';
    for (let trans of transportationArr) {
      finalStr += `${trans}, `;
    }
    return finalStr.slice(0, -2);
  }

  function clickDelete() {
    // error handling for no quote selected
    if (!state.departureLocation) {
      setState({ ...state, showError: true })
      setTimeout(() => {
        setState({ ...state, showError: false })
      }, 2500);
    } else {
      setState({ ...state, confirmDelete: true });
    }
  }

  function deleteQuote() {
    setState({
      departureLocation: '',
      distinationLocation: '',
      departureDate: '',
      returnDate: '',
      travellersNumber: '',
      transportation: [],
      name: '',
      priceCents: 0,
      phoneNumber: '',
      email: '',
      confirmDelete: false,
    });
    confirmDeleteQuote(currentQuoteID);
  }

  return (
    <div className="card-container">

      <div className="quotes-list-title">
        <FontAwesomeIcon icon={faForward} id='quotes-view-icon' />
        <div className="quotes-list-title-title">Quote Details</div>
        {state.showError && (
          <div className="quote-error-msg">Please select quote to delete!</div>
        )}
      </div>

      {!state.confirmDelete && (

        <div className="quotes-view-body">
          <div className="quotes-view-item">
            <div className="quotes-view-item-title">FROM</div>
            <div className="quotes-view-item-content">{state.departureLocation}</div>
          </div>
          <div className="quotes-view-item">
            <div className="quotes-view-item-title">DESTINATION</div>
            <div className="quotes-view-item-content">{state.distinationLocation}</div>
          </div>
          <div className="quotes-view-item">
            <div className="quotes-view-item-title">DEPARTURE DATE</div>
            <div className="quotes-view-item-content">{state.departureDate ? humanReadableDate(state.departureDate) : ''}</div>
          </div>
          <div className="quotes-view-item">
            <div className="quotes-view-item-title">RETURN DATE</div>
            <div className="quotes-view-item-content">{state.departureDate ? humanReadableDate(state.returnDate) : ''}</div>
          </div>
          <div className="quotes-view-item">
            <div className="quotes-view-item-title">TRAVELLERS NUMBER</div>
            <div className="quotes-view-item-content">{state.travellersNumber}</div>
          </div>
          <div className="quotes-view-item">
            <div className="quotes-view-item-title">TRANSPORTATION</div>
            <div className="quotes-view-item-content">{setTransportationList(state.transportation)}</div>
          </div>
          <div className="quotes-view-item">
            <div className="quotes-view-item-title">NAME</div>
            <div className="quotes-view-item-content">{state.name}</div>
          </div>
          <div className="quotes-view-item">
            <div className="quotes-view-item-title">PRICE</div>
            <div className="quotes-view-item-content">{state.priceCents ? dollarsConverter(state.priceCents) : ''}</div>
          </div>
          <div className="quotes-view-item">
            <div className="quotes-view-item-title">CONTACT INFO</div>
            <div className="quotes-view-item-content">{state.email ? state.email + ' / ' + state.phoneNumber : ''}</div>
          </div>
          <div className="quotes-view-item" id='quotes-view-btns'>
            <div className="quotes-delete-btn quotes-btn" onClick={() => clickDelete()}>DELETE</div>
          </div>
        </div>
      )}

      {state.confirmDelete && (
        <div className="confirm-delete-container">
          <div className="confirm-delete-title">Are you sure you want to delete?</div>
          <div className="confirm-delete-btns-container">
            <div className="confirm-cancel-btn" onClick={() => setState({ ...state, confirmDelete: false })}>Cancel</div>
            <div className="confirm-confirm-btn" onClick={() => deleteQuote()}>Confirm</div>
          </div>
        </div>
      )}

    </div>
  )

}