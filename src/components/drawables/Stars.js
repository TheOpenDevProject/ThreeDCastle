import * as THREE from "three";
import Drawable from '../animation_core/Drawable';

class Stars extends Drawable {
    constructor() {
        super();


    }

    /**
     * @param {Int} nStars 
     */
    generateStarfield(nStars) {
        const generationComplete = new Promise((resolve, reject) => {
            const texture = new THREE.TextureLoader().load("starfield.png");
            const material = new THREE.PointsMaterial({
                size: 1,
                transparent: true,
                opacity: 1,
                blending: "AdditiveBlending",
                map: texture,
                color: 0xffffff
            });
            let field = undefined;
            this.createVerticiesCloud().then(verts => {
                field = verts;
                let particles = new THREE.Points(field, material);

                const lineGroup = this.generateConnections(particles, 100);
                resolve({
                    particles,
                    lineGroup
                });
            })
            0
        });

        return generationComplete;

    }

    /**
     * @description This is a fun little experiment that generates connections between the stars. It's highly unoptimized and generating many connections
     * requires a fairly decent GPU. Needs to be converted into a LineBuffer
     * @param {THREE.Geometry} particles 
     * @param {Int} nConnections 
     */
    generateConnections(particles, nConnections) {


        const lineGroup = new THREE.Group();

        //Go through and capture XYZ(1+N)
        for (let i = 0; i < nConnections; i++) {
            const lineMaterial = new THREE.LineBasicMaterial({
                color: "#" + Math.floor(Math.random() * 16777215).toString(16),
                linewidth: 0.5
            });
            let geo = new THREE.Geometry();
            let bmpIttr = i + 1;
            geo.vertices.push(new THREE.Vector3(particles.geometry.vertices[i].x, particles.geometry.vertices[i].y, particles.geometry.vertices[i].z));
            geo.vertices.push(new THREE.Vector3(particles.geometry.vertices.las, particles.geometry.vertices[bmpIttr].y, particles.geometry.vertices[bmpIttr].z));

            const line = new THREE.Line(geo, lineMaterial);
            lineGroup.add(line);
        }
        return lineGroup;
    }

    createVerticiesCloud() {

        const vertexCgPromise = new Promise((resolved, rejected) => {

            let geo = new THREE.Geometry();
            0
            for (let i = 0; i < 400000; i++) {
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