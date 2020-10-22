import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/quotes.css';
import QuotesList from './QuotesList';
import QuotesView from './QuotesView';
import transportationHelper from '../../helpers/transportationHelpers';

export default function Quotes() {

  const [state, setState] = useState({
    quotesData: [],
    transportationData: {},
    currentQuoteID: 0,
    deleting: false,
    triggerCount: 0,
    loadingQuotes: true
  });

  useEffect(() => {

    const allQuotesPromise = axios.get('/api/quotes/all');
    const allTransportationPromise = axios.get('/api/quotes/transportation');

    Promise.all([allQuotesPromise, allTransportationPromise])
      .then(all => {

        let [allQuotes, allTransportation] = all;

        allQuotes = allQuotes.data;
        allTransportation = allTransportation.data;

        const cleanTransData = transportationHelper(allTransportation);

        setState({ quotesData: allQuotes, transportationData: cleanTransData, loadingQuotes: false });

      })
      .catch(err => {
        console.log('quotes err', err);
      })

  }, [state.triggerCount]);

  function sortByPrice(isLow) {

    let quotes = state.quotesData;
    if (isLow) {
      quotes.sort((a, b) => a.price_cents - b.price_cents);
    } else {
      quotes.sort((a, b) => b.price_cents - a.price_cents);
    }
    setState({ ...state, quotesData: quotes });

  }

  function sortByTime(isNew) {

    let quotes = state.quotesData;
    if (isNew) {
      quotes.sort((a, b) => new Date(a.departure_date) - new Date(b.departure_date));
    } else {
      quotes.sort((a, b) => new Date(b.departure_date) - new Date(a.departure_date));
    }
    setState({ ...state, quotesData: quotes });
  }

  function setSelectedQuote(id) {
    setState({ ...state, currentQuoteID: id });
  }

  function confirmDeleteQuote(quoteID) {
    setState({ ...state, deleting: true });
    // for effect...
    setTimeout(() => {
      axios.put('/api/quotes/delete', { quoteID })
        .then(() => {
          setState({
            ...state,
            triggerCount: state.triggerCount + 1,
            deleting: false,
          });
        })
    }, 1500);
  }

  return (
    <div className='main-quotes-container'>
      <QuotesList
        quotesData={state.quotesData}
        sortByPrice={sortByPrice}
        sortByTime={sortByTime}
        setSelectedQuote={setSelectedQuote}
        currentQuoteID={state.currentQuoteID}
        deleting={state.deleting}
        loadingQuotes={state.loadingQuotes}
      />
      <QuotesView
        quotesData={state.quotesData}
        transportationData={state.transportationData}
        currentQuoteID={state.currentQuoteID}
        confirmDeleteQuote={confirmDeleteQuote}
      />
    </div>
  );

}