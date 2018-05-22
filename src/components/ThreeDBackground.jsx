import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import * as THREE from 'three';
class ThreeDBackground extends React.Component{
    constructor(props){
        super(props);
        this.setupThree = this.setupThree.bind(this);
        this.scene = {};    
    }

    setupThree(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.threeRenderer = new THREE.WebGLRenderer();
        this.threeRenderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.threeRenderer.domElement );

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        this.scene.add( cube );

        this.camera.position.z = 5;

        var animate = () => {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.1;
            cube.rotation.y += 0.1;

            this.threeRenderer.render(this.scene, this.camera);
        };

        animate();
    }

    /**
     * We will exit the ReactJS pipeline after this and instead rely on ThreeJS
     */
    componentDidMount(){
        this.setupThree();
    }


    /**
     * Most of the time we will bypass ReactJS for perfomance reasons and rely only on ThreeJS
     */
    render(){
        return (<canvas id="threejs-stage"/>)
    }

}

export default ThreeDBackground;