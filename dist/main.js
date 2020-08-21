/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nconst BULLET_IMAGE = new Image();\nBULLET_IMAGE.src = \"./assets/bullet/bullet_0001.png\";\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n\nclass Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(game, pos, vel) {\n        super(game, pos, vel)\n        this.image = BULLET_IMAGE;\n        this.height = 20;\n        this.width = 20;\n\n        // this.isWrappable = false;\n    }\n\n    // move(timeDelta) {\n\n    //     const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n    //         offsetX = this.vel[0] * velocityScale,\n    //         offsetY = this.vel[1] * velocityScale;\n\n    //     this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n    //     if (this.game.isOutOfBounds(this.pos)) {\n    //         if (this.isWrappable) {\n    //             this.vel = [0, 0]\n    //         } else {\n    //             this.remove();\n    //         }\n    //     }\n    // };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _zombie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zombie */ \"./src/zombie.js\");\n\n\n\n\t\nconst GAME_BG_COLOR = \"#363636\";\nconst GAME_DIM_X = 1200;\nconst GAME_DIM_Y = 600;\n// const GAME_FPS = 32;\nconst HERO_RADIUS = 15;\n\nclass Game {\n\n    constructor() {\n        this.heroes = [];\n        this.bullets = [];\n        this.zombies = [];\n        this.addHero();\n        this.addZombie();\n\n        this.gameDimX = GAME_DIM_X;\n        this.gameDimY = GAME_DIM_Y;\n    }\n\n    add(object) {\n        if (object instanceof _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n            this.bullets.push(object);\n        } else if (object instanceof _hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            this.heroes.push(object);\n        } else if (object instanceof _zombie__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n            this.zombies.push(object);\n        }\n    };\n\n    addHero() {\n        let that = this\n        const hero = new _hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"](that)\n        this.add(hero);\n        return hero;\n    };\n\n    addZombie() {\n        let that = this\n        const zombie = new _zombie__WEBPACK_IMPORTED_MODULE_2__[\"default\"](that, [800, 300])\n        this.add(zombie)\n        return zombie;\n    }\n\n    allObjects() {\n        return [].concat(this.heroes, this.bullets, this.zombies);\n    };\n\n    draw(ctx) {\n        ctx.clearRect(0, 0, GAME_DIM_X, GAME_DIM_Y);\n        ctx.fillStyle = GAME_BG_COLOR;\n        ctx.fillRect(0, 0, GAME_DIM_X, GAME_DIM_Y);\n\n        this.allObjects().forEach(function (object) {\n            object.draw(ctx);\n        });\n    };\n\n    isOutOfBounds(pos) {\n        // return (pos[0] < 0) || (pos[1] < 0) ||\n        //     (pos[0] > GAME_DIM_X) || (pos[1] > GAME_DIM_Y);\n        return (pos[0] < HERO_RADIUS) || (pos[1] < HERO_RADIUS) ||\n            (pos[0] > GAME_DIM_X - HERO_RADIUS) || (pos[1] > GAME_DIM_Y - HERO_RADIUS);\n    };\n\n    moveObjects(delta) {\n        this.allObjects().forEach((object) => {\n            object.move(delta);\n        });\n        // this.heroes[0].moveHero()\n\n        // this.zombies.forEach((zombie) => {\n        //     zombie.move(delta)\n        // })\n\n        // this.bullets.forEach((bullet) => {\n        //     bullet.move(delta)\n        // })\n\n        // this.heroes[0].move()\n\n    };\n\n    animateObjects() {\n        this.heroes[0].heroAnimate()\n        this.zombies[0].zombieAnimate()\n    }\n\n    remove(object) {\n        if (object instanceof _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n            this.bullets.splice(this.bullets.indexOf(object), 1);\n        } else if (object instanceof _hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            this.heroes.splice(this.heroes.indexOf(object), 1);\n        } else if (object instanceof _zombie__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n            this.zombies.splice(this.zombies.indexOf(object), 1);\n        } \n    };\n\n    checkCollisions() {\n        const allObjects = [].concat(this.heroes, this.bullets, this.zombies);\n        for (let i = 0; i < allObjects.length; i++) {\n            for (let j = 0; j < allObjects.length; j++) {\n                const object1 = allObjects[i];\n                const object2 = allObjects[j];\n\n                if (object1.isCollidedWith(object2)) {\n                    const collision = object1.collideWith(object2);\n                    if (collision) return;\n                }\n            }\n        }\n    }\n\n    changeZombieVel() {\n        if (this.zombies.length > 0) {\n            if (this.zombies[0].zombieAnim !== 'die') {\n                this.zombies[0].vel = this.zombies[0].findAttackVel()\n            }\n        }\n    }\n\n    step(delta) {\n        this.moveObjects(delta);\n        this.animateObjects();\n        this.checkCollisions();\n        this.changeZombieVel();\n    };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\n\nconst GAME_VIEW_MOVES = {\n    w: [0, -2],\n    a: [-2, 0],\n    s: [0, 2],\n    d: [2, 0],\n};\n\nclass GameView {\n\n    constructor(game, ctx) {\n        this.game = game;\n        this.ctx = ctx;\n    };\n\n    bindKeyHandlers() {\n\n        const hero = this.game.heroes[0];\n        let that = this;\n\n        document.addEventListener(\"mousemove\", (e) => {\n            const mousePos = _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findCursorCoords();\n            const angleDeg = -Math.atan2(mousePos[0] - hero.pos[0], mousePos[1] - hero.pos[1]) * 180 / Math.PI;\n            hero.angle = angleDeg\n        })\n\n        document.addEventListener(\"mousedown\", (e) => {\n            const mouseCoor = _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findCursorCoords();\n            if (hero.heroAnim !== 'shoot') hero.heroAnim = 'shoot'\n            hero.fireBullet(mouseCoor)\n        })\n\n        document.addEventListener(\"keydown\", (e) => {\n            let keyCode = e.which || window.event.keyCode\n\n            if (hero.heroAnim !== 'walk') hero.heroAnim = 'walk'\n        \n            // if (keyCode === 65) hero.power(GAME_VIEW_MOVES[\"a\"])\n            // if (keyCode === 68) hero.power(GAME_VIEW_MOVES[\"d\"])           \n            // if (keyCode === 87) hero.power(GAME_VIEW_MOVES[\"w\"])     \n            // if (keyCode === 83) hero.power(GAME_VIEW_MOVES[\"s\"])\n\n            if (keyCode === 65) hero.moveLeft = true;\n            if (keyCode === 68) hero.moveRight = true;\n            if (keyCode === 87) hero.moveUp = true;\n            if (keyCode === 83) hero.moveDown = true;\n        })\n\n        document.addEventListener(\"keyup\", function (e) {\n            let keyCode = e.which || window.event.keyCode;\n\n            if (hero.heroAnim !== 'idle') hero.heroAnim = 'idle'\n\n            // if (keyCode === 65 || keyCode === 68) that.game.heroes[0].vel[0] = 0 \n            // if (keyCode === 87 || keyCode === 83) that.game.heroes[0].vel[1] = 0\n\n            if (keyCode === 65) hero.moveLeft = false;\n            if (keyCode === 68) hero.moveRight = false;\n            if (keyCode === 87) hero.moveUp = false;\n            if (keyCode === 83) hero.moveDown = false;\n        })\n\n    };\n\n    start() {\n        this.bindKeyHandlers();\n        this.lastTime = 0;\n\n        requestAnimationFrame(this.animate.bind(this));\n    };\n\n    animate(time) {\n        const timeDelta = time - this.lastTime;\n\n        this.game.step(timeDelta);\n        this.game.draw(this.ctx);\n        this.lastTime = time;\n\n        requestAnimationFrame(this.animate.bind(this));\n    };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _zombie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zombie */ \"./src/zombie.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\n\nconst HERO_MAX_SPEED = 2;\nconst BULLET_SPEED = 15;\nconst HERO_IMAGE = new Image();\nHERO_IMAGE.src = './assets/soldier/idle/Idle_gun_000.png';\n\nclass Hero extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(game) {\n        super(game)\n        this.pos = [150, 150];\n        this.height = 50;\n        this.width = 50;\n        this.angle = 0;\n        this.vel = [0, 0];\n\n        this.heroSpeed = 2;\n\n        this.moveUp = false;\n        this.moveDown = false;\n        this.moveRight = false;\n        this.moveLeft = false;\n\n        this.image = HERO_IMAGE;\n        this.heroAnim = 'idle';\n        this.frameCounter = 0;\n\n        this.idleFrameChanger = 8;\n        this.walkFrameChanger = 8;\n        this.shootFrameChanger = 8;\n    }\n\n    heroAnimate() {\n        if (this.heroAnim === \"idle\") {\n            this.heroIdleAnim()\n        } else if (this.heroAnim === \"walk\") {\n            this.heroWalkAnim()\n        } else if (this.heroAnim === \"shoot\") {\n            this.heroShootAnim()\n        } else if (this.heroAnim === \"die\") {\n            this.heroDieAnim()\n        }\n        this.frameCounter++\n        if (this.frameCounter > 10) this.frameCounter = 0\n\n        // console.log(this.vel)\n    }\n\n    heroIdleAnim() {\n        if (this.frameCounter === this.idleFrameChanger) {\n            if (HERO_IMAGE.src.split('/')[9] !== 'idle') HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_000.png'\n            let curFrameSrc = HERO_IMAGE.src;\n            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))\n            curFrameNum += 1\n            if (curFrameNum === 8) curFrameNum = 0\n            HERO_IMAGE.src = './assets/soldier/idle/Idle_gun_00' + curFrameNum.toString() + '.png'\n            this.frameCounter = 0\n        }\n    }\n\n    heroWalkAnim() {\n        if (this.frameCounter === this.walkFrameChanger) {\n            if (HERO_IMAGE.src.split('/')[9] !== 'walk') HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_000.png'\n            let curFrameSrc = HERO_IMAGE.src;\n            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))\n            curFrameNum += 1\n            if (curFrameNum === 6) curFrameNum = 0\n            HERO_IMAGE.src = './assets/soldier/walk/Walk_gun_00' + curFrameNum.toString() + '.png'\n            this.frameCounter = 0\n        }\n    }\n\n    heroShootAnim() {\n        if (this.frameCounter === this.shootFrameChanger) {\n            if (HERO_IMAGE.src.split('/')[9] !== 'shoot') HERO_IMAGE.src = './assets/soldier/shoot/Gun_Shot_000.png'\n            let curFrameSrc = HERO_IMAGE.src;\n            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))\n            curFrameNum += 1\n            if (curFrameNum < 5) {\n                HERO_IMAGE.src = './assets/soldier/shoot/Gun_Shot_00' + curFrameNum.toString() + '.png'\n            } else {\n                this.heroAnim = 'idle'\n            }\n            this.frameCounter = 0\n        }\n    }\n\n    heroDieAnim() {\n        if (HERO_IMAGE.src.split('/')[9] !== 'death') HERO_IMAGE.src = './assets/soldier/death/death_0000_Man.png'\n        let curFrameSrc = HERO_IMAGE.src;\n        let curFrameNum = parseInt(curFrameSrc.slice(-11, -8))\n        curFrameNum += 1\n        if (curFrameNum < 6) {\n            HERO_IMAGE.src = './assets/soldier/death/death_000' + curFrameNum.toString() + '_Man.png'\n        } else {\n            console.log('game over')\n        }\n    }\n\n    draw(ctx) {\n        ctx.clearRect(0, 0, ctx.width, ctx.height);\n        ctx.save();\n        ctx.translate(this.pos[0] + this.height / 10, this.pos[1] + this.width / 10);\n        ctx.rotate((Math.PI / 180) * this.angle)\n        ctx.drawImage(this.image, -(this.width / 2), -(this.height / 2), this.width, this.height);\n        ctx.restore();\n    };\n\n    fireBullet(mousePos) {\n        const bulletDir = [mousePos[0] - this.pos[0] - 10, mousePos[1] - this.pos[1] - 10];\n        const bulletVel = _util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].scale(_util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dir(bulletDir), BULLET_SPEED);\n\n        const bullet = new _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.game, this.pos, bulletVel);\n        this.game.add(bullet);\n    };\n\n    heroDie(otherObject) {\n        this.heroAnim = 'die'\n        this.vel = [0, 0]\n        // this.heroAnimate('die')\n        // otherObject.remove();\n    }\n\n    collideWith(otherObject) {\n        if (otherObject instanceof _zombie__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n            this.heroDie(otherObject);\n            return true\n        }\n    }\n\n    move() {\n        if ((this.pos[0] + this.heroSpeed < this.game.gameDimX - this.width / 2) && this.moveRight) this.pos[0] += this.heroSpeed;\n        if ((this.pos[0] - this.heroSpeed > 0 + this.width / 2) && this.moveLeft) this.pos[0] -= this.heroSpeed;\n        if ((this.pos[1] + this.heroSpeed < this.game.gameDimY - this.height / 2) && this.moveDown) this.pos[1] += this.heroSpeed;\n        if ((this.pos[1] - this.heroSpeed > 0 + this.height / 2) && this.moveUp) this.pos[1] -= this.heroSpeed;\n    }\n\n    // power(impulse) {\n    //     if (impulse[0] > 0 && this.vel[0] < HERO_MAX_SPEED) this.vel[0] += impulse[0]\n    //     if (impulse[0] < 0 && this.vel[0] > -HERO_MAX_SPEED) this.vel[0] += impulse[0]\n    //     if (impulse[1] > 0 && this.vel[1] < HERO_MAX_SPEED) this.vel[1] += impulse[1]\n    //     if (impulse[1] < 0 && this.vel[1] > -HERO_MAX_SPEED) this.vel[1] += impulse[1]\n    // };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\n\n//# sourceURL=webpack:///./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n\n  const cvs = document.getElementById(\"game-canvas\");\n  cvs.width = 1200;\n  cvs.height = 600;\n\n  const ctx = cvs.getContext(\"2d\");\n\n  const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const menu = new _menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game, ctx);\n  // const game = new Game();\n  // const gameView = new GameView(game, ctx);\n\n  // gameView.start();\n});\n\n// webpack --watch --mode=development\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\nclass Menu {\n\n    constructor(game, ctx) {\n        this.game = game\n        this.ctx = ctx\n\n        this.menu = document.getElementById('game-menu');\n        this.newGameTrigger = document.getElementById('new-game');\n        this.footerTitle = document.getElementById('game-footer-title');\n\n        this.newGame = this.newGame.bind(this);\n        this.gameStarter()\n    }\n\n    gameStarter() {\n        this.newGameTrigger.addEventListener('click', this.newGame)\n    }\n\n    newGame() {\n        this.menu.classList.add('hide')\n        this.footerTitle.classList.remove('hide')\n        const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.game, this.ctx);\n        gameView.start();\n    }\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n\nclass MovingObject {\n\n    constructor(game, pos, vel, height, width, image, angle) {\n        this.game = game;\n        this.pos = pos;\n        this.vel = vel;\n        this.height = height;\n        this.width = width;\n        this.image = image;\n        this.angle = angle;\n        this.isWrappable = true;\n    }\n\n    draw(ctx) {\n        ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);\n    }\n\n    collideWith() {\n\n    }\n\n    isCollidedWith(otherObject) {\n        const centerDistance = _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dist(this.pos, otherObject.pos);\n        return centerDistance < (this.width / 2 + otherObject.width / 2);\n    }\n\n    move(timeDelta) {\n\n        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n            offsetX = this.vel[0] * velocityScale,\n            offsetY = this.vel[1] * velocityScale;\n\n        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n        if (this.game.isOutOfBounds(this.pos)) {\n            if (this.isWrappable) {\n                this.vel = [0,0]\n            } else {\n                this.remove();\n            }\n        }\n    };\n\n    remove() {\n        this.game.remove(this);\n    };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Util = {\n\n  // Normalize the length of the vector to 1, maintaining direction.\n  dir(vec) {\n    const norm = Util.norm(vec);\n    return Util.scale(vec, 1 / norm);\n  },\n\n  // Find distance between two points.\n  dist(pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n  },\n\n  // Find the length of the vector.\n  norm(vec) {\n    return Util.dist([0, 0], vec);\n  },\n\n  // Return a randomly oriented vector with the given length.\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n  \n  // Find the position of the cursor\n  findCursorCoords(event) {\n\n    let canvas = document.getElementById(\"game-canvas\");\n    let gameArea = canvas.getBoundingClientRect();\n    let xPos = window.event.x - gameArea.left;\n    let yPos = window.event.y - gameArea.top;\n\n    return [xPos, yPos]\n\n  }\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ }),

/***/ "./src/zombie.js":
/*!***********************!*\
  !*** ./src/zombie.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\n\n\n\nconst ZOMBIE_ATTACK_SPEED = 1;\nconst ZOMBIE_IMAGE = new Image();\nZOMBIE_IMAGE.src = \"./assets/zombie/walk/Walk_000.png\";\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n\nclass Zombie extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(game, pos) {\n        super(game)\n        this.pos = pos || [800, 400];\n        this.height = 50;\n        this.width = 50;\n        this.angle = 0;\n        this.vel = [0, 0];\n\n        this.image = ZOMBIE_IMAGE;\n        this.zombieAnim = 'walk';\n        this.frameCounter = 0;\n\n        this.walkFrameChanger = 8;\n        this.dieFrameChanger = 8;\n    }\n\n    zombieAnimate() {\n\n        if (this.zombieAnim === \"walk\") {\n            this.zombieWalkAnim()\n        } else if (this.zombieAnim === \"die\") {\n            this.zombieDieAnim()\n        }\n\n        this.frameCounter++\n        if (this.frameCounter > 10) this.frameCounter = 0\n\n    }\n\n    zombieWalkAnim() {\n        if (this.frameCounter === this.walkFrameChanger) {\n            let curFrameSrc = ZOMBIE_IMAGE.src;\n            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))\n            curFrameNum += 1\n            if (curFrameNum === 9) curFrameNum = 0\n            ZOMBIE_IMAGE.src = './assets/zombie/walk/Walk_00' + curFrameNum.toString() + '.png'\n            this.frameCounter = 0;\n        }\n    }\n\n    zombieDieAnim() {\n        if (this.frameCounter === this.dieFrameChanger) {\n            if (ZOMBIE_IMAGE.src.split('/')[9] !== 'death') ZOMBIE_IMAGE.src = './assets/zombie/death/Death_000.png'\n            let curFrameSrc = ZOMBIE_IMAGE.src;\n            let curFrameNum = parseInt(curFrameSrc.slice(-7, -4))\n            curFrameNum += 1\n            if (curFrameNum < 6) {\n                ZOMBIE_IMAGE.src = './assets/zombie/death/Death_00' + curFrameNum.toString() + '.png'\n            } else {\n                console.log('zombie died')\n            }\n        }\n    }\n\n    draw(ctx) {\n\n        if (this.zombieAnim !== 'die') {\n            this.angle = -Math.atan2(this.game.heroes[0].pos[0] - this.pos[0], this.game.heroes[0].pos[1] - this.pos[1]) * 180 / Math.PI;\n        }\n\n        ctx.clearRect(0, 0, ctx.width, ctx.height);\n        ctx.save();\n        ctx.translate(this.pos[0] + this.width / 2, this.pos[1] + this.height / 2);\n        ctx.rotate((Math.PI / 180) * this.angle)\n        ctx.drawImage(this.image, -(this.width / 2), -(this.height / 2), this.width, this.height);\n        ctx.restore();\n\n    }\n\n    zombieDie(otherObject) {\n        this.zombieAnim = 'die'\n        this.vel = [0,0]\n        // this.zombieAnimate()\n        otherObject.remove();\n    }\n\n    collideWith(otherObject) {\n        if (otherObject instanceof _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n            this.zombieDie(otherObject);\n            return true\n        }\n    }\n\n    findAttackVel() {\n        const attackDir = [this.game.heroes[0].pos[0] - this.pos[0],\n                           this.game.heroes[0].pos[1] - this.pos[1]];\n        const attackVel = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].scale(_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dir(attackDir), ZOMBIE_ATTACK_SPEED);\n        return attackVel;\n    }\n\n    // move(timeDelta) {\n\n    //     const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n    //         offsetX = this.vel[0] * velocityScale,\n    //         offsetY = this.vel[1] * velocityScale;\n\n    //     this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n    //     if (this.game.isOutOfBounds(this.pos)) {\n    //         if (this.isWrappable) {\n    //             this.vel = [0, 0]\n    //         } else {\n    //             this.remove();\n    //         }\n    //     }\n    // };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Zombie);\n\n//# sourceURL=webpack:///./src/zombie.js?");

/***/ })

/******/ });