let particle;

function setup () {
	createCanvas(600, 400);
	particle = new Particle();
} 

function draw () {
	background(56);
	let gravity = createVector(0.2, .5)
	partile.applyForce(gravity);
	particle.update();
	particle.display();
}