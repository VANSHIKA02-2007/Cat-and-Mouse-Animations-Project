var cat, catImg, catImg1, catImg2;
var mouse, mouseImg, mouseImg1, mouseImg2;
var bgImg,canvas;

function preload() {
    //load the images here

    bgImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    catImg1 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg2 = loadAnimation("images/cat4.png");

    mouseImg = loadAnimation("images/mouse1.png");
    mouseImg1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg2 = loadAnimation("images/mouse4.png");

    
}

function setup(){

    //create tom and jerry sprites here
     var canvas = createCanvas(1000,700);
    cat = createSprite(840,500);
    cat.addAnimation("cat",catImg);
    cat.changeAnimation("cat");
    cat.scale = 0.2;

    mouse = createSprite(100,500);
    mouse.addAnimation("mouse",mouseImg2);
    mouse.changeAnimation("mouse");
    mouse.scale = 0.2;  
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.addAnimation("catCollide",catImg2);
    cat.changeAnimation("catCollide");
    cat.x = 220;
    cat.velocityX = 0;

    mouse.addAnimation("mouseHappy",mouseImg);
    mouse.changeAnimation("mouseHappy");
    
    }

    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.addAnimation("catMoving",catImg1);
        cat.changeAnimation("catMoving");
        cat.velocityX = -4;

        mouse.addAnimation("mouseTeasing",mouseImg1);
        mouse.changeAnimation("mouseTeasing");
    }
}