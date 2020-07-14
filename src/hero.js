import MovingObject from "./moving_object";

const HERO_RADIUS = 20;

class Hero extends MovingObject {

    constructor(game, pos, vel, radius, color) {
        super(game, pos);
        this.vel = vel || [0,0];
        this.radius = HERO_RADIUS 
        this.color = color
    }

};

export default Hero;