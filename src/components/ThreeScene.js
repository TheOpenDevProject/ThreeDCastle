import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
import OrbitControls from 'orbit-controls-es6';
OBJLoader(THREE);
export default class ThreeScene {
    constructor(size) {
        this.renderQueue = [];
        this.scene = new THREE.Scene();
        this.size = size;
        this.camera = new THREE.PerspectiveCamera(75, this.size.height / this.size.height, 0.1, 3000);
        this.threeRenderer = new THREE.WebGLRenderer({alpha: false, antialias:true});
        this.objLoader = new THREE.OBJLoader();
        this.controls = new OrbitControls(this.camera);

        this.setSize();
        this.setCameraPos({
            x: 0,
            y: 0,
            z: 600
        });
        this.setBackgroundColor(0x000000);
       
        console.log(size);
        window.scene = this.scene;
        //More test code
        this.texture = new THREE.TextureLoader().load("rs.jpg");
        this.texture.wrapS = THREE.RepeatWrapping;
        this.texture.wrapT = THREE.RepeatWrapping;
        this.texture.repeat.set(1, 1);
    }
    
    /**
     * 
     * @param {HexColor} color
     * @param {Float} intensity 
     */
    insertSceneLight({color, intensity}){
        const ambientLight = new THREE.AmbientLight(color);
        ambientLight.intensity = intensity;
        this.scene.add(ambientLight);
    }

    /**
     * 
     * @param {Object3D} obj 
     * @param {Texture} texture
     */
    loadAndBindTexture(obj,texture){
        if(obj instanceof THREE.Mesh){
            obj.material.map = texture;
        }
    }

    /**
     * 
     * @param {String} path 
     * @param {String} texturePath
     */
    loadObjectFromFile(path,texturePath) {
        this.objLoader.load(path,
            v => {
                v.traverse( (child) => {
                    if (child instanceof THREE.Mesh) {
                        child.material.map = this.texture;
                    }
                });
                this.scene.add(v);
                this.scene.add(light);
            },
            ldrState => {
                console.log(ldrState.loaded / ldrState.total * 100 + "%");
            },
            no => {
                console.log(no.error);
            }
        )
    }

    setSize() {
        this.threeRenderer.setSize(800, 800);
    }

    setCameraPos({
        x = 0,
        y = 0,
        z = 0
    }) {
        this.camera.position.set(x, y, z);
    }

    setBackgroundColor(hexCode) {
        this.threeRenderer.setClearColor(0x444444,0);
    }

    render(updateCallback = () => {}) {
        const x = () => {
            requestAnimationFrame(f => {
               // this.camera.position.x +=0.1;
               // this.camera.position.y +=0.1;
                this.controls.update();
                this.threeRenderer.render(this.scene, this.camera);
                x();
            });
        }

        x();
    }

    addObjectToScene(meshObject) {
        this.scene.add(meshObject);
    }

    insertStage(parentId) {
        const section = document.getElementById(parentId);
        section.appendChild(this.threeRenderer.domElement)
    }

}