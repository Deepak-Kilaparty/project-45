const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var player, playerImg;
var backgroundImg;
var trex1img, trex2img, trex3img;
var trash1,trash2,trash3,trash4,trash5;
var trashImg;
var trashCount = 0;
var sigCount = 0;
var trashGroup;
var gameState = "play";
var closeImg;
var close;


function preload() {
    backgroundImg = loadImage("myGameBG.jpg");
    trashImg = loadImage("trash.png")
    playerImg = loadImage("player.png");
    closedImg = loadImage("closed.png");
}

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;
    player = createSprite(50,400, 25,25);
    player.addImage(playerImg);
    player.scale =0.45;
    trashGroup = new Group();
      close = createSprite(350,200,50,50);
      close.addImage(closedImg);
      close.scale = 0.2;
      close.visible = false;
    
    
}

function draw(){
    background(backgroundImg);
    if(gameState === "play"){
        text("Trash Count:"+trashCount,850,20)
        text("Signature Count: "+sigCount,830,40)
        Engine.update(engine);
        createTrash();
        
        if(trash1!==undefined){
            if(trash1.isTouching(player)){
                trashCount = trashCount+1
                trash1.destroy();
            }
        }
        if(trash2!==undefined){
            if(trash2.isTouching(player)){
                trashCount = trashCount+1
                trash2.destroy();
            }
        }
        if(trash3!==undefined){
            if(trash3.isTouching(player)){
                trashCount = trashCount+1
                trash3.destroy();
            }
        }
        if(trash4!==undefined){
            if(trash4.isTouching(player)){
                trashCount = trashCount+1
                trash4.destroy();
            }
        }
        if(trash5!==undefined){
            if(trash5.isTouching(player)){
                trashCount = trashCount+1
                trash5.destroy();
                console.log(player.x);
            }
        }
        if(keyDown("RIGHT_ARROW")){
            console.log("hello")
            player.x = player.x + 5;
        }
        if(keyDown("UP_ARROW")){
            console.log("hello")
            player.y = player.y - 5;
        }
        if(keyDown("DOWN_ARROW")){
            console.log("hello")
            player.y = player.y + 5;
        }
        if(trashCount%5===0){
            sigCount = trashCount/5;
        }
        
        if(player.x>870){
            player.x = 50;
            player.y = 400;
        }
        if(sigCount === 25){
            gameState ="END";
        }
        
        drawSprites();
    }
    
    if(gameState==="END"){
        textSize(30)
        fill("red")
        text("Good Job, You closed the factory",280,420);
        
        close.visible = true;

        drawSprites();
    }
}




function createTrash(){
    console.log(frameCount);
    if(frameCount%350===0||frameCount===1){
        trash1 = createSprite(200,450);
        trash1.addImage(trashImg);
        trash1.scale = 0.5;
        trash1.lifetime = 200 - sigCount*2;
     //   trashGroup.add(trash1);

        trash2 = createSprite(400,400);
        trash2.addImage(trashImg);
        trash2.scale = 0.5;
        trash2.lifetime = 225 - sigCount*2;
        trashGroup.add(trash2);

        trash3 = createSprite(575,450);
        trash3.addImage(trashImg);
        trash3.scale = 0.5;
        trash3.lifetime = 250 - sigCount*2;
        trashGroup.add(trash3);

        trash4 = createSprite(750,400);
        trash4.addImage(trashImg);
        trash4.scale = 0.5;
        trash4.lifetime = 275- sigCount*2;
        trashGroup.add(trash4);

        trash5 = createSprite(950,450);
        trash5.addImage(trashImg);
        trash5.scale = 0.5;
        trash5.lifetime = 300- sigCount*2;
        trashGroup.add(trash5);
    }
}