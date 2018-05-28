import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ChaosScene from './ChaosScene';
class InteractiveScene extends React.Component{
    
    constructor(props){
        super(props);
        this._chaosScene = new ChaosScene();
    }

    componentDidMount(){
        this._chaosScene.initScene();
    }

    render(){
        return (<div id="interactive-scene"/>);
    }

}

export default InteractiveScene;