function setup() {
  createCanvas(500, 700);
  background("#333");
}

function draw() {
  for (let i = 1.5; i < 500; i += 2) {
    noFill();
    beginShape();
    strokeWeight(0.1);
    let xLabel = 0;
    let yLabel = 0;
    for (let j = 5; j < 680; j += 5) {
      randomColor = color(random(255), random(255), random(255));
      stroke(randomColor);
      xLabel = 30 + j;
      yLabel = i * 20 + random(-2, 2);
      if (xLabel < 470 && yLabel < 680) {
        noFill();
        curveVertex(xLabel, yLabel);
        noFill();
      }
      endShape();
      colorMode(RGB, 360, 360, 200);
      if (random(1) < 0.2 && xLabel < 470 && yLabel < 680) {
        randomColor = color(random(255), random(255), random(255));
        fill(randomColor);
        circle(xLabel, yLabel, 13);
        noFill();
      }

      noLoop();
    }
  }
}
