var database;
var form;
var state=0;
var game;
var count;
var player;

function setup(){
  database = firebase.database();
  createCanvas(500,500);

  game=new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
    drawSprites();
  
}