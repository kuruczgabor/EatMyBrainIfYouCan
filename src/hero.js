import MovingObject from "./moving_object";
import Bullet from "./bullet";
import Util from "./util";
import Zombie from "./zombie";

const HERO_MAX_SPEED = 2;
const BULLET_SPEED = 15;
const HERO_IMAGE = new Image();
HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_000.png';

class Hero extends MovingObject {

    constructor(game) {
        super(game)
        this.pos = [150, 150];
        this.height = 50;
        this.width = 50;
        this.angle = 0;
        this.vel = [0, 0];

        this.image = HERO_IMAGE;
        this.heroAnim = 'idle';
        this.frameCounter = 0;

        this.idleFrameChanger = 8;
        this.walkFrameChanger = 8;
        this.shootFrameChanger = 8;
    }

    heroAnimate() {
        if (this.heroAnim === "idle") {
            this.heroIdleAnim()
        } else if (this.heroAnim === "walk") {
            this.heroWalkAnim()
        } else if (this.heroAnim === "shoot") {
            this.heroShootAnim()
        } else if (this.heroAnim === "die") {
            this.heroDieAnim()
        }
        this.frameCounter++
        if (this.frameCounter > 10) this.frameCounter = 0
    }

    heroIdleAnim() {
        if (this.frameCounter === this.idleFrameChanger) {
            if (HERO_IMAGE.src.split('/')[9] !== 'idle') HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_000.png'
            let curFrameSrc = HERO_IMAGE.src;
            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
            curFrameNum += 1
            if (curFrameNum === 8) curFrameNum = 0
            HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_00' + curFrameNum.toString() + '.png'
            this.frameCounter = 0
        }
    }

    heroWalkAnim() {
        if (this.frameCounter === this.walkFrameChanger) {
            if (HERO_IMAGE.src.split('/')[9] !== 'walk') HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_000.png'
            let curFrameSrc = HERO_IMAGE.src;
            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
            curFrameNum += 1
            if (curFrameNum === 6) curFrameNum = 0
            HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_00' + curFrameNum.toString() + '.png'
            this.frameCounter = 0
        }
    }

    heroShootAnim() {
        if (this.frameCounter === this.shootFrameChanger) {
            if (HERO_IMAGE.src.split('/')[9] !== 'shoot') HERO_IMAGE.src = './assets/soldier/shoot/Gun_Shot_000.png'
            let curFrameSrc = HERO_IMAGE.src;
            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
            curFrameNum += 1
            if (curFrameNum < 5) {
                HERO_IMAGE.src = './assets/soldier/shoot/Gun_Shot_00' + curFrameNum.toString() + '.png'
            } else {
                this.heroAnim = 'idle'
            }
            this.frameCounter = 0
        }
    }

    heroDieAnim() {
        if (HERO_IMAGE.src.split('/')[9] !== 'death') HERO_IMAGE.src = './assets/soldier/death/death_0000_Man.png'
        let curFrameSrc = HERO_IMAGE.src;
        let curFrameNum = parseInt(curFrameSrc.slice(-11, -8))
        curFrameNum += 1
        if (curFrameNum < 6) {
            HERO_IMAGE.src = './assets/soldier/death/death_000' + curFrameNum.toString() + '_Man.png'
        } else {
            console.log('game over')
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, ctx.width, ctx.height);
        ctx.save();
        ctx.translate(this.pos[0] + this.height / 10, this.pos[1] + this.width / 10);
        ctx.rotate((Math.PI / 180) * this.angle)
        ctx.drawImage(this.image, -(this.width / 2), -(this.height / 2), this.width, this.height);
        ctx.restore();
    };

    fireBullet(mousePos) {
        const bulletDir = [mousePos[0] - this.pos[0] - 10, mousePos[1] - this.pos[1] - 10];
        const bulletVel = Util.scale(Util.dir(bulletDir), BULLET_SPEED);

        const bullet = new Bullet(this.game, this.pos, bulletVel);
        this.game.add(bullet);
    };

    heroDie(otherObject) {
        this.heroAnim = 'die'
        this.vel = [0, 0]
        // this.heroAnimate('die')
        // otherObject.remove();
    }

    collideWith(otherObject) {
        if (otherObject instanceof Zombie) {
            this.heroDie(otherObject);
            return true
        }
    }

    power(impulse) {
        if (impulse[0] > 0 && this.vel[0] < HERO_MAX_SPEED) this.vel[0] += impulse[0]
        if (impulse[0] < 0 && this.vel[0] > -HERO_MAX_SPEED) this.vel[0] += impulse[0]
        if (impulse[1] > 0 && this.vel[1] < HERO_MAX_SPEED) this.vel[1] += impulse[1]
        if (impulse[1] < 0 && this.vel[1] > -HERO_MAX_SPEED) this.vel[1] += impulse[1]
    };

}

export default Hero;
