import React, { Component } from 'react'
import ReactDOM from 'react-dom';

//Custom React Components
import './components/AnimatedTyper.jsx';
import AnimatedTyper from './components/AnimatedTyper.jsx';

/**
 * Main React Entry Pint
 */
class App extends React.Component {
  render() {
    return (
      <div className="stage">
        <AnimatedTyper Message="Landing Message"/>
      </div>
    );
  }
}


(function(){
    document.addEventListener("DOMContentLoaded",() => {
        const reactStage = document.getElementById("root");
        ReactDOM.render(<App/>, reactStage);
    })
    
})();