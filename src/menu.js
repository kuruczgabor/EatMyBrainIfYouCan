import GameView from "./game_view"

class Menu {

    constructor(game, ctx) {
        this.game = game
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
        this.menu.classList.add('hide')
        this.footerTitle.classList.remove('hide')
        const gameView = new GameView(this.game, this.ctx);
        gameView.start();
    }

}


export default Menu;