import MovingObject from "./moving_object";
import Util from "./util";

const ZOMBIE_ATTACK_SPEED = 1;
// const ZOMBIE_RADIUS = 20;

const ZOMBIE_IMAGE = new Image();
ZOMBIE_IMAGE.src = "./assets/zombie/walk/Walk_000.png";

class Zombie extends MovingObject {

    // constructor(game, pos, vel, radius, color, height, width, angle) {
    constructor(game, pos, vel, height, width, angle) {
        super(game)
        this.height = 50;
        this.width = 50;
        this.image = ZOMBIE_IMAGE;
        this.pos = pos || [400, 400];
        // this.radius = ZOMBIE_RADIUS;
        this.vel = vel || [0,0];
        this.angle = angle || 0;
        this.zombieWalkAnimation();
    }

    zombieWalkAnimation() {
        setInterval(() => {
            let curFrameSrc = ZOMBIE_IMAGE.src;
            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
            curFrameNum += 1
            if (curFrameNum === 9) curFrameNum = 0
            ZOMBIE_IMAGE.src = './assets/zombie/walk/Walk_00' + curFrameNum.toString() + '.png'
        }, 150);
    }

    draw(ctx) {

        // debugger

        this.angle = -Math.atan2(this.game.heroes[0].pos[0] - this.pos[0], this.game.heroes[0].pos[1] - this.pos[1]) * 180 / Math.PI;

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