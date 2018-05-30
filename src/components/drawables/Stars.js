import * as THREE from "three";
import Drawable from '../animation_core/Drawable';

class Stars extends Drawable {
    constructor() {
        super();


    }

    /**
     * 
     * @param {Int} nStars 
     */
    generateStarfield(nStars) {
        const generationComplete = new Promise((resolve, reject) => {
            const texture = new THREE.TextureLoader().load("starfield.png");
            const material = new THREE.PointsMaterial({
                size: 5,
                transparent: true,
                opacity: 1,
                blending: "AdditiveBlending",
                map: texture
            });
            let field = undefined;
            this.createVerticiesCloud().then(verts => {
                field = verts;
            })
            let particles = new THREE.Points(field,material);

        
        
            resolve(particles);
        });

        return generationComplete;

    }

    createVerticiesCloud() {

        const vertexCgPromise = new Promise((resolved, rejected) => {

            let geo = new THREE.Geometry();

            for (let i = 0; i < 10000; i++) {
                let vertex = new THREE.Vector3();
                vertex.x = Math.random() * 1000 - 500;
                vertex.y = Math.random() * 1000 - 500;
                vertex.z = Math.random() * 1000 - 500;
                geo.vertices.push(vertex);
            }
            resolved(geo);
        });

        return vertexCgPromise;

    }

}

export default Stars;