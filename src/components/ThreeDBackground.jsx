import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import MainScene from './MainScene';
class ThreeDBackground extends React.Component{
    constructor(props){
        super(props);
        this.mScene = new MainScene();
    }


    /**
     * We will exit the ReactJS pipeline after this and instead rely on ThreeJS
     */
    componentDidMount(){
        this.mScene.insertStage("three-stage");
        console.log(this.mScene.getDebugInfo());
        this.mScene.render(() => {
            console.log("Scene Should Be Rendering");
        });
    }


    /** 
     * Most of the time we will bypass ReactJS for perfomance reasons and rely only on ThreeJS
     */
    render(){
        return (<section id="three-stage"/>);
    }

}

export default ThreeDBackground;