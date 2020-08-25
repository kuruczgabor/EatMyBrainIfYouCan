import GameView from "./game_view";
import Game from "./game.js";

const MENU_SOUND = document.createElement("audio");
MENU_SOUND.src = './assets/sounds/Group-Of-Zombies-Growling-A1-www.fesliyanstudios.com (1).mp3';

const GAME_MUSIC = document.createElement("audio");
GAME_MUSIC.src = './assets/sounds/For Whom The Bell Tolls.mp3';


class Menu {

    constructor(ctx) {
        // this.game = game
        // this.game = new Game();
        this.ctx = ctx

        this.menu = document.getElementById('game-menu');
        this.newGameTrigger = document.getElementById('new-game');
        this.footerTitle = document.getElementById('game-footer-title');

        this.menuSound = false;
        this.gameMusic = false;

        this.newGame = this.newGame.bind(this);
        this.gameStarter()
    }

    gameStarter() {
        this.newGameTrigger.addEventListener('click', this.newGame);
        
        document.addEventListener("keydown", (e) => {
            let keyCode = e.which || window.event.keyCode
            if (keyCode === 77 && this.gameMusic === false) {
                this.gameMusic = true
                GAME_MUSIC.play()
            } else if (keyCode === 77 && this.gameMusic === true) {
                this.gameMusic = false
                GAME_MUSIC.pause()
            }
        })
    }

    newGame() {
        this.game = new Game();
        this.menu.classList.add('hide')
        this.footerTitle.classList.remove('hide')
        const gameView = new GameView(this.game, this.ctx);
        gameView.selectLevel();
        gameView.start();
    }

}


export default Menu;