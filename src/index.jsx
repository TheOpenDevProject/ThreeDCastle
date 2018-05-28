import React, { Component } from 'react'
import ReactDOM from 'react-dom';

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
        <AnimatedTyper Message="Eat More Ramen, It's Good For You!."/>
        <InteractiveScene/>
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