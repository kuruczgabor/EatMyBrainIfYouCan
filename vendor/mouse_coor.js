function findCursorCoords(event) {

    var obj = document.getElementById("game-canvas");
    var obj_left = 0;
    var obj_top = 0;
    var xpos;
    var ypos;

    while (obj.offsetParent) {
        obj_left += obj.offsetLeft;
        obj_top += obj.offsetTop;
        obj = obj.offsetParent;
        // debugger
    }
    if (event) {
        //FireFox
        xpos = event.pageX;
        ypos = event.pageY;
        // debugger
    }
    else {
        //IE
        xpos = window.event.x + document.body.scrollLeft - 2;
        ypos = window.event.y + document.body.scrollTop - 2;
        // debugger
    }
    xpos -= obj_left;
    ypos -= obj_top;
    // debugger
    return [xpos, ypos]
}


