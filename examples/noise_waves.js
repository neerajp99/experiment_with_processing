var yoff = 0;
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  stroke(255,150);
    noFill();
  // x = random(0, width);
  var x = noise(xoff) * width;
  var xoff= 0;
    
  for (var x = 0; x <= width; x += 10) {
  // Map noise value (between 0 and 1) to y-value of canvas
    var y = map(noise(xoff, yoff), 0, 1, 200, 500);
    // Set the vertex
    curveVertex(x, y); 
    xoff += 0.06;
		
		
  }
    
  //Speed of moving waves
  yoff += 0.008;
  curveVertex(width, height);
  curveVertex(0, height);
  endShape(CLOSE);

  

}

function setup () {
  createCanvas(700, 500)
}

function draw () {
  background (56)
  stroke(255, 80)
  noFill()

  for (let x = 0 ; x <= width ; x =+ 20)
}