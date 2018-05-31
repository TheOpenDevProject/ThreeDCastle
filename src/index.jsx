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
import StaticMenuBar from "./components/StaticMenuBar.jsx";
/**
 * Main React Entry Pint
 */
class App extends React.Component {
  render() {
    return (
      <div className="stage">
        <div className="full-width-flex" id="home-container">
        <StaticMenuBar navLinks={[
                    {hashref: "/", text: "Home"},
                    {hashref: "/my-work", text: "My Work"},
                    {hashref: "/ytwall", text: "My YouTube"},
                    {hashref: "/contact", text: "Contact Me"},
                    {hashref: "/about-me", text: "About Me"},
                ]}/>

          <Router>
            <Switch>

              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={ContactMe} />

            </Switch>
          </Router>

        </div>
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