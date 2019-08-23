let particle;

function setup () {
	createCanvas(600, 400);
	particle = new Particle();
}

function draw () {
	background(56);
	particle.update();
	particle.display();
}