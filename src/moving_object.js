import Hero from "./hero";
// import Zombie from "./zombie";

import Util from "./util";

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class MovingObject {

    // constructor(game, pos, vel, color, radius, image, angle) {
    constructor(game, pos, vel, height, width, image, angle) {
        this.game = game;
        this.pos = pos;
        this.vel = vel;
        this.height = height;
        this.width = width;
        // this.color = color;
        // this.radius = radius;
        this.image = image;
        // this.angle = angle || 0;
        this.angle = angle;
        this.isWrappable = true;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
    }

    // draw(ctx) {

    //     if (this instanceof Hero) {

    //         document.addEventListener("mousemove", (e) => {
    //         // document.addEventListener("mousedown", (e) => {
    //             const mousePos = Util.findCursorCoords();
    //             const angleDeg = -Math.atan2(mousePos[0] - this.pos[0], mousePos[1] - this.pos[1]) * 180 / Math.PI;
    //             this.angle = angleDeg
    //         })
        
    //         ctx.clearRect(0, 0, ctx.width, ctx.height);
    //         ctx.save();
    //         ctx.translate(this.pos[0] + this.width / 2, this.pos[1] + this.height / 2);
    //         ctx.rotate((Math.PI / 180) * this.angle)
    //         ctx.drawImage(this.image, -(this.width / 2), -(this.height / 2), this.width, this.height);
    //         ctx.restore();  

    //     } 
    //     // else if (this instanceof Zombie) {
    //     //     // debugger
    //     //     // console.log('hello')
    //     // } 
    //     else {
    //         ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
    //     }
        
    // };

    move(timeDelta) {

        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;

        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

        if (this.game.isOutOfBounds(this.pos)) {
            if (this.isWrappable) {
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