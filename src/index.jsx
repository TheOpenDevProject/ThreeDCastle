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
                    {hashref: "/", text: "Home", key: 1},
                    {hashref: "/my-work", text: "My Work", key: 2},
                    {hashref: "/ytwall", text: "My YouTube", key: 3},
                    {hashref: "/contact", text: "Contact Me", key: 4},
                    {hashref: "/about-me", text: "About Me", key: 5},
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