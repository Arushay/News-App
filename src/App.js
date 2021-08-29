
import './App.css';


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 10
  }
  setProgress = (progress)=> {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            height = {3}
            progress={this.state.progress}/>
          <Navbar />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={5} country="nl" category="general" /></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={5} country="nl" category="general" /></Route>
            <Route exact path="/Business"><News setProgress={this.setProgress} apikey={this.apikey} key="Business" pageSize={5} country="nl" category="Business" /></Route>
            <Route exact path="/Entertainment"><News setProgress={this.setProgress} apikey={this.apikey} key="Entertainment" pageSize={5} country="nl" category="Entertainment" /></Route>
            <Route exact path="/Technology"><News setProgress={this.setProgress} apikey={this.apikey} key="Technology" pageSize={5} country="nl" category="Technology" /></Route>
            <Route exact path="/Sports"><News setProgress={this.setProgress} apikey={this.apikey} key="Sports" pageSize={5} country="nl" category="Sports" /></Route>
            <Route exact path="/Science"><News setProgress={this.setProgress} apikey={this.apikey} key="Science" pageSize={5} country="nl" category="Science" /></Route>
            <Route exact path="/Health"><News setProgress={this.setProgress} apikey={this.apikey} key="Health" pageSize={5} country="nl" category="Health" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
