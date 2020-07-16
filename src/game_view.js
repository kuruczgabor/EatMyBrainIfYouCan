const GAME_VIEW_MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
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

    bindKeyHandlers() {
        const hero = this.game.heroes[0];

        // key("w", () => { hero.power(GAME_VIEW_MOVES["w"]); });
        // key("a", () => { hero.power(GAME_VIEW_MOVES["a"]); });
        // key("s", () => { hero.power(GAME_VIEW_MOVES["s"]); });
        // key("d", () => { hero.power(GAME_VIEW_MOVES["d"]); });

        Object.keys(GAME_VIEW_MOVES).forEach(function (k) {
            const move = GAME_VIEW_MOVES[k];
            key(k, () => { hero.power(move); });
        });

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