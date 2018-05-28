import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
import OrbitControls from 'orbit-controls-es6';

/**
 * IMPORTANT NOTE DESU YO:
 * We use the following management pattern.
 * Scenes Hold The Following Responsiblities:
 *  Canvas DOM Management
 *  Rendering To The Canvas
 *  Camera Management
 *  Mesh Management Queues
 */
class BaseScene{
    constructor({parentId = "body", width = 800, height = 800, antialias = true, enableTransparency = false, defaultBackgroundColor = 0x000000}){
        /**
         * Default Scene Settings.
         */
        this._parentId = parentId;
        this._sceneWidth = width;
        this._sceneHeight = height;
        this._enableAntialias = antialias;
        this._enableTransparency = enableTransparency;
        this._defaultBackgroundColor = defaultBackgroundColor;
        /**
         * ThreeJS Management Object (Insert better name here)
         */
        this._tjsCore = {TJS_CAMERA : {}, TJS_RENDERER: {}};
    }

    _initRenderer(){
        this._tjsCore.TJS_RENDERER = new THREE.WebGLRenderer({alpha: this._enableTransparency, antialias: this._enableAntialias});
    }

    _initCamera(){
        this._tjsCore.TJS_CAMERA = new THREE.PerspectiveCamera(75, this._sceneWidth / this._sceneHeight, 0.1, 3000);
    }

    /**
     * Do all the trickery and binding to setup WebGL and DOM related stuffz
     */
    initScene(){
        //Setup our renderer and camera
        this._initRenderer();
        this._initCamera();

        //Insert ThreeJS's DOM Node
        if(this._parentId !== null){
            const parentElement = document.getElementById(this._parentId);
            parentElement.appendChild(this._tjsCore.TJS_RENDERER.domElement);
        }else{
            throw Error("Something went very wrong to get to this point...");
        }
        
    }
}

export default BaseScene;