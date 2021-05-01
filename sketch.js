const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9
var box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25
var ball, ballImg
var sling

function preload()
{
    ballImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(290, 290, 300,20)
    stand2 = new Ground(590, 200, 200,20)
    fill(135,205,235);
    var options = {
        friction: 0.3,
        restitution: 0.5,
        density: 0.6
      }
    ball = Bodies.circle(50,200,10, options);
    World.add(world, ball);

    sling = new SlingShot(this.ball, {x: 100, y: 200});
    //level 1
    box1 = new Box(200, 275, 30, 40)
    box2 = new Box(230, 275, 30, 40)
    box3 = new Box(260, 275, 30, 40)
    box4 = new Box(290, 275, 30, 40)
    box5 = new Box(320, 275, 30, 40)
    box6 = new Box(350, 275, 30, 40)
    box7 = new Box(380, 275, 30, 40)
    fill(135,206,234);
    
    box8 = new Box(230, 235, 30, 40)
    box9 = new Box(260, 235, 30, 40)
    box10 = new Box(290, 235, 30, 40)
    box11 = new Box(320, 235, 30, 40)
    box12 = new Box(350, 235, 30, 40)
    fill(254,193,203);
    //level 3
    box13 = new Box(260, 195, 30, 40)
    box14 = new Box(290, 195, 30, 40)
    box15 = new Box(320, 195, 30, 40)
    //top
    box16 = new Box(290, 155, 30, 40)

    //lvl 1/2
    box17 = new Box(520, 185, 30, 40)
    box18 = new Box(550, 185, 30, 40)
    box19 = new Box(580, 185, 30, 40)
    box20 = new Box(610, 185, 30, 40)
    box21 = new Box(640, 185, 30, 40)
    //lvl 2/2
    box22 = new Box(550, 145, 30, 40)
    box23 = new Box(580, 145, 30, 40)
    box24 = new Box(610, 145, 30, 40)
    //top/2
    box25 = new Box(580, 105, 30, 40)
}

function draw(){
    background(57,44,44)
    Engine.update(engine)
    drawSprites();
    
    stand1.display();
    stand2.display();
    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    

    
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
   

  
    box13.display();
    box14.display();
    box15.display();
    fill(65,224,209);

    
    box16.display();
    fill(129,127,128);

  
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill(135,206,234);
    

    box22.display();
    box23.display();
    box24.display();
    fill(254,193,203);

   
    box25.display();
    fill(65,224,209);

    sling.display();

    imageMode(CENTER);
    image(ballImg, ball.position.x, ball.position.y, 40, 40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x:mouseX, y: mouseY});
}

function mouseReleased(){
    sling.fly();
}