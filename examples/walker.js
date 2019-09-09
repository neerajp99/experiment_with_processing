// #########################################
// Random Walker, example 1
// #########################################
// Program to create a random walker using P5.js
// Run the code here: http://editor.p5js.org

function setup() {
  createCanvas(800, 600);
  w = new Walker();
}

function draw() {
  background(220);
  w.walk();
  w.display();
}

function Walker () {
  // this.x = width/2;
  // this.y = height/2;
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  // this.acc = createVector(0, 0.1);

  this.walk = () => {
    this.acc = createVector(random(-1, 1), random(-1,1));
    this.acc.mult(5);
    // this.vel = createVector(random(-4, 4), random(-3, 5));
    this.vel.add(this.acc);
    // this.pos = this.pos + this.vel;
    this.pos.add(this.vel);
  }

  this.display = () => {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 45, 45);
  }
}

// #########################################
// Random Walker, example 2
// #########################################

// Program to create a random walker using P5.js
// Run the code here: http://editor.p5js.org

function setup() {
  createCanvas(800, 600);
  w = new Walker();
}

function draw() {
  background(56);
  w.update();
  w.display(); 
}

function Walker () {
  // this.x = width/2;
  // this.y = height/2;
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.vel.mult(0.001);
  this.acc = p5.Vector.fromAngle(58);
  this.acc.setMag(0.3);
  // this.acc = createVector(0, 0.1);

  this.update = () => {
    var mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.rotate(PI/32);
    // this.acc.normalize();
    // this.acc.mult(0.08);
    // this.acc.setMag(0.4);
    // this.acc.mult(5);
    // this.vel = createVector(random(-4, 4), random(-3, 5));
    this.vel.add(this.acc);
    // this.pos = this.pos + this.vel;
    this.pos.add(this.vel);
  }

  this.display = () => {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 45, 45);
  }
}
 
// #########################################
// Random Walker, example 3
// #########################################

let particle;

function setup() {
  createCanvas(700, 500);
  particle = new Particle(100, 200)
}

function draw(){ 
  background(56);
  let gravity = createVector(0, 0.1);
  let wind = createVector(0.5, 0.1);
  particle.applyForce(gravity);
  if (mouseIsPressed){
  particle.applyForce(wind);
  }
  particle.update();
  particle.edges();
  particle.display();
 
}
function Particle(){
   this.pos = createVector(width/2, height/2);
   this.vel = createVector(0, 0);
   this.acc = createVector(0,0);
  
   this.update = () => {
     this.vel.add(this.acc);
     this.pos.add(this.vel);
   }
   
   this.applyForce = (force) => {
     this.acc.add(force);
     this.acc.setMag(0.05);
     
   }
   
   this.display = () => {
     fill(255);
     ellipse(this.pos.x, this.pos.y, 45, 45);
   }
   
   this.edges = () => {
     if (this.pos.y > height) {
       this.vel.y *= random(-1.6, 2);
       this.pos.y = height;
     }
     if(this.pos.x > width){
       this.vel.x *= random(-1, 1);
       this.pos.x = width;
     }
    
   }
}

// #########################################
// Random Walker, example 4
// #########################################
