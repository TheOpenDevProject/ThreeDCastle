import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import LandingPageScene from './LandingPageScene';
class ThreeDBackground extends React.Component{
    constructor(props){
        super(props);
        this.scene = new LandingPageScene({
            height: 400,
            width: 400
        });
    }


    /**
     * We will exit the ReactJS pipeline after this and instead rely on ThreeJS
     */
    componentDidMount(){
        this.scene.insertStage("three-stage");
        this.scene.loadObjectFromFile("Sample_Ship.obj");
        this.scene.render();
        
    }


    /** 
     * Most of the time we will bypass ReactJS for perfomance reasons and rely only on ThreeJS
     */
    render(){
        return (<section id="three-stage"/>);
    }

}

export default ThreeDBackground;