import React from 'react';
import '../../styles/home.css';
import HomeQuickQuote from './HomeQuickQuote';
import axios from 'axios';
import { useEffect } from 'react';


export default function Home(props) {

  // console.log('indexProps', props);

  useEffect(() => {

    const promiseIndex = axios.get('/api/');

    Promise.all([promiseIndex])
      .then(all => {
        let [indexData] = all;
        indexData = indexData.data;
        console.log('indexdataafter', indexData);
      })
      .catch(err => {
        console.log('indexError', err);
      })

  }, []);

  return (
    <div className='home-main-container'>

      <div className="extended-card-container">
        <div className="main-card-left">
          <div className="main-card-left-title">Welcome to your dashboard</div>
          <div className="main-card-left-text">What's the status on the deliverables for eow? we need a paradigm shift. Ping me meeting assassin run it up the flagpole, ping the boss and circle back. Programmatically message the initiative let's not solutionize this right now parking lot it. Where the metal hits the meat shotgun approach we need to harvest synergy effects. We need to crystallize a plan to be inspired is to become creative, innovative and energized we want this philosophy to trickle down to all our stakeholders nor UI, yet get six alpha pups in here for a focus group, but driving the initiative forward.</div>
        </div>
        <div className="main-card-right"></div>
      </div>

      <HomeQuickQuote

      />

    </div>
  )

}