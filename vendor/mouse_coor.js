// (function(global){

//     function showCoords(event) {
//         var x = event.clientX;
//         var y = event.clientY;
//         var coor = "X coords: " + x + ", Y coords: " + y;
//         return coor
//     }

// })(this)

function findObjectCoords(mouseEvent) {
    var obj = document.getElementById("game-canvas");
    var obj_left = 0;
    var obj_top = 0;
    var xpos;
    var ypos;
    while (obj.offsetParent) {
        obj_left += obj.offsetLeft;
        obj_top += obj.offsetTop;
        obj = obj.offsetParent;
    }
    if (mouseEvent) {
        //FireFox
        xpos = mouseEvent.pageX;
        ypos = mouseEvent.pageY;
    }
    else {
        //IE
        xpos = window.event.x + document.body.scrollLeft - 2;
        ypos = window.event.y + document.body.scrollTop - 2;
    }
    xpos -= obj_left;
    ypos -= obj_top;
    
    document.getElementById("game-canvas").innerHTML = xpos + ", " + ypos;
    console.log(xpos + ", " + ypos)
}

// onmousemove = findObjectCoords;