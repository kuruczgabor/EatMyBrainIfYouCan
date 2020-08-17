import MovingObject from "./moving_object";
import Bullet from "./bullet";
import Util from "./util";
import GameView from "./game_view";

// const HERO_RADIUS = 1;
const HERO_MAX_SPEED = 2;
// const HERO_MAX_IMPULSE = 2
const BULLET_SPEED = 15;

const HERO_IMAGE = new Image();
HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_000.png';

class Hero extends MovingObject {

    // constructor(game, pos, vel, radius, color, height, width, angle) {
    constructor(game, pos, vel, height, width, angle) {
        super(game, pos)
        // this.radius = HERO_RADIUS;
        this.vel = vel || [0, 0];
        // this.color = "#000000";
        this.image = HERO_IMAGE;
        // this.image = this.getImageWithAngle();
        this.height = 50;
        this.width = 50;
        this.angle = angle || 0;
        // this.angle = angle;
        // this.heroIdleAnimation.bind(this);
        this.heroIdleAnimation();
        // this.animateHero();
    }

    heroIdleAnimation() {
        setInterval(() => {
            let curFrameSrc = HERO_IMAGE.src;
            let curFrameNum = parseInt(curFrameSrc.slice(-7,-4))
            curFrameNum += 1
            if (curFrameNum === 8) curFrameNum = 0
            HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_00' + curFrameNum.toString() + '.png'
        }, 100);
    }

    // animateHero() {
    //     let that = this;
    //     debugger
    //     setInterval(function () {
    //         debugger
    //         heroIdleAnimation()
    //     }, 1000);
    // }

    // getImageWithAngle(mousePos = [0,0]) {
    //     const heroImage = new Image();
    //     heroImage.src = './assets/soldier/idle/Idle_gun_000.png'
    //     return heroImage
    // }

    draw(ctx) {

            document.addEventListener("mousemove", (e) => {
                // document.addEventListener("mousedown", (e) => {
                const mousePos = Util.findCursorCoords();
                const angleDeg = -Math.atan2(mousePos[0] - this.pos[0], mousePos[1] - this.pos[1]) * 180 / Math.PI;
                this.angle = angleDeg
            })

            ctx.clearRect(0, 0, ctx.width, ctx.height);
            ctx.save();
            ctx.translate(this.pos[0] + this.width / 2, this.pos[1] + this.height / 2);
            ctx.rotate((Math.PI / 180) * this.angle)
            ctx.drawImage(this.image, -(this.width / 2), -(this.height / 2), this.width, this.height);
            ctx.restore();

    };

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

export default Hero;
