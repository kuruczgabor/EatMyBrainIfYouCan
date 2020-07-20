import MovingObject from "./moving_object";
import Bullet from "./bullet";
import Util from "./util";
import GameView from "./game_view";

const HERO_RADIUS = 1;
const HERO_MAX_SPEED = 2;
// const HERO_MAX_IMPULSE = 2
const BULLET_SPEED = 15;

const HERO_IMAGE = new Image();
HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_000.png'

class Hero extends MovingObject {

    constructor(game, pos, vel, radius, color, height, width, angle) {
        super(game, pos, angle)
        this.radius = HERO_RADIUS;
        this.vel = vel || [0, 0];
        this.color = "#000000";
        this.image = HERO_IMAGE;
        // this.image = this.getImageWithAngle();
        this.height = 50;
        this.width = 50;
        this.angle = angle;
        // this.angle = angle;
        
    }

    getImageWithAngle(mousePos = [0,0]) {

        const heroImage = new Image();
        heroImage.src = './assets/soldier/idle/Idle_gun_000.png'

        debugger

        

        // debugger


        return heroImage

    }

    fireBullet(mousePos) {

        const bulletDir = [mousePos[0] - this.pos[0], mousePos[1] - this.pos[1]];

        const bulletVel = Util.scale(
            Util.dir(bulletDir),
            BULLET_SPEED
        );

        const bullet = new Bullet(
            this.game, this.pos, bulletVel, this.radius
        );

        this.game.add(bullet);
    };

    power(impulse) {

        if (impulse[0] > 0 && this.vel[0] < HERO_MAX_SPEED) this.vel[0] += impulse[0]
        if (impulse[0] < 0 && this.vel[0] > -HERO_MAX_SPEED) this.vel[0] += impulse[0]

        if (impulse[1] > 0 && this.vel[1] < HERO_MAX_SPEED) this.vel[1] += impulse[1]
        if (impulse[1] < 0 && this.vel[1] > -HERO_MAX_SPEED) this.vel[1] += impulse[1]

    };

}

export default Hero
