import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';

class Drawable {
    constructor() {
        this._sceneGroup = {};
        this.objLoader = new THREE.OBJLoader();
    }

    /**
     * @param {String} path 
     * @param {int} {rx,ry} 
     * @param {Callback} onError 
     */
    loadTextureFromFile(path, {
        rx,
        ry
    }, onError) {
        try {
            const texture = new THREE.TextureLoader().load(path);
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(rx, ry);
            return texture;
        } catch (e) {
            onError(e);
        }
    }

    bindTexture(objName, texture, onError) {
        try {
            this._sceneGroup.traverse(c_object => {
                if (c_object instanceof THREE.Mesh) {
                    if (c_object.name === objName) {
                        c_object.material.map = texture;
                    }
                }
            })
        } catch (e) {
            onError(e);
        }
    }

    /**
     * @description returns the drawable items in the Object Model.
     * @example myScene.add(MyDrawable.draw());
     */
    draw() {
        return this._sceneGroup;
    }

    /**
     * @param {String} path
     * @description Load our OBJ model from a file
     */
    loadFromFile(path) {
        const deferedLoader = new Promise((resolve, reject) => {
            this.objLoader.load(path,
                v => {
                    this._sceneGroup = v;
                },
                ldrState => {
                    console.log(ldrState.loaded / ldrState.total * 100 + "%");
                },
                no => {
                    console.log(no.error);
                }
            )
        })
        return deferedLoader;
    }

    animate() {
        throw new Error("animate() NotImplementedException");
    }
}

export default Drawable;