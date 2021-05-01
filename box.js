class Box {
  constructor(x,y,width,height) {
    var options = {
        friction: 0.3,
        restitution: 0.5,
        density: 0.6
      }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(135,206,234);
    rect(pos.x, pos.y, this.width, this.height);
  }
};