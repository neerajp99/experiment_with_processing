pallete = ["#EDF7F5", "#B7D7D8", "#FF8984", "#204E5F", "#FFC6A8"]

def setup():
    i = 0
    size(600, 800)
    background("#04383f")
    drawNoise(0,0,800)
    
    
def drawNoise(x, y, size):
    push()
    translate(x, y)
    
    for i in range(0, 2000, 1):
        x = random(0, size)
        y = random(0, size)
        w = random(1, 3)
        h = random(1, 3)
        noStroke()
        fill(50)
        ellipse(x, y, w, h)
    print('hello')
    pop()


def draw():
    for i in range(20, 585, 4):
        # c = random(pallete)
        if random(0, 1) > 0.4:
            y1 = random( 20, 250)
            y2 = random(400, 790)
            strokeWeight(random(2, 5))
            stroke("#EDF7F5")
            # filter(BLUR, 20)
            line(i, y1, i, y2)
    for i in range(20, 585, 4):
        # c = random(pallete)
        if random(0, 1) > 0.4:
            y1 = random( 300, 600)
            y2 = random(650, 750)
            strokeWeight(random(2, 4))
            stroke("#B7D7D8")
            # filter(BLUR, 20)
            line(i, y1, i, y2)
            
    for i in range(20, 585, 4):
        # c = random(pallete)
        if random(0, 1) > 0.4:
            y1 = random( 20, 80)
            y2 = random(150, 600)
            strokeWeight(random(2, 5))
            stroke("#B7D7D8")
            # filter(BLUR, 20)
            line(i, y1, i, y2)
    drawNoise(0,0,800)
    noLoop()
    
    
    
