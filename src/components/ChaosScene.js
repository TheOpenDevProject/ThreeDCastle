import Scene from './animation_core/Scene';

class ChaosScene extends Scene{
    constructor(){
        super({
            parentId: "interactive-scene",
            width: 800,
            height: 800
        });
    }
}

export default ChaosScene;