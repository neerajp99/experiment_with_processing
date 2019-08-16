// Program to create a random walker using P5.js
// Run the code here: http://editor.p5js.org

function setup() {
  createCanvas(400, 400);
  w = new Walker();
}

function draw() {
  background(220);
  w.display();
}

function Walker () {
  // this.x = width/2;
  // this.y = height/2;
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0.1);

  this.walk = () => {
  	// this.vel = createVector(random(-4, 4), random(-3, 5));
    this.vel.add(this.acc);
  	// this.pos = this.pos + this.vel;
    this.pos.add(this.vel);
  }

  this.display = () => {
  	fill(255);
  	ellipse(this.pos.x, this.pos.y, 34, 45);
  }
}