import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/quotes.css';
import QuotesList from './QuotesList';
import transportationHelper from '../../helpers/transportationHelpers';

export default function Quotes(props) {

  useEffect(() => {

    const allQuotesPromise = axios.get('/api/quotes/all');
    const allTransportationPromise = axios.get('/api/quotes/transportation');

    Promise.all([allQuotesPromise, allTransportationPromise])
      .then(all => {

        let [allQuotes, allTransportation] = all;

        allQuotes = allQuotes.data;
        allTransportation = allTransportation.data;

        const filteredTransData = transportationHelper(allTransportation);

        console.log('allQuotes', allQuotes);
        console.log('allTrans', filteredTransData);

      })
      .catch(err => {
        console.log('quotes err', err);
      })
  }, [])


  return (
    <div className='main-quotes-container'>
      <QuotesList

      />
    </div>
  );

}