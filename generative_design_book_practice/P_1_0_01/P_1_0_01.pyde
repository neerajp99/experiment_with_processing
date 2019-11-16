
def setup():
    size(720, 720)
    noCursor()
    colorMode(RGB, 360, 360, 200)
    rectMode(CENTER)
    noStroke()

def draw():
    background(mouseY/2, 100, 100)
    fill (360 - mouseY/2, 100, 100)
    square(360, 360, mouseX + 1 )
    
