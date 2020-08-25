import Util from "./util";
import MovingObject from "./moving_object";

// const GAME_VIEW_MOVES = {
//     w: [0, -2],
//     a: [-2, 0],
//     s: [0, 2],
//     d: [2, 0],
// };

class GameView {

    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.level = 1;
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

            if (keyCode === 65) hero.moveLeft = true;
            if (keyCode === 68) hero.moveRight = true;
            if (keyCode === 87) hero.moveUp = true;
            if (keyCode === 83) hero.moveDown = true;
        })

        document.addEventListener("keyup", function (e) {
            let keyCode = e.which || window.event.keyCode;

            if (hero.heroAnim !== 'idle') hero.heroAnim = 'idle'

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
        if (this.game.gameOver === false) {

            const timeDelta = time - this.lastTime;
            this.game.step(timeDelta);
            this.game.draw(this.ctx);
            this.lastTime = time;

            requestAnimationFrame(this.animate.bind(this));
        }

        this.selectLevel()

        // if (!this.game.levelStarted) {
        //     this.levelStarterWindow();
        // }

        // if (this.game.levelCompleted) {
        //     this.levelCompleterWindow();
        // }

    };

    selectLevel() {
        if (!this.game.levelStarted) {
            this.levelStarterWindow()
            this.game.levelStarted = true
        }
        if (this.game.levelCompleted && !this.game.newLevelStarted) {
            this.levelCompleterWindow()
        }
        
    }

    levelStarterWindow() {
        const levelStarterWindow = document.getElementById('game-level-window')
        const countDownTrigger = document.getElementById('game-level-starts-in')

        const levelXTrigger = document.getElementById("game-level-title")
        const levelX = document.getElementById('game-level-start-number')
        levelX.parentNode.removeChild(levelX)
        const newLevel = document.createElement('h2');
        newLevel.innerHTML = `LEVEL ${this.level}`
        newLevel.id = 'game-level-start-number'
        // newLevel.classList = 'game-start-level-number'
        // levelXTrigger.parentNode.insertBefore(newLevel, levelXTrigger.nextSibling)
        countDownTrigger.parentNode.insertBefore(newLevel, countDownTrigger)
        levelStarterWindow.classList.remove('hide')
        // debugger

        setTimeout(() => {
            levelStarterWindow.classList.add('hide')
        }, 3000)

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

    levelCompleterWindow() {
        const levelCompletedWindow = document.getElementById('level-completed-window')
        levelCompletedWindow.classList.remove('hide')

        const lvlCompletedTrigger = document.getElementById('level-completed-trigger')
        const lvlX = document.getElementById('level-completed-number')
        lvlX.parentNode.removeChild(lvlX)
        const completedLvlX = document.createElement('h2')
        completedLvlX.innerHTML = `LEVEL ${this.level} COMPLETED`
        completedLvlX.id = 'level-completed-number'
        lvlCompletedTrigger.parentNode.insertBefore(completedLvlX, lvlCompletedTrigger)

        // const newLevel = document.createElement('h2');
        // newLevel.innerHTML = `LEVEL ${this.level}`
        // newLevel.id = 'game-level-start-number'
        // // newLevel.classList = 'game-start-level-number'
        // // levelXTrigger.parentNode.insertBefore(newLevel, levelXTrigger.nextSibling)
        // countDownTrigger.parentNode.insertBefore(newLevel, countDownTrigger)


        setTimeout(() => {
            levelCompletedWindow.classList.add('hide')
        }, 3000)

        // this.game.levelCompleted = true;
        // this.game.levelChanged = true;
        this.startNewLevel();
    }

    startNewLevel() {
        this.game.levelChanged = true; 
        this.game.newLevelStarted = true;
        this.level ++;
        setTimeout(() => {
            this.game.levelStarted = false;
        }, 3000)
        
    }

}

export default GameView;