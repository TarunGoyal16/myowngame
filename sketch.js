const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var myengime,myworld
var boxingring
var player1,player2,ground

function preload() {
	boxingring=loadImage("bg1.png")
	
}

function setup(){
	createCanvas(800,600)
	myengine=Engine.create()
	myworld=myengine.world
	player1=new Player1(100,400,50,100)
	player2=new Player2(600,300,50,100)
	ground=new Ground(400,700,800,30)
}
function draw(){
	background(boxingring)
	Engine.update(myengine)
	player1.display()
	player2.display()
	ground.display()
	istouching(player1,player2)
	

}
function keyPressed(){
	if(keyCode==RIGHT_ARROW){
		player1.body.position.x=player1.body.position.x+10
		player2.body.position.x=player2.body.position.x-10
	}
	if(keyCode==LEFT_ARROW){
		player1.body.position.x=player1.body.position.x-10
		player2.body.position.x=player2.body.position.x+10
	}
}
function istouching (player1,player2) {
	if(player1.body.position.x-object2.x<=(object1.width/2+object2.width/2) && 
	player2.body.position.x-object1.x<=(object1.width/2+object2.width/2) &&
	player1.body.position.y-object2.y<=(object1.height/2+object2.height/2) && 
	player2.body.position.y-object1.y<=(object1.height/2+object2.height/2))
	
   {
		Matter.Body.setPosition(player1.body.position,{x:100,y:400})
		Matter.Body.setPosition(player2.body.position,{x:600,y:300})
	}

}




