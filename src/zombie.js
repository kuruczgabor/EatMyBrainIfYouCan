import MovingObject from "./moving_object";
import Util from "./util";

const ZOMBIE_ATTACK_SPEED = 1;
const ZOMBIE_RADIUS = 20;

const ZOMBIE_IMAGE = new Image();
ZOMBIE_IMAGE.src = "./assets/zombie/walk/Walk_000.png";

class Zombie extends MovingObject {

    constructor(game, pos, vel, radius, color, height, width) {
        super(game)
        this.height = 50;
        this.width = 50;
        this.image = ZOMBIE_IMAGE;
        this.game = game;
        this.pos = pos || [400, 400];
        this.radius = ZOMBIE_RADIUS;
        this.vel = vel || [0,0];

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