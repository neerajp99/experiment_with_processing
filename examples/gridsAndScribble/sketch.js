setup = () => {
  createCanvas(700, 700);
  background("#333");
};

draw = () => {
  // Adding fine particles

  // Adding skribbles using curveVertex
  for (let i = 40; i < width - 30; i += 20) {
    for (let j = 40; j < height - 30; j += 20) {
      strokeWeight(1.3);
      stroke(255);
      noFill();
      beginShape();
      curveVertex(i + random(-5, 5), j + random(-5, 5));
      curveVertex(i + random(-5, 5), j + random(-5, 5));
      curveVertex(i + random(-5, 5), j + random(-5, 5));
      curveVertex(i + random(-5, 5), j + random(-5, 5));
      curveVertex(i + random(-5, 5), j + random(-5, 5));
      curveVertex(i + random(-5, 5), j + random(-5, 5));
      endShape();
    }
  }
  noLoop();
};
