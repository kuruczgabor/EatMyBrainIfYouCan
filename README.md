# Eat My Brain If You Can

<img align="right" width="300" height="300" src="/assets/readme/eatmybrain_image.png">

Have you ever thought about a post-apocalyptic world full of mindless, brain-eating zombies? You are not alone! ‘Eat My Brain If You Can’ allows you to experience it and test your survival skills in a cruel world full of monsters. Get ready to protect yourself from the hungry zombies as long as possible!

[PLAY NOW](https://kuruczgabor.github.io/EatMyBrainIfYouCan/)

# Technologies

- JavaScript
- HTML
- CSS

# Solutions

### Calculating the bullet velocity 

To calculate the velocity of the bullet I had to get the position of our hero, the position of the target (which is basically the position of the cursor), and the bullet speed. Accessing the position of the hero was easy as the hero object was engineered to have it's 'pos' property, the bullet speed is represented by an integer which is chosen based on the most appropriate visual effect of the game. 

<img height="300" src="/assets/readme/shooting.gif">

#### To get the position of the cursor I wrote the following function:

```javascript
findCursorCoords(event) {
    let canvas = document.getElementById("game-canvas");
    let gameArea = canvas.getBoundingClientRect();
    let xPos = window.event.x - gameArea.left;
    let yPos = window.event.y - gameArea.top;

    return [xPos, yPos]
}
  ```
#### To calculate the velocity I used the following function:
```javascript
const bulletVel = Util.scale(
  Util.dir(bulletDir), 
  BULLET_SPEED
);
```
#### The function above uses values as results of the following helper methods:

Bullet direction:
```javascript
const bulletDir = [cursorPos[0] - heroPos[0], cursorPos[1] - heroPos[1]];
```

Normalized length of the vector to 1, maintaining direction:
```javascript
dir(vec) {
  const norm = Util.norm(vec);
  return Util.scale(vec, 1 / norm);    
}
```

Length of the vector:
```javascript
norm(vec) {     
  return Util.dist([0, 0], vec);
},
```

Distance between two points:
```javascript
dist(pos1, pos2) {     
  return Math.sqrt(
    Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
  );
},
```
Once I have the bulletVel I just need to initialize a new Bullet object instance every time the user clicks on the mouse:

```javascript
const bullet = new Bullet(this.game, this.pos, bulletVel);
```

### Animating objects

To avoid lagging I preload the sprites before the game is started. The GameView class is responsible to handle the basic game logic, like starting the game, animating objects, changing levels and it also binds the basic key handlers. If the user presses an arrow (or 'wasd') it sets one of the heroes' moving property to 'true' which is responsible to move our character on the map. If a button is pressed is also sets the heroAnim property to 'walk' which changes the animation loop and the source of the hero images. By releasing the button the character stops and the animation switches back to 'idle' 

```javascript

class GameView {

    bindKeyHandlers() {

        document.addEventListener("keydown", (e) => {
            let keyCode = e.which || window.event.keyCode

            if (hero.heroAnim !== 'walk') hero.heroAnim = 'walk'

            if (keyCode === 65 || keyCode === 37) hero.moveLeft = true;
            if (keyCode === 68 || keyCode === 39) hero.moveRight = true;
            if (keyCode === 87 || keyCode === 38) hero.moveUp = true;
            if (keyCode === 83 || keyCode === 40) hero.moveDown = true;
        })
        
        document.addEventListener("keyup", function (e) {
            let keyCode = e.which || window.event.keyCode;

            if (hero.heroAnim !== 'idle') hero.heroAnim = 'idle'

            if (keyCode === 65 || keyCode === 37) hero.moveLeft = false;
            if (keyCode === 68 || keyCode === 39) hero.moveRight = false;
            if (keyCode === 87 || keyCode === 38) hero.moveUp = false;
            if (keyCode === 83 || keyCode === 40) hero.moveDown = false;
        })

}
```
The basic game animation loop would be too fast to change character sprites so I had to make sure to slow it down. The "walkFrameChanger = 8" below shows that every 8th game frame will change the image of the hero which results a smooth walking animation. I had to use a different frameChanger number for idle, walk, shoot and die as well and I got the perfect number with testing.

The heroAnimate function is called every game frame and it checks if our character is supposed to idle, walk, shoot or die and based on this it calls a method that is responsible for changing the images.

```javascript
class Hero extends MovingObject {

    constructor(game) {
        super(game)
        ...
        this.image = HERO_IMAGE;
        this.heroAnim = 'idle';
        this.frameCounter = 0;
        this.walkFrameChanger = 8;
        ...
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
    }
    
    heroWalkAnim() {
        if (this.frameCounter === this.walkFrameChanger) {
            if (HERO_IMAGE.src.split('/')[HERO_IMAGE.src.split('/').length - 2] !== 'walk') HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_000.png'
            let curFrameSrc = HERO_IMAGE.src;
            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))
            curFrameNum += 1
            if (curFrameNum === 6) curFrameNum = 0
            HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_00' + curFrameNum.toString() + '.png'
            this.frameCounter = 0
        }
    }
```

### Level changing loop

The game is engineered to have an infinite amount of levels. Be careful, because the number of zombies is increasing level by level and they are also getting faster :)

The isLevelCompleted method is responsible to check if there are deadly zombies on the map. If there are none, it sets the Game's levelCompleted property to 'true'.

```javascript
    class Game {
        isLevelCompleted() {
            let noZombiesOnMap = true;
            this.zombies.forEach((zombie) => {
                if (zombie.deadly) noZombiesOnMap = false;
            });
            if (noZombiesOnMap && !this.levelChanged) {
                this.levelCompleted = true;
                this.levelChanged = true; 
            }
        }
    }
```
<p align="center">
    <img height="400" src="/assets/readme/levelchange.gif">
</p>

The GameView's selectLevel method checks if a level has started or completed and based on that triggers popup windows to show which level was completed and which level is about to start. The startnewlevel method sets the properties back and calls the method responsible for adding zombies to the map based on the level number 


```javascript
    selectLevel() {
        if (!this.game.levelStarted) {
            this.levelStarterWindow()
            this.game.levelStarted = true
        }
        if (this.game.levelCompleted && !this.game.newLevelStarted) {
            this.levelCompleterWindow()
            this.game.zombies = []
        }
    }

    levelStarterWindow() {
      ...
    }

    levelCompleterWindow() {
      ...
      this.startNewLevel();
    }

    startNewLevel() {
        this.game.levelChanged = false; 
        this.game.levelCompleted = false;
        this.game.newLevelStarted = true;
        this.level ++;
        setTimeout(() => {
            this.game.levelStarted = false;
            this.game.addZombiesBasedOnLevel()
        }, 3000)
        
    }
```

# Plans for the Future
- Update the A* algorithm to have smoother zombie movements
- Add scoreboard
- Add more weapons, characters, and superpowers
- Add additional maps

