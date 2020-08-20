import Game from "./game.js";
import GameView from "./game_view";

window.addEventListener("DOMContentLoaded", function () {

  const cvs = document.getElementById("game-canvas");
  cvs.width = 1000;
  cvs.height = 600;

  const ctx = cvs.getContext("2d");

  const game = new Game();
  const gameView = new GameView(game, ctx);

  gameView.start();
});

// webpack --watch --mode=development