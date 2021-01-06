var Character1
var Character2


function preload(){
    image1 = loadImage('images/AUG.png');
    image2 = loadImage('images/AWM.png');
    image3= loadImage('images/DP-28.png');
    image4= loadImage('images/Gauge_Ammo.png');
    image5= loadImage('images/Gorza.png');
    image6= loadImage('images/Kar-98.png');
    image7= loadImage('images/M416.png');
    image8= loadImage('images/M762.png');
    image9= loadImage('images/MUTANT.png');
    image10= loadImage('images/Pistol.png');
    image11= loadImage('images/Scarl.png');
    image12= loadImage('images/Shotgun.png');
    image13= loadImage('images/Sniper_ammo.png');
    image14= loadImage('images/Shotgun.png');
    
}


function setup(){
canvas = createCanvas(1200,600);

Character1 = createSprite(30,550,30,80);
Character2 = createSprite(300,550,30,80);

}

function draw(){
    background(200);
    edges = createEdgeSprites();
    if(keyDown("space")){
        Character2.velocityY =-10;
    }
    Character2.velocityY = Character2.velocityY+0.8;

    
    if(keyDown("w")){
        Character1.velocityY =-10;
    }
    Character1.velocityY = Character1.velocityY+0.8;

    Character1.collide(edges[3]);       
    Character2.collide(edges[3]);       


    
    
    drawSprites();
}