import MovingObject from "./moving_object";
import Util from "./util";

const ZOMBIE_ATTACK_SPEED = 1;
const ZOMBIE_RADIUS = 20;

class Zombie extends MovingObject {

    constructor(game, pos, vel, radius, color) {
        super(game)
        this.game = game;
        this.pos = pos || [400, 400];
        this.radius = ZOMBIE_RADIUS;
        this.color = "#15552D";
        this.vel = vel || [0,0]
        // this.image = Image new
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