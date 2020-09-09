import GameView from "./game_view";
import Game from "./game.js";

const MENU_SOUND = document.createElement("audio");
MENU_SOUND.src = './assets/sounds/Group-Of-Zombies-Growling-A1-www.fesliyanstudios.com (1).mp3';

const GAME_MUSIC = document.createElement("audio");
GAME_MUSIC.id = "metallica-background-music"
GAME_MUSIC.src = './assets/sounds/For Whom The Bell Tolls.mp3';

const shootSound = document.createElement("audio");
shootSound.src = './assets/sounds/9mm Glock 17-SoundBible.com-1873916083.mp3';
shootSound.preload

const zombieDieSound = document.createElement("audio")
zombieDieSound.src = './assets/sounds/Zombie Gets Attacked-SoundBible.com-20348330.mp3'
zombieDieSound.preload

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

const HERO_IDLE_FRAME_0 = new Image();
HERO_IDLE_FRAME_0.src = "./assets/soldier/idle/Idle_gun_000.png";

const HERO_IDLE_FRAME_1 = new Image();
HERO_IDLE_FRAME_1.src = "./assets/soldier/idle/Idle_gun_001.png";

const HERO_IDLE_FRAME_2 = new Image();
HERO_IDLE_FRAME_2.src = "./assets/soldier/idle/Idle_gun_002.png";

const HERO_IDLE_FRAME_3 = new Image();
HERO_IDLE_FRAME_3.src = "./assets/soldier/idle/Idle_gun_003.png";

const HERO_IDLE_FRAME_4 = new Image();
HERO_IDLE_FRAME_4.src = "./assets/soldier/idle/Idle_gun_004.png";

const HERO_IDLE_FRAME_5 = new Image();
HERO_IDLE_FRAME_5.src = "./assets/soldier/idle/Idle_gun_005.png";

const HERO_IDLE_FRAME_6 = new Image();
HERO_IDLE_FRAME_6.src = "./assets/soldier/idle/Idle_gun_006.png";

const HERO_IDLE_FRAME_7 = new Image();
HERO_IDLE_FRAME_7.src = "./assets/soldier/idle/Idle_gun_007.png";

const HERO_WALK_FRAME_0 = new Image();
HERO_WALK_FRAME_0.src = "./assets/soldier/walk/Walk_gun_000.png";

const HERO_WALK_FRAME_1 = new Image();
HERO_WALK_FRAME_1.src = "./assets/soldier/walk/Walk_gun_001.png";

const HERO_WALK_FRAME_2 = new Image();
HERO_WALK_FRAME_2.src = "./assets/soldier/walk/Walk_gun_002.png";

const HERO_WALK_FRAME_3 = new Image();
HERO_WALK_FRAME_3.src = "./assets/soldier/walk/Walk_gun_003.png";

const HERO_WALK_FRAME_4 = new Image();
HERO_WALK_FRAME_4.src = "./assets/soldier/walk/Walk_gun_004.png";

const HERO_WALK_FRAME_5 = new Image();
HERO_WALK_FRAME_5.src = "./assets/soldier/walk/Walk_gun_005.png";

const HERO_SHOOT_FRAME_0 = new Image();
HERO_SHOOT_FRAME_0.src = "./assets/soldier/shoot/Gun_Shot_000.png";

const HERO_SHOOT_FRAME_1 = new Image();
HERO_SHOOT_FRAME_1.src = "./assets/soldier/shoot/Gun_Shot_001.png";

const HERO_SHOOT_FRAME_2 = new Image();
HERO_SHOOT_FRAME_2.src = "./assets/soldier/shoot/Gun_Shot_002.png";

const HERO_SHOOT_FRAME_3 = new Image();
HERO_SHOOT_FRAME_3.src = "./assets/soldier/shoot/Gun_Shot_003.png";

const HERO_SHOOT_FRAME_4 = new Image();
HERO_SHOOT_FRAME_4.src = "./assets/soldier/shoot/Gun_Shot_004.png";

const HERO_DIE_FRAME_0 = new Image();
HERO_DIE_FRAME_0.src = "./assets/soldier/death/death_0000_Man.png";

const HERO_DIE_FRAME_1 = new Image();
HERO_DIE_FRAME_1.src = "./assets/soldier/death/death_0001_Man.png";

const HERO_DIE_FRAME_2 = new Image();
HERO_DIE_FRAME_2.src = "./assets/soldier/death/death_0002_Man.png";

const HERO_DIE_FRAME_3 = new Image();
HERO_DIE_FRAME_3.src = "./assets/soldier/death/death_0003_Man.png";

const HERO_DIE_FRAME_4 = new Image();
HERO_DIE_FRAME_4.src = "./assets/soldier/death/death_0004_Man.png";

const HERO_DIE_FRAME_5 = new Image();
HERO_DIE_FRAME_5.src = "./assets/soldier/death/death_0005_Man.png";

class Menu {

    constructor(ctx) {
        this.ctx = ctx

        this.menu = document.getElementById('game-menu');
        this.newGameTrigger = document.getElementById('new-game');
        this.footerTitle = document.getElementById('game-footer-title');
        this.gameMusicIcon = document.getElementById('game-music-icon');
        this.gameMusicIconHolder = document.getElementById('game-music-icon-holder');
        this.gameMusicIconLocation = document.getElementById('game-music-icon-location')

        this.menuSound = false;
        this.gameMusic = true;

        this.newGame = this.newGame.bind(this);
        this.gameStarter()
    }

    gameStarter() {
        this.newGameTrigger.addEventListener('click', () => {
            this.newGame()
            if (this.gameMusic === true) GAME_MUSIC.play()
        });

        const gameMusicIconTrigger = document.getElementById('game-developer-tag')
        const gameMusicIconLocation = document.getElementById('game-music-icon-location')

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
                gameMusicIconLocation.parentNode.insertBefore(newIcon, gameMusicIconLocation.nextSibling)
                that.gameMusicIcon = document.getElementById('game-music-icon')

            } else if (keyCode === 77 && this.gameMusic === true) {
                this.gameMusic = false
                GAME_MUSIC.pause()

                that.gameMusicIcon.parentNode.removeChild(that.gameMusicIcon)
                const newIcon = document.createElement('img')
                newIcon.id = "game-music-icon"
                newIcon.src = "./assets/controls/sound_off.png"
                gameMusicIconLocation.parentNode.insertBefore(newIcon, gameMusicIconLocation.nextSibling)
                that.gameMusicIcon = document.getElementById('game-music-icon')
            }
        })

        this.gameMusicIconHolder.addEventListener("click", (e) => {
            if (this.gameMusic === false) {
                this.gameMusic = true
                GAME_MUSIC.play()

                that.gameMusicIcon.parentNode.removeChild(that.gameMusicIcon)
                const newIcon = document.createElement('img')
                newIcon.id = "game-music-icon"
                newIcon.src = "./assets/controls/sound_on.png"
                gameMusicIconLocation.parentNode.insertBefore(newIcon, gameMusicIconLocation.nextSibling)
                that.gameMusicIcon = document.getElementById('game-music-icon')

            } else if (this.gameMusic === true) {
                this.gameMusic = false
                GAME_MUSIC.pause()

                that.gameMusicIcon.parentNode.removeChild(that.gameMusicIcon)
                const newIcon = document.createElement('img')
                newIcon.id = "game-music-icon"
                newIcon.src = "./assets/controls/sound_off.png"
                gameMusicIconLocation.parentNode.insertBefore(newIcon, gameMusicIconLocation.nextSibling)
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
        gameView.start();
    }

}


export default Menu;