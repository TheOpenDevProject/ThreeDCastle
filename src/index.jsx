import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


(function(){
    document.addEventListener("DOMContentLoaded",() => {
        const reactStage = document.getElementById("react-stage");
        ReactDOM.render(<App/>, reactStage);
    })
    
})();