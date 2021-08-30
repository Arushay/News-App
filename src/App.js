
import './App.css';


import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress} />
        <Navbar />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apikey={apikey} key="general" pageSize={5} country="nl" category="general" /></Route>
          <Route exact path="/general"><News setProgress={setProgress} apikey={apikey} key="general" pageSize={5} country="nl" category="general" /></Route>
          <Route exact path="/Business"><News setProgress={setProgress} apikey={apikey} key="Business" pageSize={5} country="nl" category="Business" /></Route>
          <Route exact path="/Entertainment"><News setProgress={setProgress} apikey={apikey} key="Entertainment" pageSize={5} country="nl" category="Entertainment" /></Route>
          <Route exact path="/Technology"><News setProgress={setProgress} apikey={apikey} key="Technology" pageSize={5} country="nl" category="Technology" /></Route>
          <Route exact path="/Sports"><News setProgress={setProgress} apikey={apikey} key="Sports" pageSize={5} country="nl" category="Sports" /></Route>
          <Route exact path="/Science"><News setProgress={setProgress} apikey={apikey} key="Science" pageSize={5} country="nl" category="Science" /></Route>
          <Route exact path="/Health"><News setProgress={setProgress} apikey={apikey} key="Health" pageSize={5} country="nl" category="Health" /></Route>
        </Switch>
      </Router>
    </div>
  )

}
export default App;
