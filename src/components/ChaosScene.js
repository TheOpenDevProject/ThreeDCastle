import Scene from "./animation_core/Scene";
import Drawable from "./animation_core/Drawable";

class ChaosScene extends Scene {
    constructor() {
        super({
            parentId: "interactive-scene",
            width: 800,
            height: 800,
            defaultBackgroundColor: 0x000,
            enableTransparency: true
        });

        const test = new Drawable();

        test.loadFromFileWithMTL({
            fileName: "planet/Mars_2K.obj",
            textureName: "Mars_2K.obj",
            basePath: "planet/"

        }).then(loadedDrawable => {
            this.insertObject(loadedDrawable);
            //Once our scene objects are loaded we can add some environmental changes :D
            this.addSceneLighting({
                color: 0xffffff,
                intensity: 1.3
            });

        }).catch(err => {
            console.log(err);
        })


    }

}

export default ChaosScene;