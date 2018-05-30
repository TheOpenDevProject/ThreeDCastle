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
class BaseScene {
    constructor({
        parentId = "body",
        width = 800,
        height = 800,
        antialias = true,
        enableTransparency = true,
        defaultBackgroundColor = 0x000000,
        enableOrbitControls = true
    }) {
        /**
         * Default Scene Settings.
         */
        this._parentId = parentId;
        this._sceneWidth = width;
        this._sceneHeight = height;
        this._enableAntialias = antialias;
        this._enableTransparency = enableTransparency;
        this._defaultBackgroundColor = defaultBackgroundColor;
        this._enableOrbitControls = enableOrbitControls;
        /**
         * ThreeJS Management Object (Insert better name here)
         */
        this._tjsCore = {
            TJS_CAMERA: {},
            TJS_RENDERER: {},
            TJS_SCENE: {},
            TJS_CONTROLS: {},
            TJS_RENDER_QUEUE: []
        };
    }

    addSceneLighting({
        color,
        intensity
    }) {
        const ambientLight = new THREE.AmbientLight(color);
        ambientLight.intensity = intensity;
        this._tjsCore.TJS_SCENE.add(ambientLight);
    }

    /**
     * @description Initialise the ThreeJS renderer's core properties.
     */
    _initRenderer() {
        this._tjsCore.TJS_RENDERER = new THREE.WebGLRenderer({
            alpha: this._enableTransparency,
            antialias: this._enableAntialias
        });
        this._tjsCore.TJS_RENDERER.setSize(this._sceneWidth, this._sceneHeight);
    }

    _initCamera() {
        this._tjsCore.TJS_CAMERA = new THREE.PerspectiveCamera(75, this._sceneWidth / this._sceneHeight, 0.1, 2000);
        this._tjsCore.TJS_CAMERA.position.x = 4;
        this._tjsCore.TJS_CAMERA.position.y = 5;
        this._tjsCore.TJS_CAMERA.position.z = 0;
    }

    _initScene() {
        this._tjsCore.TJS_SCENE = new THREE.Scene();
    }

    _initBackground() {
        if (this._enableTransparency) {
            this._tjsCore.TJS_RENDERER.setClearColor(0x000000,0);
        } else {
            this._tjsCore.TJS_RENDERER.setClearColor(this._defaultBackgroundColor);
        }

    }

    /**
     * Insert an object to be rendered into our queue.
     */
    insertObject(drawableObject) {
        if (drawableObject instanceof THREE.Object3D) {
            this._tjsCore.TJS_RENDER_QUEUE.push(drawableObject);
            this._tjsCore.TJS_SCENE.add(drawableObject);
        } else {
            throw Error(`Invalid3DObject Exception => ${drawableObject}`);
        }
    }
    /**
     * Do all the trickery and binding to setup WebGL and DOM related stuffz
     */
    initScene() {
        const sceneCreated = new Promise((res, rej) => {
            //Setup our renderer and camera
            this._initRenderer();
            this._initCamera();
            this._initScene();
            this._initControls();
            this._initBackground();
            //Insert ThreeJS's DOM Node
            if (this._parentId !== null) {
                const parentElement = document.getElementById(this._parentId);
                parentElement.appendChild(this._tjsCore.TJS_RENDERER.domElement);
                res()
            } else {
                rej("Failed to init scene");
            }
        })
        return sceneCreated;
    }

    rotateCamera(speed){
        //Ungodly starfield zoom hack xD. Will make this more generic soon        
        if(this._tjsCore.TJS_CAMERA.position.x < 528){
            this._tjsCore.TJS_CAMERA.position.x += 0.1;
        }
        
    }

    _initControls() {
        if (this._enableOrbitControls === true) {
            this._tjsCore.TJS_CONTROLS = new OrbitControls(this._tjsCore.TJS_CAMERA);
        }
    }

    /**
     * @description This method invokes the ThreeJS renderer but IS NOT THE EVENT LOOP
     */
    drawScene() {
        this._tjsCore.TJS_RENDERER.render(this._tjsCore.TJS_SCENE, this._tjsCore.TJS_CAMERA);
    }

    /**
     * @description This is our event loop, this function should be called when the scene is ready to be redrawn.
     * It's important to note that this function polls as fast as possible and currently I have no need to provide an FPS timer.
     */
    pollEvents() {
        const genRecFnc = () => {
            requestAnimationFrame(tick => {
                
                this.drawScene(); //Call the renderer each tick.
                this.rotateCamera();
                this.updateControls();
                genRecFnc();
            });
        }
        genRecFnc();
        //Debug Mode
        
    }

    updateControls() {
        if (this._tjsCore.TJS_CONTROLS instanceof OrbitControls) {

            this._tjsCore.TJS_CONTROLS.update();

        }
    }

    /**
     * @returns - {TJSCoreObject}
     */
    _getRenderable() {
        if (this._tjsCore.TJS_RENDERER instanceof THREE.WebGLRenderer && this._tjsCore.TJS_CAMERA instanceof THREE.PerspectiveCamera) {
            return this._tjsCore;
        } else {
            throw Error("Renderer or Camera remains uninitialized");
        }
    }
}

export default BaseScene;