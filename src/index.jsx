import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
//Custom React Components
import Home from "./components/pages/Home.jsx";
import ContactMe from "./components/pages/ContactMe.jsx";
/**
 * Main React Entry Pint
 */
class App extends React.Component {
  render() {
    return (
      <div className="stage">

        <Router>
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={ContactMe} />

          </Switch>
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