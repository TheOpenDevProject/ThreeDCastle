import ThreeScene from "./ThreeScene";
import CSGOMap from "./csgomap";

class MainScene extends ThreeScene{
    constructor(){
        super({height: 800, width: 800});
        this.setBackgroundColor(0x000000);
        this.csmap = new CSGOMap(this.scene);
        
    }

}

export default MainScene;   