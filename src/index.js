import Menu from "./menu.js";

window.addEventListener("DOMContentLoaded", function () {

  const cvs = document.getElementById("game-canvas");
  cvs.width = 1200;
  cvs.height = 600;

  const ctx = cvs.getContext("2d");

  const menu = new Menu(ctx);
});

// to start development
// webpack --watch --mode=development