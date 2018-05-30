import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from "react-router-dom";
//Custom React Components
import AnimatedTyper from './components/AnimatedTyper.jsx';
import InteractiveScene from './components/InteractiveScene.jsx';

/**
 * Main React Entry Pint
 */
class App extends React.Component {
  render() {
    return (
      <div className="stage">

        <Router>
          <Route path="/about" render={() => {
            return (
              <AnimatedTyper debugMode={false} Message="Eat More Ranem Its Good For You!" />
            );
          }} />
        </Router>


      </div>
    );
  }
}


(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const reactStage = document.getElementById("root");
    ReactDOM.render(<App />, reactStage);
  })
})();