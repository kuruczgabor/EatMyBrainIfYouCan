const GAME_BG_COLOR = "#363636";
const GAME_DIM_X = 1200;
const GAME_DIM_Y = 600;

const MIDDLE_GRASS = new Image();
const TOP_GRASS = new Image();
const BOTTOM_GRASS = new Image();
const RIGHT_GRASS = new Image();
const LEFT_GRASS = new Image();
const TOP_LEFT_GRASS = new Image();
const TOP_RIGHT_GRASS = new Image();
const BOTTOM_LEFT_GRASS = new Image();
const BOTTOM_RIGHT_GRASS = new Image();
MIDDLE_GRASS.src = './assets/tiles/grass_tiles_0000_Layer-55.png';
TOP_GRASS.src = './assets/tiles/grass_tiles_0003_Layer-52.png';
BOTTOM_GRASS.src = './assets/tiles/grass_tiles_0001_Layer-54.png';
RIGHT_GRASS.src = './assets/tiles/grass_tiles_0002_Layer-53.png';
LEFT_GRASS.src = './assets/tiles/grass_tiles_0006_Layer-49.png';
TOP_LEFT_GRASS.src = './assets/tiles/grass_tiles_0012_Layer-43.png';
TOP_RIGHT_GRASS.src = './assets/tiles/grass_tiles_0011_Layer-44.png';
BOTTOM_LEFT_GRASS.src = './assets/tiles/grass_tiles_0009_Layer-46.png';
BOTTOM_RIGHT_GRASS.src = './assets/tiles/grass_tiles_0010_Layer-45.png';


const MIDDLE_ASPHALT = new Image();
const TOP_ASPHALT = new Image();
const RIGHT_ASPHALT = new Image();
const LEFT_ASPHALT = new Image();
const BOTTOM_ASPHALT = new Image();
const TOP_LEFT_ASPHALT = new Image();
const TOP_RIGHT_ASPHALT = new Image();
const BOTTOM_LEFT_ASPHALT = new Image();
const BOTTOM_RIGHT_ASPHALT = new Image();
MIDDLE_ASPHALT.src = './assets/tiles/asphalt_tiles_0012_Layer-0.png';
TOP_ASPHALT.src = './assets/tiles/asphalt_tiles_0001_Layer-11.png'
RIGHT_ASPHALT.src = './assets/tiles/asphalt_tiles_0003_Layer-9.png';
LEFT_ASPHALT.src = './assets/tiles/asphalt_tiles_0004_Layer-8.png';
BOTTOM_ASPHALT.src = './assets/tiles/asphalt_tiles_0002_Layer-10.png';
TOP_LEFT_ASPHALT.src = './assets/tiles/asphalt_tiles_0000_Layer-12.png';
TOP_RIGHT_ASPHALT.src = './assets/tiles/asphalt_tiles_0007_Layer-5.png';
BOTTOM_LEFT_ASPHALT.src = './assets/tiles/asphalt_tiles_0005_Layer-7.png';
BOTTOM_RIGHT_ASPHALT.src = './assets/tiles/asphalt_tiles_0006_Layer-6.png';

const WALL = new Image();
WALL.src = './assets/tiles/Floor3.png';

const FLOOR = new Image();
FLOOR.src = './assets/tiles/Floor1.png';

const TREE_1 = new Image();
TREE_1.src = './assets/tiles/objects_outside_0011_Layer-12.png'

const TREE_2 = new Image();
TREE_2.src = './assets/tiles/objects_outside_0010_Layer-11.png'

const TREE_3 = new Image();
TREE_3.src = './assets/tiles/objects_outside_0009_Layer-10.png'

class Map {

    constructor() {
        this.mapPlan = [
            [15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 25, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 26, 10, 10, 10, 10, 10, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 22, 10, 10, 10, 10, 10, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 20, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 20, 20, 22, 10, 10, 10, 10, 10, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 14],
            [11, 10, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 30, 30, 30, 30, 30, 30, 30, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 14],
            [11, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 14],
            [11, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 30, 30, 30, 30, 30, 40, 40, 40, 30, 30, 30, 30, 30, 10, 14],
            [11, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 23, 20, 22, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 10, 10, 10, 10, 10, 23, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 20, 20, 22, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 10, 10, 10, 10, 23, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 22, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 10, 10, 10, 10, 27, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 28, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 30, 40, 40, 40, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [17, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 18]
        ];

        this.tileSize = 25;
    }

    draw(ctx) {

        ctx.clearRect(0, 0, GAME_DIM_X, GAME_DIM_Y);
        ctx.fillStyle = GAME_BG_COLOR;
        this.mapPlan.forEach((row, i) => {
            row.forEach((tile, j) => {
                if (tile === 10) {
                    this.drawTile(MIDDLE_GRASS, ctx, j, i);
                } else if (tile === 11) {
                    this.drawTile(LEFT_GRASS, ctx, j, i);
                } else if (tile === 12) {
                    this.drawTile(TOP_GRASS, ctx, j, i);
                } else if (tile === 13) {
                    this.drawTile(BOTTOM_GRASS, ctx, j, i);
                } else if (tile === 14) {
                    this.drawTile(RIGHT_GRASS, ctx, j, i);
                } else if (tile === 15) {
                    this.drawTile(TOP_LEFT_GRASS, ctx, j, i);
                } else if (tile === 16) {
                    this.drawTile(TOP_RIGHT_GRASS, ctx, j, i);
                } else if (tile === 17) {
                    this.drawTile(BOTTOM_LEFT_GRASS, ctx, j, i);
                } else if (tile === 18) {
                    this.drawTile(BOTTOM_RIGHT_GRASS, ctx, j, i);
                } else if (tile === 20) {
                    this.drawTile(MIDDLE_ASPHALT, ctx, j, i);
                } else if (tile === 21) {
                    this.drawTile(TOP_ASPHALT, ctx, j, i);
                } else if (tile === 22) {
                    this.drawTile(RIGHT_ASPHALT, ctx, j, i);
                } else if (tile === 23) {
                    this.drawTile(LEFT_ASPHALT, ctx, j, i);
                } else if (tile === 24) {
                    this.drawTile(BOTTOM_ASPHALT, ctx, j, i);
                } else if (tile === 25) {
                    this.drawTile(TOP_LEFT_ASPHALT, ctx, j, i);
                } else if (tile === 26) {
                    this.drawTile(TOP_RIGHT_ASPHALT, ctx, j, i);
                } else if (tile === 27) {
                    this.drawTile(BOTTOM_LEFT_ASPHALT, ctx, j, i);
                } else if (tile === 28) {
                    this.drawTile(BOTTOM_RIGHT_ASPHALT, ctx, j, i);
                } else if (tile === 30) {
                    this.drawTile(WALL, ctx, j, i);
                } else if (tile === 40) {
                    this.drawTile(FLOOR, ctx, j, i);
                }
            })
        })
    }

    drawTile(img, ctx, x, y) {
        ctx.drawImage(
            img, Math.floor(x * this.tileSize), Math.floor(y * this.tileSize), this.tileSize, this.tileSize
        );
    }

    drawTrees(ctx) {
        ctx.drawImage(TREE_2, 30, 30, 200, 200)
        ctx.drawImage(TREE_2, 400, 50, 200, 200)
        ctx.drawImage(TREE_2, 630, 15, 200, 200)
        ctx.drawImage(TREE_2, 1000, 350, 200, 200)
        ctx.drawImage(TREE_2, 550, 400, 200, 200)

        ctx.drawImage(TREE_3, 650, 250, 120, 100)
        ctx.drawImage(TREE_3, 200, 0, 120, 100)

        ctx.drawImage(TREE_1, 800, 450, 150, 150)
    }

}

export default Map;