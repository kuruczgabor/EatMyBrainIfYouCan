// /**
// * A* (A-Star) Pathfinding Algorithm in JavaScript
// * @author  Matthew Trost
// * @license Creative Commons Attribution-ShareAlike 3.0 Unported License
// * @datepublished December 2010
// */

// function astar(map, heuristic, cutCorners) {
//     // debugger
//     var listOpen = [];
//     var listClosed = [];
//     var listPath = [];
//     var nodeGoal = createTerminalNode(map, heuristic, "g", null);
//     var nodeStart = createTerminalNode(map, heuristic, "s", nodeGoal);
//     addNodeToList(nodeStart, listOpen);
//     // debugger

//     var n;
//     while (!isListEmpty(listOpen)) {
//         n = returnNodeWithLowestFScore(listOpen);
//         addNodeToList(n, listClosed);
//         removeNodeFromList(n, listOpen);
//         if (areNodesEqual(n, nodeGoal)) {
//             pathTo(n, listPath);
//             listPath.reverse();
//             return listPath;
//         }
//         n.makeChildNodes(map, heuristic, cutCorners, nodeGoal);
//         cullUnwantedNodes(n.childNodes, listOpen);
//         cullUnwantedNodes(n.childNodes, listClosed);
//         removeMatchingNodes(n.childNodes, listOpen);
//         removeMatchingNodes(n.childNodes, listClosed);
//         addListToList(n.childNodes, listOpen);
//     }
//     return null;
// }

// function pathTo(n, listPath) {
//     listPath.push(new NodeCoordinate(n.row, n.col));
//     if (n.parentNode == null)
//         return;
//     pathTo(n.parentNode, listPath);
// }

// function addListToList(listA, listB) {
//     var x;
//     for (x in listA)
//         listB.push(listA[x]);

//     // listA.forEach((el, i) => {
//     //     listB.push(listA[el]);
//     // })
// }

// function removeMatchingNodes(listToCheck, listToClean) {
//     var listToCheckLength = listToCheck.length;
//     for (var i = 0; i < listToCheckLength; i++) {
//         for (var j = 0; j < listToClean.length; j++) {
//             if (listToClean[j].row == listToCheck[i].row && listToClean[j].col == listToCheck[i].col)
//                 listToClean.splice(j, 1);
//         }
//     }
// }

// function cullUnwantedNodes(listToCull, listToCompare) {
//     var listToCompareLength = listToCompare.length;
//     for (var i = 0; i < listToCompareLength; i++) {
//         for (var j = 0; j < listToCull.length; j++) {
//             if (listToCull[j].row == listToCompare[i].row && listToCull[j].col == listToCompare[i].col) {
//                 if (listToCull[j].f >= listToCompare[i].f)
//                     listToCull.splice(j, 1);
//             }
//         }
//     }
// }

// function areNodesEqual(nodeA, nodeB) {
//     if (nodeA.row == nodeB.row && nodeA.col == nodeB.col)
//         return true;
//     else
//         return false;
// }

// function returnNodeWithLowestFScore(list) {
//     var lowestNode = list[0];
//     // debugger
//     var x;
//     for (x in list)
//         lowestNode = (list[x].f < lowestNode.f) ? list[x] : lowestNode;
//     // debugger
//     // list.forEach((el, i) => {
//     //     debugger
//     //     lowestNode = (list[i].f < lowestNode.f) ? list[i] : lowestNode;
//     // })
//     return lowestNode;
// }

// function isListEmpty(list) {
//     return (list.length < 1) ? true : false;
// }

// function removeNodeFromList(node, list) {
//     var listLength = list.length;
//     for (var i = 0; i < listLength; i++) {
//         if (node.row == list[i].row && node.col == list[i].col) {
//             list.splice(i, 1);
//             break;
//         }
//     }
// }

// function addNodeToList(node, list) {
//     list.push(node);
//     // debugger
//     // console.log('h')
// }

// function createTerminalNode(map, heuristic, nodeType, nodeGoal) {
//     var mapRows = map.length;
//     var mapCols = map[0].length;
//     for (var row = 0; row < mapRows; row++) {
//         for (var col = 0; col < mapCols; col++) {
//             if (map[row][col] == nodeType) {
//                 return new Node(row, col, map, heuristic, null, nodeGoal);
//             }
//         }
//     }
//     return null;
// }

// function returnHScore(node, heuristic, nodeGoal) {
//     var y = Math.abs(node.row - nodeGoal.row);
//     var x = Math.abs(node.col - nodeGoal.col);
//     switch (heuristic) {
//         case "manhattan":
//             return (y + x) * 10;
//         case "diagonal":
//             return (x > y) ? (y * 14) + 10 * (x - y) : (x * 14) + 10 * (y - x);
//         case "euclidean":
//             return Math.sqrt((x * x) + (y * y));
//         default:
//             return null;
//     }
// }

// function NodeCoordinate(row, col) {
//     this.row = row;
//     this.col = col;
// }

// function Node(row, col, map, heuristic, parentNode, nodeGoal) {
//     var mapLength = map.length;
//     var mapRowLength = map[0].length;
//     this.row = row;
//     this.col = col;
//     this.northAmbit = (row == 0) ? 0 : row - 1;
//     this.southAmbit = (row == mapLength - 1) ? mapLength - 1 : row + 1;
//     this.westAmbit = (col == 0) ? 0 : col - 1;
//     this.eastAmbit = (col == mapRowLength - 1) ? mapRowLength - 1 : col + 1;
//     this.parentNode = parentNode;
//     this.childNodes = [];

//     if (parentNode != null) {
//         if (row == parentNode.row || col == parentNode.col)
//             this.g = parentNode.g + 10;
//         else
//             this.g = parentNode.g + 14;
//         this.h = returnHScore(this, heuristic, nodeGoal);
//     }
//     else {
//         this.g = 0;
//         if (map[row][col] == "s")
//             this.h = returnHScore(this, heuristic, nodeGoal);
//         else
//             this.h = 0;
//     }
//     this.f = this.g + this.h;

//     this.makeChildNodes = function (map, heuristic, cutCorners, nodeGoal) {
//         for (var i = this.northAmbit; i <= this.southAmbit; i++) {
//             for (var j = this.westAmbit; j <= this.eastAmbit; j++) {
//                 if (i != this.row || j != this.col) {
//                     if (map[i][j] != "u") {
//                         if (cutCorners == true)
//                             this.childNodes.push(new Node(i, j, map, heuristic, this, nodeGoal));
//                         else {
//                             if (i == this.row || j == this.col)
//                                 this.childNodes.push(new Node(i, j, map, heuristic, this, nodeGoal));
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// export {
//     astar, 
//     // pathTo, 
//     // addListToList,
//     // removeMatchingNodes,
//     // cullUnwantedNodes,
//     // areNodesEqual,
//     // returnNodeWithLowestFScore,
//     // isListEmpty,
//     // removeNodeFromList,
//     // addNodeToList,
//     // createTerminalNode,
//     // returnHScore
// };

import NodeElement from './node_element'

class AStar {
    constructor(start, end, grid) {
        this.grid = grid
        this.matrixLenght = this.grid.length
        this.nodes = []
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (i == start[0] && j == start[1]) {
                    // debugger
                    this.start = new NodeElement(i, j, grid[i][j].difficulty, grid[i][j].wall, this)
                    this.nodes.push(this.start)
                } else if (i == end[0] && j == end[1]) {
                    // debugger
                    this.end = new NodeElement(i, j, grid[i][j].difficulty, grid[i][j].wall, this)
                    this.nodes.push(this.end)
                } else {
                    // debugger
                    this.nodes.push(new NodeElement(i, j, grid[i][j].difficulty, grid[i][j].wall, this))
                }
            }
        }
        this.openQueue = [this.start]
        this.alreadyChecked = []
        this.optimalPath = []
    }
    startAlgorithm() {
        // debugger
        this.openQueue[0].heuristicCalculation(this.openQueue[0])
        while (this.openQueue.length > 0) {
            if (this.openQueue[0] === this.end) {
                // debugger
                break
            }
            let neighbours = this.openQueue[0].neighboursCalculation(this.openQueue)
            let queue = this.openQueue
            this.alreadyChecked.push(queue.shift())
            let newQueue = queue.concat(neighbours)
            let sortedNeighbours = newQueue.sort(function (a, b) { return a.heuristic - b.heuristic })
            this.openQueue = sortedNeighbours
        }
        // debugger
        if (this.openQueue.length !== 0) { this.retrieveOptimalPath(this.openQueue[0]) }
    }
    retrieveOptimalPath(node) {
        this.optimalPath.push(node)
        if (node.through !== this.start) {
            this.retrieveOptimalPath(node.through)
        } else {
            this.optimalPath.push(this.start)
        }
    }
    eucledianDistance(node) {
        return Math.sqrt(Math.pow(Math.abs(node.row - this.end.row), 2) + Math.pow(Math.abs(node.col - this.end.col), 2))
    }
}

export default AStar;