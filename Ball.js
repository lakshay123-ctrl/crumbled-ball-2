class Ball {
    constructor(x,y,radius) {
      var options = {
          'restitution':0.5,
            'density':14,
            'friction':0.3
          
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("paper.png");
      this.x = x;
      this.y = y;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      var angle = this.body.angle;
      
      translate(pos.x,pos.y);
      rotate (angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  