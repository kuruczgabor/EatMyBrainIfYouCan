# Eat My Brain If You Can

Have you ever thought about a post-apocalyptic world full of mindless, brain-eating zombies? You are not alone! ‘Eat My Brain If You Can’ allows you to experience it and test your survival skills in a cruel world full of monsters. Get the best weapons and protect yourself from the hungry zombies as long as possible.


### Calculating the bullet velocity 

To calculate the velocity of the bullet I had to get the position of the hero, the position of the target (which is basically the position of the cursor) and the bullet speed. Accessing the position of the hero was easy as the hero object was enginered to have its 'pos' attribute, the bullet speed is represented by an integer which is choosen based on the most appropriate visual effect of the game. To get the position of the cursor I wrote the following function:

```
findCursorCoords(event) {

  let canvas = document.getElementById("game-canvas");
  let canvasLeft = 0;
  let canvasTop = 0;
  let xPos;
  let yPos;

  while (canvas.offsetParent) {
    canvasLeft += canvas.offsetLeft;
    canvasTop += canvas.offsetTop;
    canvas = canvas.offsetParent;
  }

  xPos = window.event.x - canvasLeft
  yPos = window.event.y - canvasTop

  return [xPos, yPos]
}
  ```
#### To calculate the velocity I used the following function:
```
const bulletVel = Util.scale(
  Util.dir(bulletDir), 
  BULLET_SPEED
);
```
#### The function above uses attributes as results of the following helper methods:

Bullet direction:
```
const bulletDir = [cursorPos[0] - heroPos[0], cursorPos[1] - heroPos[1]];
```

Normalized length of the vector to 1, maintaining direction:
```
dir(vec) {
  const norm = Util.norm(vec);
  return Util.scale(vec, 1 / norm);    
}
```

Length of the vector:
```
norm(vec) {     
  return Util.dist([0, 0], vec);
},
```

Distance between two points:
```
dist(pos1, pos2) {     
  return Math.sqrt(
    Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
  );
},
```
Example:
```
const heroPos = [200, 200]
const cursorPos = [350, 300]
const BULLET_SPEED = 15

const bulletDir = [150, 100]

![bulletVel calculation](/assets/github/vector_calc_graph.png)

