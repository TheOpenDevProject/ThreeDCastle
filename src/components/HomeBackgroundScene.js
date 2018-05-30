import BaseScene from "./animation_core/Scene";
import Stars from "./drawables/Stars";
class HomeBackgroundScene extends BaseScene {
    constructor() {
        super({
            parentId: "space-age",
            width: window.innerWidth,
            height: window.innerHeight,
            defaultBackgroundColor: 0x000,
            enableTransparency: false
        });

        const starField = new Stars();

        starField.generateStarfield().then(stars => {
            this.insertObject(stars);
        });
    }
}


export default HomeBackgroundScene;