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


    // stop() {

    // };

}

export default GameView;