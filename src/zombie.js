import MovingObject from "./moving_object";
import Util from "./util";
import Bullet from "./bullet"

const ZOMBIE_ATTACK_SPEED = 1;
// const ZOMBIE_RADIUS = 20;

const ZOMBIE_IMAGE = new Image();
ZOMBIE_IMAGE.src = "./assets/zombie/walk/Walk_000.png";

const ZOMBIE_WALK_INTERVALS = [];
const ZOMBIE_DIE_INTERVALS = [];

class Zombie extends MovingObject {

    // constructor(game, pos, vel, radius, color, height, width, angle) {
    constructor(game, pos, vel, height, width, angle) {
        super(game)
        this.height = 50;
        this.width = 50;
        this.image = ZOMBIE_IMAGE;
        this.pos = pos || [800, 400];
        // this.radius = ZOMBIE_RADIUS;
        this.vel = vel || [0,0];
        this.angle = angle || 0;
        this.zombieAnim = 'walk';
        this.zombieAnimate();
    }

    zombieAnimate(command) {

        if (this.zombieAnim === "die") {
            this.height = 100;
            this.width = 100;
        }

        const zombieWalk = setInterval(() => {
            if (this.zombieAnim === 'walk') {
                this.zombieWalk();
                ZOMBIE_WALK_INTERVALS.push(zombieWalk)
            }
        }, 150);

        if (this.zombieAnim !== "walk") {
            ZOMBIE_WALK_INTERVALS.forEach(clearInterval);
        }

        const zombieDie = setInterval(() => {
            if (command === "die") {
                this.zombieDie();
                ZOMBIE_DIE_INTERVALS.push(zombieDie)
            }
        }, 200);

        if (this.zombieAnim !== "die") {
            ZOMBIE_DIE_INTERVALS.forEach(clearInterval);
        }


    }

    zombieWalk() {
        let curFrameSrc = ZOMBIE_IMAGE.src;
        let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
        curFrameNum += 1
        if (curFrameNum === 9) curFrameNum = 0
        ZOMBIE_IMAGE.src = './assets/zombie/walk/Walk_00' + curFrameNum.toString() + '.png'
    
    }

    zombieDie() {
        if (ZOMBIE_IMAGE.src.split('/')[9] !== 'death') ZOMBIE_IMAGE.src = './assets/zombie/death/Death_000.png'
        let curFrameSrc = ZOMBIE_IMAGE.src;
        let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
        curFrameNum += 1
        if (curFrameNum < 6) {
            // debugger
            ZOMBIE_IMAGE.src = './assets/zombie/death/Death_00' + curFrameNum.toString() + '.png'
        }
        if (curFrameNum === 6) {
            this.vel = [0,0]
            // this.zombieAnim = '';
        }

    }

    draw(ctx) {

        // debugger
        if (this.zombieAnim !== 'die') {
            this.angle = -Math.atan2(this.game.heroes[0].pos[0] - this.pos[0], this.game.heroes[0].pos[1] - this.pos[1]) * 180 / Math.PI;
        }

        ctx.clearRect(0, 0, ctx.width, ctx.height);
        ctx.save();
        ctx.translate(this.pos[0] + this.width / 2, this.pos[1] + this.height / 2);
        ctx.rotate((Math.PI / 180) * this.angle)
        ctx.drawImage(this.image, -(this.width / 2), -(this.height / 2), this.width, this.height);
        ctx.restore();

        // ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
    }

    // getZombieImage() {
    //     const zombieImage = new Image();
    //     zombieImage.src = "./assets/zombie/walk/Walk_000.png";        
    //     this.image = zombieImage
    //     console.log("hello")
    // }

    zombieEliminate(otherObject) {
        console.log('die');
        this.zombieAnim = 'die'
        this.vel = [0,0]
        this.zombieAnimate('die')
        // this.remove();
        otherObject.remove();
    }

    collideWith(otherObject) {
        if (otherObject instanceof Bullet) {
            this.zombieEliminate(otherObject);
            return true
        }
    }

    findAttackVel() {

        const attackDir = [this.game.heroes[0].pos[0] - this.pos[0],
                           this.game.heroes[0].pos[1] - this.pos[1]];

        const attackVel = Util.scale(
            Util.dir(attackDir),
            ZOMBIE_ATTACK_SPEED
        );

        return attackVel;

    }

}

export default Zombie;