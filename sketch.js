var courtImg;
var database;

function preload(){
    courtImg = loadImage("images/football_field.jpeg");
}

function setup(){
    createCanvas(2000,1000);
    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){
    background("black");

    if(playerCount === 2){
        game.updateGameState(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
}