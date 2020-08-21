import MovingObject from "./moving_object";
import Util from "./util";
import Bullet from "./bullet"

const ZOMBIE_ATTACK_SPEED = 1;
const ZOMBIE_IMAGE = new Image();
ZOMBIE_IMAGE.src = "./assets/zombie/walk/Walk_000.png";
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class Zombie extends MovingObject {

    constructor(game, pos) {
        super(game)
        this.pos = pos || [800, 400];
        this.height = 50;
        this.width = 50;
        this.angle = 0;
        this.vel = [0, 0];

        this.image = ZOMBIE_IMAGE;
        this.zombieAnim = 'walk';
        this.frameCounter = 0;

        this.walkFrameChanger = 8;
        this.dieFrameChanger = 8;
    }

    zombieAnimate() {

        if (this.zombieAnim === "walk") {
            this.zombieWalkAnim()
        } else if (this.zombieAnim === "die") {
            this.zombieDieAnim()
        }

        this.frameCounter++
        if (this.frameCounter > 10) this.frameCounter = 0

    }

    zombieWalkAnim() {
        if (this.frameCounter === this.walkFrameChanger) {
            let curFrameSrc = ZOMBIE_IMAGE.src;
            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
            curFrameNum += 1
            if (curFrameNum === 9) curFrameNum = 0
            ZOMBIE_IMAGE.src = './assets/zombie/walk/Walk_00' + curFrameNum.toString() + '.png'
            this.frameCounter = 0;
        }
    }

    zombieDieAnim() {
        if (this.frameCounter === this.dieFrameChanger) {
            if (ZOMBIE_IMAGE.src.split('/')[9] !== 'death') ZOMBIE_IMAGE.src = './assets/zombie/death/Death_000.png'
            let curFrameSrc = ZOMBIE_IMAGE.src;
            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
            curFrameNum += 1
            if (curFrameNum < 6) {
                ZOMBIE_IMAGE.src = './assets/zombie/death/Death_00' + curFrameNum.toString() + '.png'
            } else {
                console.log('zombie died')
            }
        }
    }

    draw(ctx) {

        if (this.zombieAnim !== 'die') {
            this.angle = -Math.atan2(this.game.heroes[0].pos[0] - this.pos[0], this.game.heroes[0].pos[1] - this.pos[1]) * 180 / Math.PI;
        }

        ctx.clearRect(0, 0, ctx.width, ctx.height);
        ctx.save();
        ctx.translate(this.pos[0] + this.width / 2, this.pos[1] + this.height / 2);
        ctx.rotate((Math.PI / 180) * this.angle)
        ctx.drawImage(this.image, -(this.width / 2), -(this.height / 2), this.width, this.height);
        ctx.restore();

    }

    zombieDie(otherObject) {
        this.zombieAnim = 'die'
        this.vel = [0,0]
        // this.zombieAnimate()
        otherObject.remove();
    }

    collideWith(otherObject) {
        if (otherObject instanceof Bullet) {
            this.zombieDie(otherObject);
            return true
        }
    }

    findAttackVel() {
        const attackDir = [this.game.heroes[0].pos[0] - this.pos[0],
                           this.game.heroes[0].pos[1] - this.pos[1]];
        const attackVel = Util.scale(Util.dir(attackDir), ZOMBIE_ATTACK_SPEED);
        return attackVel;
    }

    move(timeDelta) {

        // const map = this.game.map.mapPlan

        // const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
        //     offsetX = this.vel[0] * velocityScale,
        //     offsetY = this.vel[1] * velocityScale;

        // const nextPos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

        // const nextTileX = [Math.floor(nextPos[0] / 25)];
        // const nextTileY = [Math.floor(nextPos[1] / 25)];
        // const nextTile = map[nextTileY][nextTileX];

        // if (nextTile === 10) {
        //     this.pos = nextPos
        // } else {
        //     this.remove()
        // }

        // if (this.game.isOutOfBounds(this.pos)) this.remove();

        getAStarMovement: function() {
            var map = this.getWalkableMap(),
                path;
            map[Math.floor(this.position.y)][Math.floor(this.position.x)] = 's';
            map[Math.floor(this.targetAgent.position.y)][Math.floor(this.targetAgent.
                position.x)] = 'g';

            path = astar(map, 'manhattan', true);
            if (path && path.length > 1) {
                return {
                    x: path[1].col,
                    y: path[1].row
                };
            }
            return this.position;
        }

        chooseAction: function() {
            var nextMove = this.getAStarMovement(),
                dx = nextMove.x - this.position.x,
                dy = nextMove.y - this.position.y,
    }

}

export default Zombie;