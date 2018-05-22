import * as THREE from 'three';

export default class ThreeScene {
    constructor(size){
        this.renderQueue = [];
        this.scene = new THREE.Scene();
        this.size = size;
        this.camera = new THREE.PerspectiveCamera( 75, this.size.height / this.size.height, 0.1, 1000 );
        this.threeRenderer = new THREE.WebGLRenderer();
    }

    setSize({w = 100, h = 100}){
        this.threeRenderer.setSize(w,h);
    }

    setCameraPos({x = 0, y = 0, z = 5}){
        this.camera.position.set(x,y,z);
    }

    render(updateCallback = () =>{}){
        requestAnimationFrame(updateCallback);
        this.threeRenderer.render(this.scene,this.camera);
    }

    addObjectToScene(meshObject){
        this.scene.add(meshObject);
    }

    insertStage(parentId){
        const section = document.getElementById(parentId);
        section.appendChild(this.threeRenderer.domElement)
    }

}