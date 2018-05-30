import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import HomeBackgroundScene from "./HomeBackgroundScene";

class HomeBackground extends React.Component{
    constructor(props){
        super();
        this._scene = new HomeBackgroundScene();
    }

    componentDidMount(){
        this._scene.initScene().then(() => {
            this._scene.doSetup();
            this._scene.pollEvents();
        });

        
    }

    render(){
        return(<div id="space-age"/>);
    }
}


export default HomeBackground;