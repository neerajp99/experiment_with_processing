inc = 0.1
scl = 20
zoff = 0


def setup():
    size(800, 400)
    cols = int(width / scl)
    rows = int(height / scl)
    
def draw():
    global inc, scl, zoff
    background(255)
    randomSeed(10)
    yoff = 0
    for x in range(0, width, 1):
        xoff = 0
        for y in range(0, height, 1):
            index = (x + y * width)
            angle = noise(xoff, yoff, zoff) * TWO_PI
            v = PVector.fromAngle(angle)
            xoff += inc
            # noStroke()
            # fill(r)
            # rect(x * scl , y * scl, scl, scl)
            stroke(0)
            push()
            translate(x*scl, y*scl)
            rotate(v.heading())
            line(0, 0, scl, 0)
            pop()
            
        yoff += inc
        zoff += 0.1
    noLoop()

    # noLoop()
