import MovingObject from "./moving_object"

const BULLET_IMAGE = new Image();
BULLET_IMAGE.src = "./assets/bullet/bullet_0001.png";
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class Bullet extends MovingObject {

    constructor(game, pos, vel) {
        super(game, pos, vel)
        this.image = BULLET_IMAGE;
        this.height = 20;
        this.width = 20;

        // this.isWrappable = false;
    }

    // move(timeDelta) {

    //     const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
    //         offsetX = this.vel[0] * velocityScale,
    //         offsetY = this.vel[1] * velocityScale;

    //     this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    //     if (this.game.isOutOfBounds(this.pos)) {
    //         if (this.isWrappable) {
    //             this.vel = [0, 0]
    //         } else {
    //             this.remove();
    //         }
    //     }
    // };

}

export default Bullet;