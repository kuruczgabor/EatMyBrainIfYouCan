import Hero from "./hero";
import Bullet from "./bullet";
import Zombie from "./zombie";
import Map from "./map";
import GameView from "./game_view";
import Menu from "./menu";
	
const GAME_BG_COLOR = "#363636";
const GAME_DIM_X = 1200;
const GAME_DIM_Y = 600;
// const GAME_FPS = 32;
const HERO_RADIUS = 15;

class Game {

    constructor() {
        this.map = new Map();
        this.heroes = [];
        this.bullets = [];
        this.zombies = [];
        this.addHero();
        this.addZombie();
        // this.addZombiesBasedOnLevel();

        this.gameLevel = 1;
        this.eliminatedZombies = 0

        this.levelStarted = false;
        this.levelCompleted = false;
        this.levelChanged = false;
        this.newLevelStarted = false;

        this.gameOver = false;

        this.gameDimX = GAME_DIM_X;
        this.gameDimY = GAME_DIM_Y;
    }

    add(object) {
        if (object instanceof Bullet) {
            this.bullets.push(object);
        } else if (object instanceof Hero) {
            this.heroes.push(object);
        } else if (object instanceof Zombie) {
            this.zombies.push(object);
        }
    };

    addHero() {
        let that = this
        const hero = new Hero(that)
        this.add(hero);
        return hero;
    };

    addZombiesBasedOnLevel() {
        this.newLevelStarted = false;
        let that = this;

        setTimeout(() => {

            // const bottomRightPosMin0 = 1150
            // const bottomRightPosMax0 = 1150
            // const bottomRightPosMin1 = 550
            // const bottomRightPosMax1 = 550

            // let zombie = new Zombie(that, [Math.floor(Math.random() * (bottomRightPosMax0 - bottomRightPosMin0)) + bottomRightPosMin0, Math.floor(Math.random() * (bottomRightPosMax1 - bottomRightPosMin1)) + bottomRightPosMin1])
            // // zombie.zombieSpeed = this.gameLevel
            // this.add(zombie)

            // // BOTTOM RIGHT CORNER

            const bottomRightPosMin0 = 900
            const bottomRightPosMax0 = 1050
            const bottomRightPosMin1 = 350
            const bottomRightPosMax1 = 550

            const zombieNum = this.gameLevel * 1.5

            for (let i = 0; i < zombieNum; i++) {
                let zombie = new Zombie(that, [Math.floor(Math.random() * (bottomRightPosMax0 - bottomRightPosMin0)) + bottomRightPosMin0, Math.floor(Math.random() * (bottomRightPosMax1 - bottomRightPosMin1)) + bottomRightPosMin1])
                zombie.zombieSpeed = Math.floor(1 + this.gameLevel * 0.2)
                this.add(zombie)
            }

            // // TOP LEFT CORNER

            const topLeftPosMin0 = 50
            const topLeftPosMax0 = 150
            const topLeftPosMin1 = 50
            const topLeftPosMax1 = 150

            const zombieNum2 = Math.floor(this.gameLevel * 1.5)

            for (let i = 0; i < zombieNum2; i++) {
                let zombie = new Zombie(that, [Math.floor(Math.random() * (topLeftPosMax0 - topLeftPosMin0)) + topLeftPosMin0, Math.floor(Math.random() * (topLeftPosMax1 - topLeftPosMin1)) + topLeftPosMin1])
                zombie.zombieSpeed = Math.floor(1 + this.gameLevel * 0.2)
                this.add(zombie)
            }

        }, 3000)
    }

    addZombie() {
        let that = this

        setTimeout(() => {
            const zombie = new Zombie(that, [1100, 550])
            // const zombie = new Zombie(that, [10, 10])
            this.add(zombie)
        }, 3000)
    }


    allObjects() {
        return [].concat(this.bullets, this.zombies, this.heroes);
    };

    draw(ctx) {
        // debugger
        this.map.draw(ctx);
        // ctx.clearRect(0, 0, GAME_DIM_X, GAME_DIM_Y);
        // ctx.fillStyle = GAME_BG_COLOR;
        // ctx.fillRect(0, 0, GAME_DIM_X, GAME_DIM_Y);

        this.allObjects().forEach(function (object) {
            object.draw(ctx);
        });

        this.map.drawTrees(ctx)
    };

    isOutOfBounds(pos) {
        return (pos[0] < 0) || (pos[1] < 0) ||
            (pos[0] > GAME_DIM_X) || (pos[1] > GAME_DIM_Y);
        // return (pos[0] < HERO_RADIUS) || (pos[1] < HERO_RADIUS) ||
        //     (pos[0] > GAME_DIM_X - HERO_RADIUS) || (pos[1] > GAME_DIM_Y - HERO_RADIUS);
    };

    moveObjects(delta) {
        this.allObjects().forEach((object) => {
            object.move(delta);
        });
        // this.heroes[0].moveHero()

        // this.zombies.forEach((zombie) => {
        //     zombie.move(delta)
        // })

        // this.bullets.forEach((bullet) => {
        //     bullet.move(delta)
        // })

        // this.heroes[0].move()

    };

    animateObjects() {
        this.heroes[0].heroAnimate()
        // this.zombies[0].zombieAnimate()
        if (this.zombies.length > 0) {
            this.zombies.forEach((zombie) => {
                // debugger
                zombie.zombieAnimate()
            })
        }
    }

    remove(object) {
        if (object instanceof Bullet) {
            this.bullets.splice(this.bullets.indexOf(object), 1);
        } else if (object instanceof Hero) {
            this.heroes.splice(this.heroes.indexOf(object), 1);
        } else if (object instanceof Zombie) {
            this.zombies.splice(this.zombies.indexOf(object), 1);
        } 
    };

    checkCollisions() {
        const allObjects = [].concat(this.heroes, this.bullets, this.zombies);
        for (let i = 0; i < allObjects.length; i++) {
            for (let j = 0; j < allObjects.length; j++) {
                const object1 = allObjects[i];
                const object2 = allObjects[j];

                if (object1.isCollidedWith(object2)) {
                    const collision = object1.collideWith(object2);
                    if (collision) return;
                }
            }
        }
    }

    // changeZombieVel() {
    //     if (this.zombies.length > 0) {
    //         if (this.zombies[0].zombieAnim !== 'die') {
    //             this.zombies[0].vel = this.zombies[0].findAttackVel()
    //         }
    //     }
    // }

    step(delta) {
        this.moveObjects(delta);
        this.animateObjects();
        this.checkCollisions();
        this.isLevelCompleted();
        // this.changeZombieVel();
    };

    isLevelCompleted() {
        let noZombiesOnMap = true;
        if (this.zombies.length < 1) noZombiesOnMap = false;
        this.zombies.forEach((zombie) => {
            if (zombie.deadly) noZombiesOnMap = false;
        });
        if (noZombiesOnMap && !this.levelChanged) {
            // debugger
            this.levelCompleted = true;
            this.levelChanged = true; 
        }
        return noZombiesOnMap;
    }

    gameOverMenu() {
        // debugger

        const gameOverMenu = document.getElementById('game-over-window');
        const mainMenuButton = document.getElementById('game-over-main-menu');
        const mainMenu = document.getElementById('game-menu')
        const zombieNumber = document.getElementById('game-over-zombie-number')
        const musicIcon = document.getElementById('game-music-icon')
        
        musicIcon.classList.add('hide');

        zombieNumber.parentNode.removeChild(zombieNumber)
        const newNumber = document.createElement('h3')
        newNumber.innerHTML = `${this.eliminatedZombies} ZOMBIES ELIMINATED`
        newNumber.id = 'game-over-zombie-number'
        mainMenuButton.parentNode.insertBefore(newNumber, mainMenuButton)

        gameOverMenu.classList.remove('hide')

        mainMenuButton.addEventListener('click', this.mainMenu)
    }

    mainMenu() {
        const gameOverMenu = document.getElementById('game-over-window');
        const mainMenuButton = document.getElementById('game-over-main-menu');
        const mainMenu = document.getElementById('game-menu');
        const musicIcon = document.getElementById('game-music-icon')

        musicIcon.classList.add('hide');
        gameOverMenu.classList.add('hide');
        mainMenu.classList.remove('hide');
    }

}

export default Game;