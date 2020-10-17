import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Index from './components/Index';
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
        </Switch>
      </div>
    </Router>
  )
}

export default App;
