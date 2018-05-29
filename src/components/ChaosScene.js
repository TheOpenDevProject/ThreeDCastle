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

        test.loadFromFile({
            fileName: "models/de_airstrip.obj",
            textureName: "models/de_airstrip.mtl"
        }).then(retVal => {
            this.insertObject(retVal);
        }).catch(err => {
            console.log(err);
        });

    }

}

export default ChaosScene;