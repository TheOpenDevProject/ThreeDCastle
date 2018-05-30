import Scene from "./animation_core/Scene";
import Drawable from "./animation_core/Drawable";

class ChaosScene extends Scene {
    constructor() {
        super({
            parentId: "interactive-scene",
            width: 800,
            height: 800,
            defaultBackgroundColor: 0x000
        });

        const test = new Drawable();

        test.loadFromFileWithMTL({
            fileName: "ferrari/ferrari-f1-race-car.obj",
            textureName: "ferrari-f1-race-car.mtl",
            basePath: "ferrari/"
            
        }).then(loadedDrawable => {
            this.insertObject(loadedDrawable);
        }).catch(err => {
            console.log(err);
        })

    }

}

export default ChaosScene;