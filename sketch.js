const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16;
var p, ground, slab1, slab2, slingshot, polygon;

function preload(){
}
function setup(){
   createCanvas(1200,800);
   
   engine = Engine.create();
   world = engine.world;
   //level1
   s1 = new Box(510,320);
   s2 = new Box(544,464);
   s3 = new Box(581,466);
   s4 = new Box(615,468);
   s5 = new Box(630,469);
   s6 = new Box(665,467);
   //level2
   s7 = new Box(559,402);
   s8 = new Box(592,416);
   s9 = new Box(622,413);
   s10 = new Box(655,415);
   s11 = new Box(530,410);
  // s12 = new Box(641,467);
   ground = new Ground(width/2, 750, width, 30);

   slab1 = new Ground(590,500, 230, 15);
   polygon = new Polygon(50, 200);
   slingshot = new Slingshot(polygon.body,{x: 50, y:200});
}
function draw(){
   Engine.update(engine);
   background("cyan");
   s1.display();
   s2.display();
   s3.display();
   s4.display();
   s5.display();
   s6.display();
   s7.display();
   s8.display();
   s9.display();
   s10.display();
   s11.display();
 //  s12.display();
   ground.display();
   slab1.display();
   polygon.display();
   slingshot.display();
   //console.log(mouseX, mouseY)
}
function mouseDragged(){
   Matter.body.setPosition(this.polygon,{x: mouseX, y: mouseY});
}
function mouseRealeased(){
   slingshot.fly();
}





