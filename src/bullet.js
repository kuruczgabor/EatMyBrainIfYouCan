import MovingObject from "./moving_object"

const BULLET_IMAGE = new Image();
BULLET_IMAGE.src = "./assets/bullet/bullet_0001.png";
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class Bullet extends MovingObject {

    constructor(game, pos, vel) {
        super(game, pos, vel)
        this.game = game;
        this.pos = pos;
        this.vel = vel;
        this.image = BULLET_IMAGE;
        this.height = 20;
        this.width = 20;
    }

    move(timeDelta) {

        const map = this.game.map.mapPlan

        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;

        const nextPos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
        
        const nextTileX = [Math.floor(nextPos[0] / 25)];
        const nextTileY = [Math.floor(nextPos[1] / 25)];
        let nextTile = 0;
        if (nextTileX > -1 && nextTileX < 49 && nextTileY > -1 && nextTileY < 24) {
            nextTile = map[nextTileY][nextTileX];
        }
        
        const shootableTiles = [10, 11, 12, 13, 14, 15, 16, 17, 18, 40, 20, 21, 22, 23, 24, 25, 26, 27, 28]
        // const shootableTiles = [10]

        if (shootableTiles.includes(nextTile)) {
            this.pos = nextPos
        } else {
            this.remove()
        }

        if (this.game.isOutOfBounds(this.pos)) {
            this.remove();
        }
    }

}

export default Bullet;