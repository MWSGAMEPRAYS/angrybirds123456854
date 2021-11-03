const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var Chao;
var pig1, pig2;
var log1, log2, log3, log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //new box, serve para crias as configs da classe;
    box1 = new Box(800,327,70,70);
    Chao = new Ground(600,390,1200,50);
    box2 = new Box(960,327,70,70);
    pig1 = new Pig(879,337);
    log1 = new Log(880,250,235,300,PI/2);
    log2 = new Log(880,190,235,300,PI/2);
    box3 = new Box(800, 230, 70, 70);
    pig2 = new Pig(879,230);
    box4 = new Box(960,230,70,70);
    box5 = new Box(870,170,70,70);
    log3 = new Log(845,130,150,PI/7);
    log4 = new Log(945,130,150,-PI/7); 
    bird1 = new Bird(100,100,50,50);
}

function draw(){
    background(0);
    // engine.update()engine, serve para atualizar a engine de fisica.
    Engine.update(engine);
    //display serve p exibir na tella;
    box1.display();
    Chao.display();
    box2.display();
    pig1.display();
    log1.display();
    log2.display();
    box3.display();
    pig2.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}