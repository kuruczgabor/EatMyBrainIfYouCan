import Game from "./game";
import GameView from "./game_view"

window.addEventListener("DOMContentLoaded", () => {

    const cvs = document.getElementById("game-canvas");
    const ctx = cvs.getContext("2d");

    const game = new Game();
    const gameView = new GameView(game, ctx);

    gameView.start();

});