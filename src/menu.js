import GameView from "./game_view";
import Game from "./game.js";

const MENU_SOUND = document.createElement("audio");
MENU_SOUND.src = './assets/sounds/Group-Of-Zombies-Growling-A1-www.fesliyanstudios.com (1).mp3';

const GAME_MUSIC = document.createElement("audio");
GAME_MUSIC.src = './assets/sounds/For Whom The Bell Tolls.mp3';

const ZOMBIE_WALK_FRAME_0 = new Image();
ZOMBIE_WALK_FRAME_0.src = "./assets/zombie/walk/Walk_000.png";

const ZOMBIE_WALK_FRAME_1 = new Image();
ZOMBIE_WALK_FRAME_1.src = "./assets/zombie/walk/Walk_001.png";

const ZOMBIE_WALK_FRAME_2 = new Image();
ZOMBIE_WALK_FRAME_2.src = "./assets/zombie/walk/Walk_002.png";

const ZOMBIE_WALK_FRAME_3 = new Image();
ZOMBIE_WALK_FRAME_3.src = "./assets/zombie/walk/Walk_003.png";

const ZOMBIE_WALK_FRAME_4 = new Image();
ZOMBIE_WALK_FRAME_4.src = "./assets/zombie/walk/Walk_004.png";

const ZOMBIE_WALK_FRAME_5 = new Image();
ZOMBIE_WALK_FRAME_5.src = "./assets/zombie/walk/Walk_005.png";

const ZOMBIE_WALK_FRAME_6 = new Image();
ZOMBIE_WALK_FRAME_6.src = "./assets/zombie/walk/Walk_006.png";

const ZOMBIE_WALK_FRAME_7 = new Image();
ZOMBIE_WALK_FRAME_7.src = "./assets/zombie/walk/Walk_007.png";

const ZOMBIE_WALK_FRAME_8 = new Image();
ZOMBIE_WALK_FRAME_8.src = "./assets/zombie/walk/Walk_008.png";

const ZOMBIE_DIE_FRAME_0 = new Image();
ZOMBIE_DIE_FRAME_0.src = "./assets/zombie/death/Death_000.png";

const ZOMBIE_DIE_FRAME_1 = new Image();
ZOMBIE_DIE_FRAME_1.src = "./assets/zombie/death/Death_001.png";

const ZOMBIE_DIE_FRAME_2 = new Image();
ZOMBIE_DIE_FRAME_2.src = "./assets/zombie/death/Death_002.png";

const ZOMBIE_DIE_FRAME_3 = new Image();
ZOMBIE_DIE_FRAME_3.src = "./assets/zombie/death/Death_003.png";

const ZOMBIE_DIE_FRAME_4 = new Image();
ZOMBIE_DIE_FRAME_4.src = "./assets/zombie/death/Death_004.png";

const ZOMBIE_DIE_FRAME_5 = new Image();
ZOMBIE_DIE_FRAME_5.src = "./assets/zombie/death/Death_005.png";

class Menu {

    constructor(ctx) {
        // this.game = game
        // this.game = new Game();
        this.ctx = ctx

        this.menu = document.getElementById('game-menu');
        this.newGameTrigger = document.getElementById('new-game');
        this.footerTitle = document.getElementById('game-footer-title');
        this.gameMusicIcon = document.getElementById('game-music-icon')

        this.menuSound = false;
        this.gameMusic = false;

        this.newGame = this.newGame.bind(this);
        this.gameStarter()
    }

    gameStarter() {
        this.newGameTrigger.addEventListener('click', this.newGame);

        // const gameMusicIcon = document.getElementById('game-music-icon')
        const gameMusicIconTrigger = document.getElementById('game-developer-tag')

        // gameMusicIcon.parentNode.removeChild(gameMusicIcon)
        // const newIcon = document.createElement('img')
        // newIcon.id = "game-music-icon"
        // newIcon.src = "./assets/controls/sound_on.png"
        // gameMusicIconTrigger.parentNode.insertBefore(newIcon, gameMusicIconTrigger)
        const that = this

        
        document.addEventListener("keydown", (e) => {
            let keyCode = e.which || window.event.keyCode
            if (keyCode === 77 && this.gameMusic === false) {
                this.gameMusic = true
                GAME_MUSIC.play()

                that.gameMusicIcon.parentNode.removeChild(that.gameMusicIcon)
                const newIcon = document.createElement('img')
                newIcon.id = "game-music-icon"
                newIcon.src = "./assets/controls/sound_on.png"
                gameMusicIconTrigger.parentNode.insertBefore(newIcon, gameMusicIconTrigger.nextSibling)
                that.gameMusicIcon = document.getElementById('game-music-icon')

            } else if (keyCode === 77 && this.gameMusic === true) {
                this.gameMusic = false
                GAME_MUSIC.pause()

                that.gameMusicIcon.parentNode.removeChild(that.gameMusicIcon)
                const newIcon = document.createElement('img')
                newIcon.id = "game-music-icon"
                newIcon.src = "./assets/controls/sound_off.png"
                gameMusicIconTrigger.parentNode.insertBefore(newIcon, gameMusicIconTrigger.nextSibling)
                that.gameMusicIcon = document.getElementById('game-music-icon')

            }
        })
    }

    newGame() {
        this.game = new Game();
        this.menu.classList.add('hide')
        this.footerTitle.classList.remove('hide')
        this.gameMusicIcon.classList.remove('hide')
        const gameView = new GameView(this.game, this.ctx);
        // gameView.selectLevel();
        gameView.start();
    }

}


export default Menu;