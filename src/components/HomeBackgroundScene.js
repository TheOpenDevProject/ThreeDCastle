import BaseScene from "./animation_core/Scene";
import Stars from "./drawables/Stars";
import Drawable from "./animation_core/Drawable";
class HomeBackgroundScene extends BaseScene {
    constructor() {
        super({
            parentId: "space-age",
            width: window.innerWidth,
            height: window.innerHeight,
            defaultBackgroundColor: 0x000,
            enableTransparency: false
        });

        
    }

    doSetup(){
        this.insertObject(Drawable.getDebugMesh());
        const x = new Stars().generateStarfield().then(stars => {
            this.insertObject(stars);
        });
        this.addSceneLighting({color: 0xffffff,intensity: 1});
    }
}


export default HomeBackgroundScene;