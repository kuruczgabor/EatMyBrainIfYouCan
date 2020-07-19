import Hero from "./hero";
import Bullet from "./bullet";
import Zombie from "./zombie";
import Util from "./util"

const GAME_BG_COLOR = "#FFFFFF";
const GAME_DIM_X = 1000;
const GAME_DIM_Y = 600;
const GAME_FPS = 32;
const HERO_RADIUS = 15;

class Game {

    constructor() {
        this.heroes = [];
        this.bullets = [];
        this.zombies = [];
        this.addHero();
        this.addZombie();
    }

    add(object) {
        if (object instanceof Bullet) {
            // debugger
            this.bullets.push(object);
        } else if (object instanceof Hero) {
            this.heroes.push(object);
        } else if (object instanceof Zombie) {
            this.zombies.push(object);
        } else {
            throw new Error("unknown type of object");
        }
    };

    addHero() {
        let that = this

        const hero = new Hero(
            that, [150, 150]
        )

        this.add(hero);
        return hero;
    };

    addZombie() {
        let that = this

        // debugger

        const zombie = new Zombie(
            that
        )

        // debugger

        this.add(zombie)
        return zombie;
    }

    allObjects() {
        return [].concat(this.heroes, this.bullets, this.zombies);
    };

    checkCollisions() {
        const allObjects = this.allObjects();
        for (let i = 0; i < allObjects.length; i++) {
            for (let j = 0; j < allObjects.length; j++) {
                const obj1 = allObjects[i];
                const obj2 = allObjects[j];

                if (obj1.isCollidedWith(obj2)) {
                    const collision = obj1.collideWith(obj2);
                    if (collision) return;
                }
            }
        }
    };

    draw(ctx) {
        ctx.clearRect(0, 0, GAME_DIM_X, GAME_DIM_Y);
        ctx.fillStyle = GAME_BG_COLOR;
        ctx.fillRect(0, 0, GAME_DIM_X, GAME_DIM_Y);

        this.allObjects().forEach(function (object) {
            object.draw(ctx);
        });
    };

    isOutOfBounds(pos) {
        // return (pos[0] < 0) || (pos[1] < 0) ||
        //     (pos[0] > GAME_DIM_X) || (pos[1] > GAME_DIM_Y);
        return (pos[0] < HERO_RADIUS) || (pos[1] < HERO_RADIUS) ||
            (pos[0] > GAME_DIM_X - HERO_RADIUS) || (pos[1] > GAME_DIM_Y - HERO_RADIUS);
    };

    moveObjects(delta) {
        this.allObjects().forEach(function (object) {
            object.move(delta);
        });
    };

    randomPosition() {
        return [
            GAME_DIM_X * Math.random(),
            GAME_DIM_Y * Math.random()
        ];
    };

    remove(object) {
        if (object instanceof Bullet) {
            this.bullets.splice(this.bullets.indexOf(object), 1);
        } else if (object instanceof Hero) {
            this.heroes.splice(this.heroes.indexOf(object), 1);
        } else {
            throw new Error("unknown type of object");
        }
    };

    changeZombieVel() {
        this.zombies[0].vel = this.zombies[0].findAttackVel()
    }

    step(delta) {
        this.moveObjects(delta);
        this.changeZombieVel();
        this.checkCollisions();
    };

    // wrap(pos) {
    //     return [
    //         Util.wrap(pos[0], GAME_DIM_X), Util.wrap(pos[1], GAME_DIM_Y)
    //     ];
    // };

}

export default Game