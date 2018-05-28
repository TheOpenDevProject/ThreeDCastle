import
Drawable
from './Drawable';

class CSGOMap extends Drawable {
    constructor(sceneRef) {
        super();
        this.sceneRef = sceneRef;
        this.loadFromFile("models/de_airstrip.obj").then(res => {
            this.sceneRef.render(this.draw());
        });
    }



    animate() {

    }

}

export default CSGOMap;