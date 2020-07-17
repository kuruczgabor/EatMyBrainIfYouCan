import MovingObject from "./moving_object";
import Util from "./util";

const ZOMBIE_ATTACK_SPEED = 1

class Zombie extends MovingObject {

    constructor(game, pos, vel, radius, color) {
        super(game)
        this.game = game;
        this.pos = [400, 400];
        this.vel = this.attackHero();
        this.radius = 50;
        this.color = "#15552D";
    }

    attackHero() {

        const attackDir = [this.game.heroes[0].pos[0] - this.pos[0],
                           this.game.heroes[0].pos[1] - this.pos[1]];

        debugger

        const attackVel = Util.scale(
            Util.dir(attackDir),
            ZOMBIE_ATTACK_SPEED
        );

        const zombie = new Zombie(
            this.game, this.pos, attackVel, this.radius, this.color
        );

        this.game.add(zombie)

    }       

}

export default Zombie;