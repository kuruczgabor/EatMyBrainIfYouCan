const Util = {

  // Normalize the length of the vector to 1, maintaining direction.
  dir(vec) {
    const norm = Util.norm(vec);
    return Util.scale(vec, 1 / norm);
  },
  // Find distance between two points.
  dist(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  },
  // Find the length of the vector.
  norm(vec) {
    return Util.dist([0, 0], vec);
  },
  // Return a randomly oriented vector with the given length.
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  // Find the position of the cursor
  // findCursorCoords(event) {

  //   let canvas = document.getElementById("game-canvas");
  //   let canvasLeft = 0;
  //   let canvasTop = 0;
  //   let xPos;
  //   let yPos;

  //   while (canvas.offsetParent) {
  //     canvasLeft += canvas.offsetLeft;
  //     canvasTop += canvas.offsetTop;
  //     canvas = canvas.offsetParent;
  //   }

  //   xPos = window.event.x - canvasLeft
  //   yPos = window.event.y - canvasTop

  //   return [xPos, yPos]
  // }

  findCursorCoords(event) {

    let canvas = document.getElementById("game-canvas");
    let canvasLeft = 0;
    let canvasTop = 0;
    let xPos;
    let yPos;

    // debugger

    while (canvas.offsetParent) {
      // debugger 
      canvasLeft += canvas.offsetLeft;
      canvasTop += canvas.offsetTop;
      // debugger
      canvas = canvas.offsetParent;
    }
    // debugger

    xPos = window.event.x - canvasLeft
    yPos = window.event.y - canvasTop
    // xPos = window.event.x 
    // yPos = window.event.y

    return [xPos, yPos]
  }
};

export default Util;