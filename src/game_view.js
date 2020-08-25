import Util from "./util";
import MovingObject from "./moving_object";

const GAME_VIEW_MOVES = {
    w: [0, -2],
    a: [-2, 0],
    s: [0, 2],
    d: [2, 0],
};

class GameView {

    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.level = 1
    };

    bindKeyHandlers() {

        const hero = this.game.heroes[0];
        let that = this;

        document.addEventListener("mousemove", (e) => {
            const mousePos = Util.findCursorCoords();
            const angleDeg = -Math.atan2(mousePos[0] - hero.pos[0], mousePos[1] - hero.pos[1]) * 180 / Math.PI;
            hero.angle = angleDeg
        })

        document.addEventListener("mousedown", (e) => {
            const mouseCoor = Util.findCursorCoords();
            if (hero.heroAnim !== 'shoot') hero.heroAnim = 'shoot'
            hero.fireBullet(mouseCoor)
        })

        document.addEventListener("keydown", (e) => {
            let keyCode = e.which || window.event.keyCode

            if (hero.heroAnim !== 'walk') hero.heroAnim = 'walk'
        
            // if (keyCode === 65) hero.power(GAME_VIEW_MOVES["a"])
            // if (keyCode === 68) hero.power(GAME_VIEW_MOVES["d"])           
            // if (keyCode === 87) hero.power(GAME_VIEW_MOVES["w"])     
            // if (keyCode === 83) hero.power(GAME_VIEW_MOVES["s"])

            if (keyCode === 65) hero.moveLeft = true;
            if (keyCode === 68) hero.moveRight = true;
            if (keyCode === 87) hero.moveUp = true;
            if (keyCode === 83) hero.moveDown = true;
        })

        document.addEventListener("keyup", function (e) {
            let keyCode = e.which || window.event.keyCode;

            if (hero.heroAnim !== 'idle') hero.heroAnim = 'idle'

            // if (keyCode === 65 || keyCode === 68) that.game.heroes[0].vel[0] = 0 
            // if (keyCode === 87 || keyCode === 83) that.game.heroes[0].vel[1] = 0

            if (keyCode === 65) hero.moveLeft = false;
            if (keyCode === 68) hero.moveRight = false;
            if (keyCode === 87) hero.moveUp = false;
            if (keyCode === 83) hero.moveDown = false;
        })

    };

    start() {
        this.bindKeyHandlers();
        this.lastTime = 0;

        requestAnimationFrame(this.animate.bind(this));
    };

    animate(time) {
        // debugger
        if (this.game.gameOver === false) {
            const timeDelta = time - this.lastTime;

            this.game.step(timeDelta);
            this.game.draw(this.ctx);
            this.lastTime = time;

            requestAnimationFrame(this.animate.bind(this));
        }
    };

    selectLevel() {
        this.levelStarter()
    }

    levelStarter() {
        const levelStarterWindow = document.getElementById('game-level-window')
        const countDownTrigger = document.getElementById('game-level-starts-in')

        // const threeSecLeft = document.getElementById('game-level-3sec')
        // const twoSecLeft = document.getElementById('game-level-2sec')
        // const oneSecLeft = document.getElementById('game-level-1sec')

        levelStarterWindow.classList.remove('hide')
        setTimeout(() => {
            levelStarterWindow.classList.add('hide')
        }, 3000)

        // setTimeout(() => {
        //     threeSecLeft.classList.add('hide')
        //     twoSecLeft.classList.remove('hide')
        // }, 1000)

        // setTimeout(() => {
        //     twoSecLeft.classList.add('hide')
        //     oneSecLeft.classList.remove('hide')
        // }, 2000)

        setTimeout(() => {
            let threeSecLeft = document.getElementById('game-level-3sec')
            threeSecLeft.parentNode.removeChild(threeSecLeft)
            let twoSecLeft = document.createElement('h3');
            twoSecLeft.innerHTML = '2';
            twoSecLeft.id = 'game-level-2sec';
            countDownTrigger.parentNode.insertBefore(twoSecLeft, countDownTrigger.nextSibling)
        }, 1000)

        setTimeout(() => {
            let twoSecLeft = document.getElementById('game-level-2sec')
            twoSecLeft.parentNode.removeChild(twoSecLeft)
            let oneSecLeft = document.createElement('h3');
            oneSecLeft.innerHTML = '1';
            oneSecLeft.id = 'game-level-1sec';
            countDownTrigger.parentNode.insertBefore(oneSecLeft, countDownTrigger.nextSibling)
        }, 2000)

        setTimeout(() => {
            let oneSecLeft = document.getElementById('game-level-1sec');
            oneSecLeft.parentNode.removeChild(oneSecLeft);
            let threeSecLeft = document.createElement('h3');
            threeSecLeft.innerHTML = '3';
            threeSecLeft.id = 'game-level-3sec';
            countDownTrigger.parentNode.insertBefore(threeSecLeft, countDownTrigger.nextSibling)
        }, 3000)



    }


    // stop() {

    // };

}

export default GameView;