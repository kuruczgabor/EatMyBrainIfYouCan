import MovingObject from "./moving_object";
import Bullet from "./bullet";
import Util from "./util";
import Zombie from "./zombie";

const BULLET_SPEED = 15;

const HERO_IMAGE = new Image();
HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_000.png';
const PAIN_SOUND = document.createElement("audio");
PAIN_SOUND.src = './assets/sounds/Pain-SoundBible.com-1883168362.wav';
const SHOOT_AUDIO = document.createElement("audio");
SHOOT_AUDIO.src = './assets/sounds/9mm Glock 17-SoundBible.com-1873916083.mp3';

class Hero extends MovingObject {

    constructor(game) {
        super(game)
        this.pos = [600, 300];
        this.height = 40;
        this.width = 40;
        this.angle = 0;
        this.vel = [0, 0];

        this.alive = true;

        this.heroSpeed = 3;

        this.moveUp = false;
        this.moveDown = false;
        this.moveRight = false;
        this.moveLeft = false;

        this.image = HERO_IMAGE;
        this.heroAnim = 'idle';
        this.frameCounter = 0;

        this.idleFrameChanger = 8;
        this.walkFrameChanger = 8;
        this.shootFrameChanger = 2;
    }

    heroAnimate() {
        if (this.heroAnim === "idle") {
            this.heroIdleAnim()
        } else if (this.heroAnim === "walk") {
            this.heroWalkAnim()
        } else if (this.heroAnim === "shoot") {
            this.heroShootAnim()
        } else if (this.heroAnim === "die") {
            this.heroDieAnim()
        }
        this.frameCounter++
        if (this.frameCounter > 10) this.frameCounter = 0
    }

    heroIdleAnim() {
        this.height = 40
        if (this.frameCounter === this.idleFrameChanger) {
            if (HERO_IMAGE.src.split('/')[HERO_IMAGE.src.split('/').length - 2] !== 'idle') {
                HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_000.png'
            }
            let curFrameSrc = HERO_IMAGE.src;
            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
            curFrameNum += 1
            if (curFrameNum === 8) curFrameNum = 0
            HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_00' + curFrameNum.toString() + '.png'
            this.frameCounter = 0
        }
    }

    heroWalkAnim() {
        this.height = 40

        if (this.frameCounter === this.walkFrameChanger) {
            if (HERO_IMAGE.src.split('/')[HERO_IMAGE.src.split('/').length - 2] !== 'walk') {
                HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_000.png'
            }
            let curFrameSrc = HERO_IMAGE.src;
            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
            curFrameNum += 1
            if (curFrameNum === 6) curFrameNum = 0
            HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_00' + curFrameNum.toString() + '.png'
            this.frameCounter = 0
        }
    }

    heroShootAnim() {
        this.height = 50

        if (this.frameCounter === this.shootFrameChanger) {
            if (HERO_IMAGE.src.split('/')[HERO_IMAGE.src.split('/').length - 2] !== 'shoot') {
                HERO_IMAGE.src = './assets/soldier/shoot/Gun_Shot_000.png'
            }
            let curFrameSrc = HERO_IMAGE.src;
            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
            curFrameNum += 1
            if (curFrameNum < 5) {
                HERO_IMAGE.src = './assets/soldier/shoot/Gun_Shot_00' + curFrameNum.toString() + '.png'
            } else {
                this.heroAnim = 'idle'
            }
            this.frameCounter = 0
        }
    }

    heroDieAnim() {
        if (HERO_IMAGE.src.split('/')[HERO_IMAGE.src.split('/').length - 2] !== 'death') {
            HERO_IMAGE.src = './assets/soldier/death/death_0000_Man.png'
        }
        let curFrameSrc = HERO_IMAGE.src;
        let curFrameNum = parseInt(curFrameSrc.slice(-11, -8))
        curFrameNum += 1
        if (curFrameNum < 6) {
            HERO_IMAGE.src = './assets/soldier/death/death_000' + curFrameNum.toString() + '_Man.png'
        } else {
            console.log('game over')
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, ctx.width, ctx.height);
        ctx.save();
        ctx.translate(this.pos[0] + this.height / 10, this.pos[1] + this.width / 10);
        ctx.rotate((Math.PI / 180) * this.angle)
        ctx.drawImage(this.image, -(this.width / 2), -(this.height / 2), this.width, this.height);
        ctx.restore();
    };

    fireBullet(mousePos) {
        const shootSound = document.createElement("audio");
        shootSound.src = './assets/sounds/9mm Glock 17-SoundBible.com-1873916083.mp3';
        if (!this.game.gameOver) shootSound.play()

        const bulletDir = [mousePos[0] - this.pos[0] - 10, mousePos[1] - this.pos[1] - 10];
        const bulletVel = Util.scale(Util.dir(bulletDir), BULLET_SPEED);

        const bullet = new Bullet(this.game, this.pos, bulletVel);
        this.game.add(bullet);
    };

    heroDie(otherObject) {
        this.heroAnim = 'die';
        this.vel = [0, 0];
        this.alive = false;
        this.game.gameOver = true;
        PAIN_SOUND.play()
        this.game.gameOverMenu();
        setTimeout(this.game.gameOverMenu(), 3000);
    }

    collideWith(otherObject) {
        if (otherObject instanceof Zombie) {
            if (otherObject.deadly) this.heroDie(otherObject);
            return true
        }
    }

    move() {
        const curPos = this.pos

        const curSqr = [Math.floor(this.pos[1] / 25), Math.floor(this.pos[0] / 25)]
        const curSqrNum = this.game.map.mapPlan[curSqr[0]][curSqr[1]]

        const leftSqr = [curSqr[0], curSqr[1] - 1]
        const rightSqr = [curSqr[0], curSqr[1] + 1]
        const topSqr = [curSqr[0] - 1, curSqr[1]]
        const bottomSqr = [curSqr[0] + 1, curSqr[1]]

        let leftSqrNum = 0;
        let rightSqrNum = 0;
        let topSqrNum = 0;
        let bottomSqrNum = 0;

        if (leftSqr[1] > -1) {
            leftSqrNum = this.game.map.mapPlan[leftSqr[0]][leftSqr[1]]
        }

        if (rightSqr[1] < this.game.map.mapPlan[0].length) {
            rightSqrNum = this.game.map.mapPlan[rightSqr[0]][rightSqr[1]]
        }

        if (topSqr[0] > -1) {
            topSqrNum = this.game.map.mapPlan[topSqr[0]][topSqr[1]]
        }

        if (bottomSqr[0] < this.game.map.mapPlan.length) {
            bottomSqrNum = this.game.map.mapPlan[bottomSqr[0]][bottomSqr[1]]
        }

        const walkableTiles = [10, 11, 12, 13, 14, 15, 16, 17, 18, 40, 20, 21, 22, 23, 24, 25, 26, 27, 28]

        if (this.moveRight && walkableTiles.includes(rightSqrNum)) {
            this.pos[0] += this.heroSpeed;
        }

        if (this.moveLeft && walkableTiles.includes(leftSqrNum)) {
            this.pos[0] -= this.heroSpeed;
        }

        if (this.moveUp && walkableTiles.includes(topSqrNum)) {
            this.pos[1] -= this.heroSpeed;
        }

        if (this.moveDown && walkableTiles.includes(bottomSqrNum)) {
            this.pos[1] += this.heroSpeed;
        }

    }

}

export default Hero;
