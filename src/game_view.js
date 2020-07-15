const GAME_VIEW_MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
    // w: [0, -2],
    // a: [-2, 0],
    // s: [0, 2],
    // d: [2, 0],
};

class GameView {

    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;       
    }

    bindKeyHandlers() {
        const hero = this.game.heroes[0];

        // Object.keys(GAME_VIEW_MOVES).forEach(function (k) {
        //     const move = GAME_VIEW_MOVES[k];
        //     key(k, () => { hero.power(move); });
        // });

        // key("w" && "a", () => { hero.power([-1, -1]); });
        // key("w" && "d", () => { hero.power([1, -1]); });
        // key("s" && "a", () => { hero.power([-1, 1]); });
        // key("s" && "d", () => { hero.power([1, 1]); });

        key("w", () => { hero.power(GAME_VIEW_MOVES["w"]); });
        key("a", () => { hero.power(GAME_VIEW_MOVES["a"]); });
        key("s", () => { hero.power(GAME_VIEW_MOVES["s"]); });
        key("d", () => { hero.power(GAME_VIEW_MOVES["d"]); });

        // key("d", () => {
        //     debugger 
        //     hero.power(GAME_VIEW_MOVES["d"]); 
        // });

        // key("space", () => { hero.fireBullet(); });

        // onmousedown = findObjectCoords;
        // onmousemove = hero.showCoords(event)
        // debugger

        // const mouseCoor = findObjectCoords(onmousedown)

        // onmousedown = () => {
        //     const coor = findObjectCoords()
        //     debugger
        // }

        // onmousedown = () => {
        //     const coor = findObjectCoords();
        //     hero.fireBullet(coor)
        // }

        onmousedown = () => {
            // const coor = findObjectCoords();
            hero.fireBullet()
        }

        // debugger
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