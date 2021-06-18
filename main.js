var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImgWidth = 30;
blockImgHeight = 30;

playerObject = "";
blockImgObject = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);

        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        blockImgObject = Img;

        blockImgObject.scaleToWidth(blockImgWidth);
        blockImgObject.scaleToHeight(blockImgHeight);

        blockImgObject.set({
            top:playerY,
            left:playerX
        }); 
        canvas.add(blockImgObject);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if(e.shiftKey == true && keyPressed == '80') {
        console.log("P and shift has been pressed together.");
        blockImgWidth = blockImgWidth + 10;
        blockImgHeight = blockImgHeight + 10;
        document.getElementById("currentWidth").innerHTML = blockImgWidth;
        document.getElementById("currentHeight").innerHTML = blockImgHeight;
    }

    if(e.shiftKey && keyPressed == '77') {
        console.log("M and shift has been pressed together.");
        blockImgWidth = blockImgWidth - 10;
        blockImgHeight = blockImgHeight - 10;
        document.getElementById("currentWidth").innerHTML = blockImgWidth;
        document.getElementById("currentHeight").innerHTML = blockImgHeight;
    }

    if(keyPressed == '38') {
        up();
        console.log("Up arrow has been pressed.");
    }

    if(keyPressed == '40') {
        down();
        console.log("Down arrow has been pressed.");
    }

    if(keyPressed == '37') {
        left();
        console.log("Left arrow has been pressed.");
    }

    if(keyPressed == '39') {
        right();
        console.log("Right arrow has been pressed.");
    }



    if(keyPressed == '87') {
        new_image("wall.jpg");
        console.log("W has been pressed.");
    }

    if(keyPressed == '71') {
        new_image("ground.png");
        console.log("G has been pressed.");
    }

    if(keyPressed == '76') {
        new_image("light_green.png");
        console.log("L has been pressed.");
    }

    if(keyPressed == '84') {
        new_image("trunk.jpg");
        console.log("T has been pressed.");
    }

    if(keyPressed == '82') {
        new_image("roof.jpg");
        console.log("R has been pressed.");
    }

    if(keyPressed == '89') {
        new_image("yellow_wall.png");
        console.log("Y has been pressed.");
    }

    if(keyPressed == '68') {
        new_image("dark_green.png");
        console.log("D has been pressed.");
    }

    if(keyPressed == '85') {
        new_image("unique.png");
        console.log("U has been pressed.");
    }

    if(keyPressed == '67') {
        new_image("cloud.jpg");
        console.log("C has been pressed.");
    }
}

function up() {
    if(playerY >= 0) {
        playerY = playerY - blockImgHeight;
        console.log("Block Img Height = " + blockImgHeight);
        console.log("When Up arrow is pressed, X = " + playerX + " Y = " + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function down() {
if(playerY <= 500) {
    playerY = playerY + blockImgHeight;
    console.log("Block Img Height = " + blockImgHeight);
    console.log("When Down arrow is pressed, X = " + playerX + " Y = " + playerY);
    canvas.remove(playerObject);
    player_update();
}
}

function right() {
if(playerX >= 0) {
    playerX = playerX + blockImgWidth;
    console.log("Block Img Width = " + blockImgWidth);
    console.log("When Right arrow is pressed, X = " + playerX + " Y = " + playerY);
    canvas.remove(playerObject);
    player_update();
}
}
function left() {
if(playerX <= 850) {
    playerX = playerX - blockImgWidth;
    console.log("Block Img Width = " + blockImgWidth);
    console.log("When Up arrow is pressed, X = " + playerX + " Y = " + playerY);
    canvas.remove(playerObject);
    player_update();
}
}