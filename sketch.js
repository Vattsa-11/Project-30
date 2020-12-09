const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground , ground2,ground3;
var poly,polyImage;
var sling;

function preload(){
    polyImage = loadImage("polygon.png");
}

function setup(){
    var  canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height-10,width,20);
    ground2 = new Ground(605,370,245,10);
    ground3 = new Ground(width+10,height/2,20,height);
    ground4 = new Ground(-10,height/2,20,height);
    ground5 = new Ground(width/2,-10,width,20);
    poly = new Polygon(100,100);
    sling = new Sling(poly.body,{x:150,y:300});
    //1st row
    block1 = new Box(560,300,30,25);
    block2 = new Box(590,300,30,25);
    block3 = new Box(530,300,30,25);
    block4 = new Box(620,300,30,25);
    block5 = new Box(650,300,30,25);
    block6 = new Box(680,300,30,25);
    //2nd row
    block7 = new Box(545,275,30,25);
    block8 = new Box(575,275,30,25);
    block9 = new Box(605,275,30,25);
    block10 = new Box(635,275,30,25);
    block11 = new Box(665,275,30,25);
    //3rd row
    block12 = new Box(560,250,30,25);
    block13 = new Box(590,250,30,25);
    block14 = new Box(620,250,30,25);
    block15 = new Box(650,250,30,25);
    //4th row
    block16 = new Box(575,225,30,25);
    block17 = new Box(605,225,30,25);
    block18 = new Box(635,225,30,25);
    //5th row
    block19 = new Box(590,200,30,25);
    block20 = new Box(620,200,30,25);
    //6th row
    block21 = new Box(605,175,30,25);

}
function draw(){
    background(0);
    Engine.update(engine);

    ground.display();  
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    block1.display(); 
    block2.display(); 
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    poly.display();
    sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}