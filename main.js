var canvas= new fabric.Canvas('myCanvas');
var blockimage_height=30;
var blockimage_width=30;
var player_x=10;
var player_y=10;
var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top : player_y,
    left: player_x
});
canvas.add(player_object);
      });
}


function  new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(blockimage_width);
block_image_object.scaleToHeight(blockimage_height);
block_image_object.set({
    top : player_y,
    left: player_x
});
canvas.add(block_image_object);
      });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
key_pressed=e.keyCode;
if (e.shiftKey == true && key_pressed == '80'){
    blockimage_width += 10;
    blockimage_height += 10;

    document.getElementById("current_width").innerHTML=blockimage_width;
    
    document.getElementById("current_height").innerHTML=blockimage_height;
}
if (e.shiftKey == true && key_pressed == '77'){
    blockimage_width -= 10;
    blockimage_height -= 10;

    document.getElementById("current_width").innerHTML=blockimage_width;
    
    document.getElementById("current_height").innerHTML=blockimage_height;
}
if (key_pressed == '72'){
    new_image('hulk_face.png');
    console.log('h');
}
if (key_pressed == '73'){
    new_image('ironman_body.png');
    console.log('i');
}
if (key_pressed == '76'){
    new_image('captain_america_left_hand.png');
    console.log('l');
}
if (key_pressed == '82'){
    new_image('hulk_right_hand.png');
    console.log('r');
}
if (key_pressed == '89'){
    new_image('hulk_legs.png');
    console.log('g');
}


if(key_pressed == '38'){
up();
}

if(key_pressed == '40'){
    down();
}
if(key_pressed == '37'){
    left();
}
if(key_pressed == '39'){
right();
}
}
function up(){
    if(player_y >= 0){
        player_y= player_y-blockimage_height;
        canvas.remove(player_object);
        player_update();
    }                       
}
function down(){
    if(player_y <= 700){
        player_y= player_y+blockimage_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >= 0){
        player_x= player_x-blockimage_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <= 850){
        player_x= player_x+blockimage_width;
        canvas.remove(player_object);
        player_update();
    }
}