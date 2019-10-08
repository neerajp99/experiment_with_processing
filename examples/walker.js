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

var particle;
var attractor;

function setup() {
  createCanvas(640, 360);
  particle = new Particle();
  attractor = new Attractor(width/2, height/2);
}

function draw() {
  background(51);

  // Attractor attracts particle
  var force = attractor.calculateAttraction(particle);
  particle.applyForce(force);

  particle.update();
  particle.display();

  attractor.display();
}


var Particle = function() {
  this.pos = createVector(400, 50);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  this.mass = 1;

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  };

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    ellipse(this.pos.x, this.pos.y, this.mass*16, this.mass*16);
  };
}

var Attractor = function() {
  this.pos = createVector(width/2, height/2);
  this.mass = 20;
  this.G = 1;

  this.calculateAttraction = function(p) {
    // Calculate direction of force
    var force = p5.Vector.sub(this.pos, p.pos);
    // Distance between objects
    var distance = force.mag();
    // Artificial constraint
    distance = constrain(distance, 5, 25);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    force.normalize();
    // Calculate gravitional force magnitude
    var strength = (this.G * this.mass * p.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
  }

  // Method to display
  this.display = function() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.mass*2, this.mass*2);
  }
}

////////////////////

var particles_a = [];
var particles_b = [];
var particles_c = [];
var nums =200;
var noiseScale = 800;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(21, 8, 50);
  for(var i = 0; i < nums; i++){
    particles_a[i] = new Particle(random(0, width),random(0,height));
    particles_b[i] = new Particle(random(0, width),random(0,height));
    particles_c[i] = new Particle(random(0, width),random(0,height));
  }
}

function draw(){
  noStroke();
  smooth();
    for(var i = 0; i < nums; i++){
    var radius = map(i,0,nums,1,2);
    var alpha = map(i,0,nums,0,250);

    fill(69,33,124,alpha);
    particles_a[i].move();
    particles_a[i].display(radius);
    particles_a[i].checkEdge();

    fill(7,153,242,alpha);
    particles_b[i].move();
    particles_b[i].display(radius);
    particles_b[i].checkEdge();

    fill(255,255,255,alpha);
    particles_c[i].move();
    particles_c[i].display(radius);
    particles_c[i].checkEdge();
  }  
}


function Particle(x, y){
  this.dir = createVector(0, 0);
  this.vel = createVector(0, 0);
  this.pos = createVector(x, y);
  this.speed = 0.4;

  this.move = function(){
    var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale;
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    this.vel = this.dir.copy();
    this.vel.mult(this.speed);
    this.pos.add(this.vel);
  }

  this.checkEdge = function(){
    if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
      this.pos.x = random(50, width);
      this.pos.y = random(50, height);
    }
  }

  this.display = function(r){
    ellipse(this.pos.x, this.pos.y, r, r);
  }
}

