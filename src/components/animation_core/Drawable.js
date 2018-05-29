import * as OBJLoader from "three-obj-loader";
import * as THREE from "three";
OBJLoader(THREE);
class Drawable {

    constructor() {
        this._loadedObject = {};
        this._objectLoader = new THREE.OBJLoader();
    }


    loadFromFile({
        fileName,
        textureName
    }) {
        const promise = new Promise((res, rej) => {
            this._objectLoader.load(fileName, done => {
                    done.traverse(child => {
                        if (child instanceof THREE.Mesh) {
                            //geometry
                            child.position.y = -60
                       
                            const texture = new THREE.TextureLoader().load(textureName);
                            texture.wrapS = THREE.RepeatWrapping;
                            texture.wrapT = THREE.RepeatWrapping;
                            texture.repeat.set(1, 1);
                            child.material.map = texture;
                        }
                    });
                },
                ldrState => {
                    console.log(`Object is ${ldrState.loaded / ldrState.total * 100}% Loaded`);
                },
                failed => {
                    console.log(`Drawable::loadFromFile::Error ${failed}`);
                }
            );

        });
        return promise;
    }


    /**
     * @description A function used for visual debugging.
     * Credit goes to https://threejs.org/docs/#api/objects/Mesh
     * Updated to be ES6xy
     */
    static getDebugMesh() {
        /* The Cube */

        //We create a boxGeometry with three parameters: width, height and depth
        const geometry = new THREE.BoxGeometry(1, 1, 1);

        //We create a texture for our cube, here it's only a red texture
        const texture = new THREE.MeshLambertMaterial({
            color: 0x00ff00
        });

        //We create the Mesh which contains our geometry (the cube) and its texture
        const cube = new THREE.Mesh(geometry, texture);

        return cube;
    }
}

export default Drawable;