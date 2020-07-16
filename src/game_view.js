const GAME_VIEW_MOVES = {
    w: [0, -2],
    a: [-2, 0],
    s: [0, 2],
    d: [2, 0],
    // wa: [-1, -1],
    // as: [-1, 1],
    // sd: [1, 1],
    // dw: [1, -1]
};

class GameView {

    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;       
    };

    // moveUp(hero) {
    //     hero.power([0,-1])
    //     // hero.vel = [0,-1]
    // }

    // moveRight(hero) {
    //     hero.power([1, 0])
    //     // hero.vel = [1, 0]
    // }

    // moveLeft(hero) {
        // hero.power([-1, 0])
    //     // hero.vel = [-1, 0]
    // }

    // moveDown(hero) {
    //     hero.power([0, 1])
    //     // hero.vel = [0, 1]
    // }

    bindKeyHandlers() {
        const hero = this.game.heroes[0];

        // key("w", () => { this.moveUp(hero); });
        // key("a", () => { this.moveLeft(hero); });
        // key("s", () => { this.moveDown(hero); });
        // key("d", () => { this.moveRight(hero); });

        // key("w", () => { hero.power(GAME_VIEW_MOVES["w"]); });
        // key("a", () => { hero.power(GAME_VIEW_MOVES["a"]); });
        // key("s", () => { hero.power(GAME_VIEW_MOVES["s"]); });
        // key("d", () => { hero.power(GAME_VIEW_MOVES["d"]); });

        // if (key.isPressed("w")) {
        //     debugger
        //     return null
        // }
        

        // Object.keys(GAME_VIEW_MOVES).forEach((k) => {
        //     const move = GAME_VIEW_MOVES[k];
        //     key(k, () => { hero.power(move); });
        // });

        // key("w+a", () => { hero.power([-1, -1]); });
        // key("a+s", () => { hero.power([-1, 1]); });
        // key("s+d", () => { hero.power([1, 1]); });
        // key("d+w", () => { hero.power([1, -1]); });

        // if (key.isPressed("b")) console.log(hello);

        // key("w+a", () => { hero.power([-1,-1]); });

        onmousedown = () => {
            const mouseCoor = findCursorCoords();
            hero.fireBullet(mouseCoor)
        }

        let that = this;
        // debugger
        // this.game.heroes[0].vel = [0,0]

        document.addEventListener("keydown", (e) => {
            let keycode = e.which || window.event.keycode
            // let keyCodeList = [65, 68, 87, 83]
            // debugger
            if (keycode === 65) {
                hero.power(GAME_VIEW_MOVES["a"])
            }
            if (keycode === 68) {
                hero.power(GAME_VIEW_MOVES["d"])
            }
            if (keycode === 87) {
                hero.power(GAME_VIEW_MOVES["w"])
            }
            if (keycode === 83) {
                hero.power(GAME_VIEW_MOVES["s"])
            }
        })

        document.addEventListener("keyup", function (e) {
            let keycode = e.which || window.event.keycode;
            // debugger
            let keyCodeList = [65, 68, 87, 83]
            // let keycode = e.keyCode;
            // if (keyCodeList.includes(keycode)) {
                // that.game.ship.stop();
                // that.game.heroes[0].vel = [0, 0]
                // that.game.heroes[0].vel[0] -= 1
                // that.game.heroes[0].vel[1] -= 1

                // if (that.game.heroes[0].vel[0] > 0) that.game.heroes[0].vel[0] = 0
                // if (that.game.heroes[0].vel[0] < 0) that.game.heroes[0].vel[0] = 0
                // if (that.game.heroes[0].vel[1] > 0) that.game.heroes[0].vel[1] = 0
                // if (that.game.heroes[0].vel[1] < 0) that.game.heroes[0].vel[1] = 0
            // }
            if (keycode === 65 || keycode === 68) {
                that.game.heroes[0].vel[0] = 0
            }
            if (keycode === 87 || keycode === 83) {
                that.game.heroes[0].vel[1] = 0
            }
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