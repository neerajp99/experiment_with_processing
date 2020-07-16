def setup():
    size(700, 700)
    background(0)
    points = []
    # Loop over and create random x, y vectors 
    for i in range(1000):
        newVector = PVector(random(width + 100), random(height))
        # Push the newly created vector points to the points array
        points.append(newVector)
    print(points)
    
def draw():
    for i in range(len(points)):
        noFill()
        vectorObject = points[i]
        alphaValue = map(i, 0, 200, 0, 250)
        colorsArray = [
        [69, 33, 124, alpha],
        [7, 153, 242, alpha],
        [255, 255, 255, alpha]
        ]
        randomColor = color(random(255), random(255), random(255), alpha)
        stroke("#333");
        strokeWeight(0.3);
        beginShape()
        
        endShape()
