class Stone {
	constructor(x, y) {
	  var options = {
		'density':2,
		'friction': 3,
		'restitution':1
	  };
	  this.body = Bodies.rectangle(x, y, 50, 50, options);
	  this.width = 225;
	  this.height = 65;
	  World.add(world, this.body);
	};
	display(){
	  var pos = this.body.position;
	  var angle = this.body.angle;
  
	  push();
	  translate(pos.x, pos.y);
	  rotate(angle);
	  strokeWeight(3);
	  stroke('red')
	  fill('black')
	  rectMode(CENTER)
	  rect(0, 0, this.width, this.height);
	  pop();
	};
  };
  