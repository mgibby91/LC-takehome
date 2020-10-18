import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/quotes.css';
import QuotesList from './QuotesList';

export default function Quotes(props) {

  useEffect(() => {
    axios.get('/api/quotes')
      .then(res => {
        console.log('quotes res', res.data);
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