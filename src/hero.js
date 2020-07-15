import MovingObject from "./moving_object";
import Bullet from "./bullet";
import Util from "./util";

const HERO_RADIUS = 15;
const BULLET_SPEED = 15;

function randomColor() {
    const hexDigits = "0123456789ABCDEF";

    let color = "#";
    for (let i = 0; i < 3; i++) {
        color += hexDigits[Math.floor((Math.random() * 16))];
    }

    return color;
}

class Hero extends MovingObject {

    constructor(game, pos, vel, radius, color) {
        super(game, pos)
        this.radius = HERO_RADIUS;
        this.vel = vel || [0, 0];
        this.color = color || randomColor();
        // this.pos = pos || [200, 200];
        // this.game = game
        // this.fireBullet.bind(this)
    }



fireBullet() {
    const norm = Util.norm(this.vel);

    if (norm === 0) {
        // Can't fire unless moving.
        return;
    }

    debugger

    const relVel = Util.scale(
        Util.dir(this.vel),
        BULLET_SPEED
    );

    debugger

    const bulletVel = [
        relVel[0] + this.vel[0], relVel[1] + this.vel[1]
    ];

    debugger

    // const bullet = new Bullet({
    //     pos: this.pos,
    //     vel: bulletVel,
    //     color: this.color,
    //     game: this.game
    // });

    const bullet = new Bullet(this.game, this.pos, this.vel, this.radius, this.color);
    // const bullet = new Bullet(game, pos, vel, radius, color);


    debugger

    this.game.add(bullet);
};

power(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
};

relocate() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
};

}

export default Hero
