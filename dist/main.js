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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nconst BULLET_RADIUS = 2;\n\nclass Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(game, pos, vel, color, radius) {\n        super(game, pos, vel, color, radius)\n        this.radius = BULLET_RADIUS\n        this.isWrappable = false;\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _zombie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zombie */ \"./src/zombie.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\n\nconst GAME_BG_COLOR = \"#7CFC00\";\nconst GAME_DIM_X = 1000;\nconst GAME_DIM_Y = 600;\nconst GAME_FPS = 32;\nconst HERO_RADIUS = 15;\n\nclass Game {\n\n    constructor() {\n        this.heroes = [];\n        this.bullets = [];\n        this.zombies = [];\n        this.addHero();\n        this.addZombie();\n    }\n\n    add(object) {\n        if (object instanceof _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n            this.bullets.push(object);\n        } else if (object instanceof _hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            this.heroes.push(object);\n        } else if (object instanceof _zombie__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n            this.zombies.push(object);\n        } else {\n            throw new Error(\"unknown type of object\");\n        }\n    };\n\n    addHero() {\n        let that = this\n\n        const hero = new _hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n            that, [150, 150]\n        )\n\n        this.add(hero);\n        return hero;\n    };\n\n    addZombie() {\n        let that = this\n\n        // debugger\n\n        const zombie = new _zombie__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n            that\n        )\n\n        // debugger\n\n        this.add(zombie)\n        return zombie;\n    }\n\n    allObjects() {\n        return [].concat(this.heroes, this.bullets, this.zombies);\n    };\n\n    checkCollisions() {\n        const allObjects = this.allObjects();\n        for (let i = 0; i < allObjects.length; i++) {\n            for (let j = 0; j < allObjects.length; j++) {\n                const obj1 = allObjects[i];\n                const obj2 = allObjects[j];\n\n                if (obj1.isCollidedWith(obj2)) {\n                    const collision = obj1.collideWith(obj2);\n                    if (collision) return;\n                }\n            }\n        }\n    };\n\n    draw(ctx) {\n        ctx.clearRect(0, 0, GAME_DIM_X, GAME_DIM_Y);\n        ctx.fillStyle = GAME_BG_COLOR;\n        ctx.fillRect(0, 0, GAME_DIM_X, GAME_DIM_Y);\n\n        this.allObjects().forEach(function (object) {\n            object.draw(ctx);\n        });\n    };\n\n    isOutOfBounds(pos) {\n        // return (pos[0] < 0) || (pos[1] < 0) ||\n        //     (pos[0] > GAME_DIM_X) || (pos[1] > GAME_DIM_Y);\n        return (pos[0] < HERO_RADIUS) || (pos[1] < HERO_RADIUS) ||\n            (pos[0] > GAME_DIM_X - HERO_RADIUS) || (pos[1] > GAME_DIM_Y - HERO_RADIUS);\n    };\n\n    moveObjects(delta) {\n        this.allObjects().forEach(function (object) {\n            object.move(delta);\n        });\n    };\n\n    randomPosition() {\n        return [\n            GAME_DIM_X * Math.random(),\n            GAME_DIM_Y * Math.random()\n        ];\n    };\n\n    remove(object) {\n        if (object instanceof _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n            this.bullets.splice(this.bullets.indexOf(object), 1);\n        } else if (object instanceof _hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            this.heroes.splice(this.heroes.indexOf(object), 1);\n        } else {\n            throw new Error(\"unknown type of object\");\n        }\n    };\n\n    changeZombieVel() {\n        this.zombies[0].vel = this.zombies[0].findAttackVel()\n    }\n\n    step(delta) {\n        this.moveObjects(delta);\n        this.changeZombieVel();\n        this.checkCollisions();\n    };\n\n    // wrap(pos) {\n    //     return [\n    //         Util.wrap(pos[0], GAME_DIM_X), Util.wrap(pos[1], GAME_DIM_Y)\n    //     ];\n    // };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GAME_VIEW_MOVES = {\n    w: [0, -2],\n    a: [-2, 0],\n    s: [0, 2],\n    d: [2, 0],\n};\n\nclass GameView {\n\n    constructor(game, ctx) {\n        this.game = game;\n        this.ctx = ctx;       \n    };\n\n    findCursorCoords(event) {\n\n        let canvas = document.getElementById(\"game-canvas\");\n        let canvasLeft = 0;\n        let canvasTop = 0;\n        let xPos;\n        let yPos;\n\n        while (canvas.offsetParent) {\n            canvasLeft += canvas.offsetLeft;\n            canvasTop += canvas.offsetTop;\n            canvas = canvas.offsetParent;\n        }\n\n        xPos = window.event.x - canvasLeft\n        yPos = window.event.y - canvasTop\n\n        return [xPos, yPos]\n    }\n\n    bindKeyHandlers() {\n\n        const hero = this.game.heroes[0];\n        let that = this;\n\n        document.addEventListener(\"mousedown\", (e) => {\n            const mouseCoor = this.findCursorCoords();\n            hero.fireBullet(mouseCoor)\n        })\n\n        document.addEventListener(\"keydown\", (e) => {\n            let keyCode = e.which || window.event.keyCode\n\n            if (keyCode === 65) hero.power(GAME_VIEW_MOVES[\"a\"])\n            if (keyCode === 68) hero.power(GAME_VIEW_MOVES[\"d\"])           \n            if (keyCode === 87) hero.power(GAME_VIEW_MOVES[\"w\"])     \n            if (keyCode === 83) hero.power(GAME_VIEW_MOVES[\"s\"])\n            \n        })\n\n        document.addEventListener(\"keyup\", function (e) {\n            let keyCode = e.which || window.event.keyCode;\n\n            if (keyCode === 65 || keyCode === 68) that.game.heroes[0].vel[0] = 0 \n            if (keyCode === 87 || keyCode === 83) that.game.heroes[0].vel[1] = 0\n        })\n\n    };\n\n    start() {\n        this.bindKeyHandlers();\n        this.lastTime = 0;\n\n        requestAnimationFrame(this.animate.bind(this));\n    };\n\n    animate(time) {\n        const timeDelta = time - this.lastTime;\n\n        this.game.step(timeDelta);\n        this.game.draw(this.ctx);\n        this.lastTime = time;\n\n        requestAnimationFrame(this.animate.bind(this));\n    };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\nconst HERO_RADIUS = 15;\nconst HERO_MAX_SPEED = 2;\n// const HERO_MAX_IMPULSE = 2\nconst BULLET_SPEED = 15;\n\nclass Hero extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(game, pos, vel, radius, color) {\n        super(game, pos)\n        this.radius = HERO_RADIUS;\n        this.vel = vel || [0, 0];\n        this.color = \"#000000\"\n    }\n\n    fireBullet(mousePos) {\n\n        const bulletDir = [mousePos[0] - this.pos[0], mousePos[1] - this.pos[1]];\n\n        const bulletVel = _util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].scale(\n            _util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dir(bulletDir),\n            BULLET_SPEED\n        );\n\n        const bullet = new _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n            this.game, this.pos, bulletVel, this.radius, this.color\n        );\n\n        this.game.add(bullet);\n    };\n\n    power(impulse) {\n\n        if (impulse[0] > 0 && this.vel[0] < HERO_MAX_SPEED) this.vel[0] += impulse[0]\n        if (impulse[0] < 0 && this.vel[0] > -HERO_MAX_SPEED) this.vel[0] += impulse[0]\n\n        if (impulse[1] > 0 && this.vel[1] < HERO_MAX_SPEED) this.vel[1] += impulse[1]\n        if (impulse[1] < 0 && this.vel[1] > -HERO_MAX_SPEED) this.vel[1] += impulse[1]\n\n    };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\n\n//# sourceURL=webpack:///./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n\n  const cvs = document.getElementById(\"game-canvas\");\n  cvs.width = 1000;\n  cvs.height = 600;\n\n  const ctx = cvs.getContext(\"2d\");\n\n  const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx);\n\n  gameView.start();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n\nclass MovingObject {\n\n    constructor(game, pos, vel, radius, color) {\n        this.game = game;\n        this.pos = pos;\n        this.vel = vel;\n        this.color = color;\n        this.radius = radius;\n        // this.color = color;\n        this.isWrappable = true;\n    }\n\n    collideWith(otherObject) {\n        // default do nothing\n    };\n\n    draw(ctx) {\n        ctx.fillStyle = this.color;\n\n        ctx.beginPath();\n        ctx.arc(\n            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n        );\n        ctx.fill();\n    };\n\n    isCollidedWith(otherObject) {\n        // const centerDist = Util.dist(this.pos, otherObject.pos);\n        // return centerDist < (this.radius + otherObject.radius);\n    };\n\n    move(timeDelta) {\n\n        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n            offsetX = this.vel[0] * velocityScale,\n            offsetY = this.vel[1] * velocityScale;\n\n        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n        if (this.game.isOutOfBounds(this.pos)) {\n            if (this.isWrappable) {\n                // this.pos = this.game.wrap(this.pos);\n                this.vel = [0,0]\n            } else {\n                this.remove();\n            }\n        }\n    };\n\n    remove() {\n        this.game.remove(this);\n    };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Util = {\n\n  // Normalize the length of the vector to 1, maintaining direction.\n  dir(vec) {\n    const norm = Util.norm(vec);\n    return Util.scale(vec, 1 / norm);\n  },\n  // Find distance between two points.\n  dist(pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n  },\n  // Find the length of the vector.\n  norm(vec) {\n    return Util.dist([0, 0], vec);\n  },\n  // Return a randomly oriented vector with the given length.\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n  inherits(ChildClass, BaseClass) {\n    // ChildClass.prototype = Object.create(BaseClass.prototype);\n    // ChildClass.prototype.constructor = ChildClass;\n  },\n\n  wrap(coord, max) {\n    if (coord < 0) {\n      return max - (coord % max);\n    } else if (coord > max) {\n      return coord % max;\n    } else {\n      return coord;\n    }\n  }\n};\n\n// module.exports = Util;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ }),

/***/ "./src/zombie.js":
/*!***********************!*\
  !*** ./src/zombie.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nconst ZOMBIE_ATTACK_SPEED = 1;\nconst ZOMBIE_RADIUS = 20;\n\nclass Zombie extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(game, pos, vel, radius, color) {\n        super(game)\n        this.game = game;\n        this.pos = pos || [400, 400];\n        this.radius = ZOMBIE_RADIUS;\n        this.color = \"#15552D\";\n        this.vel = vel || [0,0]\n        // this.image = Image new\n    }\n\n    findAttackVel() {\n\n        const attackDir = [this.game.heroes[0].pos[0] - this.pos[0],\n                           this.game.heroes[0].pos[1] - this.pos[1]];\n\n\n        const attackVel = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].scale(\n            _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dir(attackDir),\n            ZOMBIE_ATTACK_SPEED\n        );\n\n        return attackVel;\n\n    }\n    \n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Zombie);\n\n//# sourceURL=webpack:///./src/zombie.js?");

/***/ })

/******/ });