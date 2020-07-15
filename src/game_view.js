const GAME_VIEW_MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
};

class GameView {

    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;        
    }

    bindKeyHandlers() {
        const hero = this.hero;

        Object.keys(GAME_VIEW_MOVES).forEach(function (k) {
            const move = GAME_VIEW_MOVES[k];
            key(k, function () { hero.power(move); });
        });

        key("space", function () { hero.fireBullet(); });
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