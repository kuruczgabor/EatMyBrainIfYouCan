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

        document.addEventListener("mousedown", (e) => {
            const mouseCoor = Util.findCursorCoords();
            hero.fireBullet(mouseCoor)
        })

        // document.addEventListener("mousemove", (e) => {
        //     const mouseCoor = Util.findCursorCoords();
        // })

        document.addEventListener("keydown", (e) => {
            let keyCode = e.which || window.event.keyCode

            if (keyCode === 65) hero.power(GAME_VIEW_MOVES["a"])
            if (keyCode === 68) hero.power(GAME_VIEW_MOVES["d"])           
            if (keyCode === 87) hero.power(GAME_VIEW_MOVES["w"])     
            if (keyCode === 83) hero.power(GAME_VIEW_MOVES["s"])
            
        })

        document.addEventListener("keyup", function (e) {
            let keyCode = e.which || window.event.keyCode;

            if (keyCode === 65 || keyCode === 68) that.game.heroes[0].vel[0] = 0 
            if (keyCode === 87 || keyCode === 83) that.game.heroes[0].vel[1] = 0
        })

    };

    start() {
        this.bindKeyHandlers();
        this.lastTime = 0;

        requestAnimationFrame(this.animate.bind(this));
    };

    animate(time) {
        const timeDelta = time - this.lastTime;

        this.game.step(timeDelta);
        this.game.draw(this.ctx);
        this.lastTime = time;

        requestAnimationFrame(this.animate.bind(this));
    };

}

export default GameView;