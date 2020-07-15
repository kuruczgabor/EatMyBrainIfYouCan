import MovingObject from "./moving_object"

const BULLET_RADIUS = 2;

class Bullet extends MovingObject {

    constructor(game, pos, vel, radius, color) {
        super(game, pos, vel, radius, color)
        this.isWrappable = false;
    }

}

export default Bullet;