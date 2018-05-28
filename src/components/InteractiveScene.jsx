import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ChaosScene from './ChaosScene';

/**
 * Remove after initial development
 */

import Drawable from './animation_core/Drawable';
class InteractiveScene extends React.Component {

    constructor(props) {
        super(props);
        this._chaosScene = new ChaosScene();
    }

    componentDidMount() {
        this._chaosScene.initScene().then(scene => {
            /**
             * Other stuff
             */
        });
        this._chaosScene.insertObject(Drawable.getDebugMesh());
        this._chaosScene.addSceneLighting({
            color: 0xffffff,
            intensity: 1
        })
        this._chaosScene.pollEvents();
    }

    render() {
        return (<div id="interactive-scene" />);
    }

}

export default InteractiveScene;