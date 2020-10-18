import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/quotes.css';
import QuotesList from './QuotesList';
import transportationHelper from '../../helpers/transportationHelpers';

export default function Quotes(props) {

  const [state, setState] = useState({
    quotesData: [],
    transportationData: {}
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

        setState({ quotesData: allQuotes, transportationData: cleanTransData })

        console.log('allQuotes', allQuotes);
        console.log('allTrans', cleanTransData);

      })
      .catch(err => {
        console.log('quotes err', err);
      })
  }, [])


  return (
    <div className='main-quotes-container'>
      <QuotesList
        quotesData={state.quotesData}
        transportationData={state.transportationData}
      />
    </div>
  );

}