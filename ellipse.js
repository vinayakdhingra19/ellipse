class Ellipse{
    constructor(x, y) 
    {
      
      this.body = Bodies.ellipse(x, y);
      this.width = width;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      strokeWeight(3);
      stroke("green");
      fill(255);
      ellipse(0, 0, this.width());
      pop();
    }
  };