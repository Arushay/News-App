
import './App.css';


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><News key="general" pageSize={5} country="nl" category="general" /></Route>
          <Route exact path="/general"><News key="general" pageSize={5} country="nl" category="general" /></Route>
          <Route exact path="/Business"><News key="Business" pageSize={5} country="nl" category="Business" /></Route>
          <Route exact path="/Entertainment"><News key="Entertainment" pageSize={5} country="nl" category="Entertainment" /></Route>
          <Route exact path="/Technology"><News key="Technology" pageSize={5} country="nl" category="Technology" /></Route>
          <Route exact path="/Sports"><News key="Sports" pageSize={5} country="nl" category="Sports" /></Route>
          <Route exact path="/Science"><News key="Science" pageSize={5} country="nl" category="Science" /></Route>
          <Route exact path="/Health"><News key="Health" pageSize={5} country="nl" category="Health" /></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
