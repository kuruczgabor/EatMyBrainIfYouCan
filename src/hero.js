import MovingObject from "./moving_object";
import Bullet from "./bullet";
import Util from "./util";

const HERO_RADIUS = 15;
const HERO_MAX_SPEED = 5
const BULLET_SPEED = 15;

class Hero extends MovingObject {

    constructor(game, pos, vel, radius, color) {
        super(game, pos)
        this.radius = HERO_RADIUS;
        this.vel = vel || [0, 0];
        this.color = "#000000"
    }

fireBullet() {
    const norm = Util.norm(this.vel);

    if (norm === 0) {
        // Can't fire unless moving.
        return;
    }

    const relVel = Util.scale(
        Util.dir(this.vel),
        BULLET_SPEED
    );

    const bulletVel = [
        relVel[0] + this.vel[0], relVel[1] + this.vel[1]
    ];

    const bullet = new Bullet(
        this.game, this.pos, bulletVel, this.radius, this.color
    );

    this.game.add(bullet);
};

power(impulse) {
    if (this.vel[0] + impulse[0] >= -HERO_MAX_SPEED && 
        this.vel[0] + impulse[0] < HERO_MAX_SPEED) this.vel[0] += impulse[0];
    
    if (this.vel[1] + impulse[1] >= -HERO_MAX_SPEED && 
        this.vel[1] + impulse[1] < HERO_MAX_SPEED) this.vel[1] += impulse[1];
};

relocate() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
};

}

export default Hero
