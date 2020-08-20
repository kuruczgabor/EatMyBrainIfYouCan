import MovingObject from "./moving_object"

const BULLET_IMAGE = new Image();
BULLET_IMAGE.src = "./assets/bullet/bullet_0001.png";

class Bullet extends MovingObject {

    constructor(game, pos, vel) {
        super(game, pos, vel)
        this.image = BULLET_IMAGE;
        this.height = 20;
        this.width = 20;

        // this.isWrappable = false;
    }

}

export default Bullet;