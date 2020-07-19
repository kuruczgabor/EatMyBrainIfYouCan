const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class MovingObject {

    constructor(game, pos, vel, radius, color, image) {
        this.game = game;
        this.pos = pos;
        this.vel = vel;
        this.color = color;
        this.radius = radius;
        // this.color = color;
        this.isWrappable = true;
        this.image = image
    }

    collideWith(otherObject) {
        // default do nothing
    };

    draw(ctx) {
        // ctx.fillStyle = this.color;

        // ctx.beginPath();
        // ctx.arc(
        //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        // );
        // ctx.fill();


        ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
        // debugger
        // console.log('hello')
    };

    isCollidedWith(otherObject) {
        // const centerDist = Util.dist(this.pos, otherObject.pos);
        // return centerDist < (this.radius + otherObject.radius);
    };

    move(timeDelta) {

        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;

        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

        if (this.game.isOutOfBounds(this.pos)) {
            if (this.isWrappable) {
                // this.pos = this.game.wrap(this.pos);
                this.vel = [0,0]
            } else {
                this.remove();
            }
        }
    };

    remove() {
        this.game.remove(this);
    };

}

export default MovingObject;