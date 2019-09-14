function Particle () {
	this.pos = createVector(width/2, height/2);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);

	this.applyForce = (force) => {
		this.acc.add(force);
	}

	this.update = () => {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	this.display = () => {
		fill(255);
		ellipse(this.pos.x, this.pos.y, 45, 45);
	}
}