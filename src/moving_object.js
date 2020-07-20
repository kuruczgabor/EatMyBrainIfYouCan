import Hero from "./hero";
// import Zombie from "./zombie";
import GameView from "./game_view";
import Util from "./util";
// import Zombie from "./zombie";

// const HERO_SHOOTING_ANGLE;
// debugger

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
// const ANGLE = GameView.findCursorCoords();
// debugger

class MovingObject {

    constructor(game, pos, vel, radius, color, image, angle) {
        this.game = game;
        this.pos = pos;
        this.vel = vel;
        this.color = color;
        this.radius = radius;
        // this.color = color;
        this.isWrappable = true;
        this.image = image;
        this.angle = angle || 0
    }

    collideWith(otherObject) {
        // default do nothing
    };

    draw(ctx, mouseCoor) {
        // ctx.fillStyle = this.color;

        // ctx.beginPath();
        // ctx.arc(
        //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        // );
        // ctx.fill();

        // debugger

        // debugger



        
        // debugger

        // console.log(angle)

        // debugger

        if (this instanceof Hero) {

            document.addEventListener("mousemove", (e) => {
                const mousePos = Util.findCursorCoords();
                const angleDeg = -Math.atan2(mousePos[0] - this.pos[0], mousePos[1] - this.pos[1]) * 180 / Math.PI;
                this.angle = angleDeg
            })
        
            // ctx.clearRect(0, 0, ctx.width, ctx.height);
            ctx.save();
            ctx.translate(this.pos[0], this.pos[1]);
            ctx.rotate((Math.PI / 180) * this.angle)
            ctx.drawImage(this.image, -(this.image.width / 30), -(this.image.height / 30), this.width, this.height);
            ctx.restore();  

        } else {
            ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
        }
        
        // if (this instanceof Zombie) {
            
        //     debugger

        //     console.log('hello')
        // }



   





        

        // let test = ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
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