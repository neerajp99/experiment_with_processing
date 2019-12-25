function setup() {
  createCanvas(500, 700);
  background("#333");
}

function draw() {
  // Loop over the Y-coordinates
  for (let i = 1.5; i < 500; i += 2) {
    noFill();
    // Begin shape for curve vertex
    beginShape();
    strokeWeight(0.1);
    // Initial x, y coordinates
    let xLabel = 0;
    let yLabel = 0;
    // Loop over the Y-coordinates
    for (let j = 5; j < 680; j += 5) {
      // Add random colors
      randomColor = color(random(255), random(255), random(255));
      stroke(randomColor);
      // increment the values of x,y coordinates
      xLabel = 30 + j;
      yLabel = i * 20 + random(-2, 2);
      // Create curved lines
      if (xLabel < 470 && yLabel < 680) {
        noFill();
        curveVertex(xLabel, yLabel);
        noFill();
      }
      endShape();
      colorMode(RGB, 360, 360, 200);
      // Create random ellipses
      if (random(1) < 0.2 && xLabel < 470 && yLabel < 680) {
        randomColor = color(random(255), random(255), random(255));
        fill(randomColor);
        ellipse(xLabel, yLabel, 13, 13);
        noFill();
      }

      noLoop();
    }
  }
}
