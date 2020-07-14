const NORMAL_FRAME_TIME_DELTA = 1000/60;


class MovingObject {

    constructor(game, pos, vel, radius, color) {
        this.game = game;
        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        );
        ctx.fill();
    }

    move() {
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;
            
        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
    }

};

export default MovingObject;

