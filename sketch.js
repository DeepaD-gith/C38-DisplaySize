var form,player,game;
var gameState=0;
var playerCount;
var database;
var allPlayers;

var cars, car1,car2,car3,car4;

function setup(){
    createCanvas(displayWidth-50,displayHeight-30);
    database = firebase.database();



    game = new Game();
    game.getState();
    game.startGame();


   

  
}

function draw(){
    background("white");
    if(playerCount === 1)
    {
        game.update(1);
    }
    if(gameState==1)
    {
        clear();
        game.Play();
    }
   
}


