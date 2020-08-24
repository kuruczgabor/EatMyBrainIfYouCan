import GameView from "./game_view";
import Game from "./game.js";

class Menu {

    constructor(ctx) {
        // this.game = game
        // this.game = new Game();
        this.ctx = ctx

        this.menu = document.getElementById('game-menu');
        this.newGameTrigger = document.getElementById('new-game');
        this.footerTitle = document.getElementById('game-footer-title');

        this.newGame = this.newGame.bind(this);
        this.gameStarter()
    }

    gameStarter() {
        this.newGameTrigger.addEventListener('click', this.newGame)
    }

    newGame() {
        this.game = new Game();
        this.menu.classList.add('hide')
        this.footerTitle.classList.remove('hide')
        const gameView = new GameView(this.game, this.ctx);
        gameView.start();
    }

}


export default Menu;