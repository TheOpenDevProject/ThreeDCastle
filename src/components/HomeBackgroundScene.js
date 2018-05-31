import BaseScene from "./animation_core/Scene";
import Stars from "./drawables/Stars";
import Drawable from "./animation_core/Drawable";
class HomeBackgroundScene extends BaseScene {
    constructor() {
        super({
            parentId: "space-age",
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            defaultBackgroundColor: 0x000,
            enableTransparency: false
        });

        
    }

    doSetup(){
        const x = new Stars().generateStarfield().then(stars => {
            console.log(stars);
            this.insertObject(stars.particles);
        });
        this.addSceneLighting({color: 0xffffff,intensity: 2});
    }
}


export default HomeBackgroundScene;