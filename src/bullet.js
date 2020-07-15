import MovingObject from "./moving_object"

const BULLET_RADIUS = 2;

class Bullet extends MovingObject {

    constructor(game, pos, vel, color, radius) {
        super(game, pos, vel, color, radius)
        this.radius = BULLET_RADIUS
        this.isWrappable = false;
    }

}

export default Bullet;