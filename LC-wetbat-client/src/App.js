import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Nav from './components/nav/Nav';
import SideNav from './components/nav/SideNav';
import Index from './components/home/Home';
import Quotes from './components/quotes/Quotes';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {

  const [state, setState] = useState({
    currentPage: 'Home'
  });

  useEffect(() => {

  }, []);


  function setSelected(name) {
    console.log('clicked!', name);
    setState({ currentPage: name });
  }


  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <div className='main-content-container'>
          <SideNav
            setSelected={setSelected}
            selected={state.currentPage}
          />
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
