import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Nav from './components/Nav';
import SideNav from './components/SideNav';
import Index from './components/Index';
import Quotes from './components/Quotes';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {

  const [state, setState] = useState({

  });

  useEffect(() => {

  }, []);


  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <div className='main-content-container'>
          <SideNav />
          <Switch >
            <Route
              path='/'
              exact
              render={props => (
                <Index
                  {...props}
                />
              )}
            />
            <Route
              path='/quotes'
              exact
              render={props => (
                <Quotes
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
