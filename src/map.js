

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
WALL.src = './assets/tiles/walls_0025_Layer-26.png';


class Map {

    constructor() {
        this.mapPlan = [
            [15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 30, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 30, 30, 30, 30, 30, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
            [17, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 30, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 18]
        ];
        // this.mapPlan = [
        //     [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6],
        //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        //     [7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8]
        // ];
        this.tileSize = 25;
        // this.tileSize = 50;
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
                }
            })
        })
    }

    drawTile(img, ctx, x, y) {
        ctx.drawImage(
            img, Math.floor(x * this.tileSize), Math.floor(y * this.tileSize), this.tileSize, this.tileSize
        );
    }

}

export default Map;