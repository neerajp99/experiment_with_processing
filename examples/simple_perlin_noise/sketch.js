let yOffset = 0;

setup = () => {
  createCanvas(700, 700);
  background("#fff");
  // Initialise an empty set of points
  points = [];

  // Loop over and create x,y random vector
  for (let i = 0; i < 1000; i++) {
    newVector = createVector(random(width + 100), random(height));
    // Push the values of new vector object to the points array
    points.push(newVector);
  }
};

draw = () => {
  // Loop over the points array
  for (let i = 0; i < points.length; i++) {

    noFill();
    noiseSeed(2);
    let vectorObject = points[i];
    let alpha = map(i, 0, 200, 0, 250);
    let colorsArray = [
      [69, 33, 124, alpha],
      [7, 153, 242, alpha],
      [255, 255, 255, alpha]
    ];

    let randomColor = color(random(255), random(255), random(255), alpha)
    stroke("#333");
    strokeWeight(0.3);

    // begin shape for vertex/curveVertex
    beginShape();
    for (let j = 0; j < 20 ; j++) {
      let noiseValue = map(
        noise(vectorObject.x / 500, vectorObject.y / 500),
        0,
        1,
        0,
        2 * PI
      );
      let x1 = vectorObject.x;
      let y1 = vectorObject.y;
      let x2 = x1 + cos(noiseValue);
      let y2 = y1 + sin(noiseValue);

      if (
        min(x1, x2) > 0 &&
        max(y1, y2) < height &&
        min(y1, y2) > 0 &&
        max(x1, x2) < width
      ) {
        vertex(x1, y1);
      } else {
        endShape(OPEN);
        beginShape();
      }
      vectorObject.x = x2;
      vectorObject.y = y2;
    }
    endShape(OPEN);
  }
};
