import MovingObject from "./moving_object";
import Bullet from "./bullet";
import Util from "./util";
import GameView from "./game_view";
import Zombie from "./zombie";

// const HERO_RADIUS = 1;
const HERO_MAX_SPEED = 2;
// const HERO_MAX_IMPULSE = 2
const BULLET_SPEED = 15;

const HERO_IMAGE = new Image();
HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_000.png';
// HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_000.png';
const HERO_WALK_INTERVALS = [];
const HERO_IDLE_INTERVALS = [];
const HERO_SHOOT_INTERVALS = [];
const HERO_DIE_INTERVALS = [];

class Hero extends MovingObject {

    // constructor(game, pos, vel, radius, color, height, width, angle) {
    constructor(game, pos, vel, height, width, angle, image) {
        super(game, pos)
        // this.radius = HERO_RADIUS;
        this.vel = vel || [0, 0];
        // this.color = "#000000";
        this.image = HERO_IMAGE;
        // this.image = this.getImageWithAngle();
        this.height = 50;
        // this.heroAnim === 'shoot' ? this.height = 100 : this.height = 50
        this.width = 50;
        this.angle = angle || 0;
        // this.angle = angle;
        // this.heroIdleAnimation.bind(this);
        // this.heroIdleAnimation();
        // this.heroAnimate.bind(this);
        this.heroAnim = 'idle';
        this.heroAnimate();
        // this.animateHero();
    }

    heroAnimate() {
        // debugger
        // console.log(HERO_WALK_INTERVALS)
        // console.log(HERO_IDLE_INTERVALS)
        // console.log(HERO_SHOOT_INTERVALS)

        if (this.heroAnim === 'shoot') {
            this.height = 70
        } else if (this.heroAnim === 'die') {
            this.width = 100
        } else {
            this.height = 50
            this.width = 50
        }
        //we should also add one more condition before adding to the array: to check if it is there
        const heroShoot = setInterval(() => {
            if (this.heroAnim === "shoot") {
                this.heroShoot()
                HERO_SHOOT_INTERVALS.push(heroShoot);
            }
        }, 200)

        if (this.heroAnim !== "shoot") {
            HERO_SHOOT_INTERVALS.forEach(clearInterval);
        }
     
        const heroIdle = setInterval(() => {
            if (this.heroAnim === "idle") {
                this.heroIdle();
                HERO_IDLE_INTERVALS.push(heroIdle);
            }
        }, 100)

        if (this.heroAnim !== "idle") HERO_IDLE_INTERVALS.forEach(clearInterval);

        const heroWalk = setInterval(() => {
            if (this.heroAnim === "walk") {
                this.heroWalk();
                HERO_WALK_INTERVALS.push(heroWalk);
            }
        }, 200);

        if (this.heroAnim !== "walk") HERO_WALK_INTERVALS.forEach(clearInterval);
        
        const heroDie = setInterval(() => {
            if (this.heroAnim === "die") {
                this.heroDie();
                HERO_DIE_INTERVALS.push(heroDie);
            }
        }, 400);

        if (this.heroAnim !== "die") HERO_DIE_INTERVALS.forEach(clearInterval);
    }

    heroIdle() {
        if (HERO_IMAGE.src.split('/')[9] !== 'idle') HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_000.png'
        let curFrameSrc = HERO_IMAGE.src;
        let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
        curFrameNum += 1
        if (curFrameNum === 8) curFrameNum = 0
        HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_00' + curFrameNum.toString() + '.png'
    }

    heroWalk() {
        if (HERO_IMAGE.src.split('/')[9] !== 'walk') HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_000.png'
        let curFrameSrc = HERO_IMAGE.src;
        let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
        curFrameNum += 1
        if (curFrameNum === 6) curFrameNum = 0
        HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_00' + curFrameNum.toString() + '.png'
        // console.log(HERO_IMAGE.src)
    }

    heroShoot() {
        // debugger
        if (HERO_IMAGE.src.split('/')[9] !== 'shoot') HERO_IMAGE.src = './assets/soldier/shoot/Gun_Shot_000.png'
        let curFrameSrc = HERO_IMAGE.src;
        let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
        curFrameNum += 1
        // debugger
        if (curFrameNum < 5) {
            // debugger
            // this.height = 100
            HERO_IMAGE.src = './assets/soldier/shoot/Gun_Shot_00' + curFrameNum.toString() + '.png'
            this.heroAnimate()
            // this.heroAnim = 'idle'
        }
        console.log(HERO_IMAGE.src)
        if (curFrameNum === 5) {
            // debugger
            this.heroAnim = 'idle';
            this.heroAnimate()
        }
        // debugger
        // HERO_IMAGE.src = './assets/soldier/shoot/Gun_Shot_00' + curFrameNum.toString() + '.png'
        // console.log(HERO_IMAGE.src)        
    }

    heroDie() {
        // debugger
        if (HERO_IMAGE.src.split('/')[9] !== 'death') HERO_IMAGE.src = './assets/soldier/death/death_0000_Man.png'
        let curFrameSrc = HERO_IMAGE.src;
        let curFrameNum = parseInt(curFrameSrc.slice(-11, -8))
        curFrameNum += 1
        if (curFrameNum < 6) {
            // debugger
            HERO_IMAGE.src = './assets/soldier/death/death_000' + curFrameNum.toString() + '_Man.png'
        }
        if (curFrameNum === 6) {
            // debugger
            // this.remove()
        }
    }
            
            
        //     else if (command === "walk") {
        //         if (HERO_IMAGE.src.split('/')[9] !== 'walk') HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_000.png'
        //         // HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_000.png'
        //         let curFrameSrc = HERO_IMAGE.src;
        //         let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
        //         curFrameNum += 1
        //         if (curFrameNum === 6) curFrameNum = 0
        //         HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_00' + curFrameNum.toString() + '.png'
        //         console.log(HERO_IMAGE.src)
        //     } else if (command === 'stop') {
        //         clearInterval(animate)
        //     }
        // }, 100);
        // if (command === 'stop') {
        //     debugger
        //     clearInterval(animate)
        // }
    // }


        // let heroAnim = "";
        // if (command === "idle") {
        //     heroAnim = setInterval(() => {
        //         let curFrameSrc = HERO_IMAGE.src;
        //         let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
        //         curFrameNum += 1
        //         if (curFrameNum === 8) curFrameNum = 0
        //         HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_00' + curFrameNum.toString() + '.png'
        //     }, 100);
        // } else if (command === "stop") {
        //     debugger
        //     clearInterval(heroAnim)
        // }
    // }

    // heroStopAnimation() {

    // }

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
        // save the unrotated context of the canvas so we can restore it later
        ctx.save();
        // move to the center of the canvas
        ctx.translate(this.pos[0] + this.height / 10, this.pos[1] + this.width / 10);
        // rotate the canvas to the specified degrees
        ctx.rotate((Math.PI / 180) * this.angle)
        // draw the image; since the context is rotated, the image will be rotated also
        ctx.drawImage(this.image, -(this.width / 2), -(this.height / 2), this.width, this.height);
        // we’re done with the rotating so restore the unrotated context
        ctx.restore();

    };

    fireBullet(mousePos) {

        const bulletDir = [mousePos[0] - this.pos[0] - 15, mousePos[1] - this.pos[1] -15];

        // console.log(mousePos)
        // console.log(this.pos)
        // debugger
        const bulletVel = Util.scale(
            Util.dir(bulletDir),
            BULLET_SPEED
        );
        // debugger

        const bullet = new Bullet(
            this.game, this.pos, bulletVel, this.radius
        );
        // debugger

        this.game.add(bullet);
    };

    heroEliminate(otherObject) {
        // debugger
        console.log('die');
        this.heroAnim = 'die'
        this.vel = [0, 0]
        this.heroAnimate('die')
        // this.remove();
        otherObject.remove();
    }

    collideWith(otherObject) {
        if (otherObject instanceof Zombie) {
            this.heroEliminate(otherObject);
            return true
        }
    }

    power(impulse) {

        // setInterval(() => {
        //     HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_000'
        //     let curFrameSrc = HERO_IMAGE.src;
        //     let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
        //     curFrameNum += 1
        //     if (curFrameNum === 9) curFrameNum = 0
        //     HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_00' + curFrameNum.toString() + '.png'
        // }, 100);

        if (impulse[0] > 0 && this.vel[0] < HERO_MAX_SPEED) this.vel[0] += impulse[0]
        if (impulse[0] < 0 && this.vel[0] > -HERO_MAX_SPEED) this.vel[0] += impulse[0]

        if (impulse[1] > 0 && this.vel[1] < HERO_MAX_SPEED) this.vel[1] += impulse[1]
        if (impulse[1] < 0 && this.vel[1] > -HERO_MAX_SPEED) this.vel[1] += impulse[1]

    };

}

export default Hero;
