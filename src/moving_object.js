import Util from "./util";

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class MovingObject {

    constructor(game, pos, vel, height, width, image, angle) {
        this.game = game;
        this.pos = pos;
        this.vel = vel;
        this.height = height;
        this.width = width;
        this.image = image;
        this.angle = angle;
        this.isWrappable = true;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
    }

    collideWith() {

    }

    isCollidedWith(otherObject) {
        const centerDistance = Util.dist(this.pos, otherObject.pos);
        return centerDistance < (this.width / 2 + otherObject.width / 2);
    }

    move(timeDelta) {
        const map = this.game.map.mapPlan

        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;

        const nextPos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

        const curTileX = [Math.floor(this.pos[0] / 25)];
        const curTileY = [Math.floor(this.pos[1] / 25)];
        const curTile = map[curTileY][curTileX];
        const nextTileX = [Math.floor(nextPos[0] / 25)];
        const nextTileY = [Math.floor(nextPos[1] / 25)];
        const nextTile = map[nextTileY][nextTileX];

        if (nextTile === 10) {
            this.pos = nextPos
        } else {
            this.pos = this.pos
        }

        if (this.game.isOutOfBounds(this.pos)) this.remove();
    }

    remove() {
        this.game.remove(this);
    };

}

export default MovingObject;