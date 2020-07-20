import MovingObject from "./moving_object"

const BULLET_RADIUS = 20;

const BULLET_IMAGE = new Image();
BULLET_IMAGE.src = "./assets/bullet/bullet_0001.png";

class Bullet extends MovingObject {

    constructor(game, pos, vel, radius, color, height, width) {
        super(game, pos, vel, radius)
        this.image = BULLET_IMAGE;
        this.height = 20;
        this.width = 20;
        // this.color = "#000000";
        this.radius = BULLET_RADIUS;
        this.isWrappable = false;
    }

}

export default Bullet;