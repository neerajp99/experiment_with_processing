def setup():
    size(500, 500)
    pixelDensity(1)
    noiseDetail(40)
    
# xoff = 0
# yoff = 10000
start = 0
inc = 0.01
def draw():
    # background(0)
    # global xoff, yoff
    # x = map(noise(xoff), 0, 1, 0, width)
    # y = map(noise(yoff), 0, 1, 0, height)
    # # x = random(width)
    # xoff += 0.01
    # yoff += 0.01
    # ellipse(x, y, 2, 2)
    
    # Using vertex and sine waves
    # global start, inc
    # xoff = start
    # beginShape()
    # stroke(255)
    # noFill()
    # for x in range(0, width, 1):
    #     stroke(255)
    #     # y = noise(sin(xoff)) * height 
    #     y = height / 2 + sin(xoff)  * height /2
    #     a = map(noise(xoff), 0, 1, 0, height)
    #     b = map(sin(xoff), -1, 1, -50, 50)
    #     c = a + b
    #     vertex(x, c)
    #     xoff += 0.02
    # endShape()
    # start += inc
        
    
    # To create grain texture
    # xoff = 0
    # loadPixels()
    # for x in range(0, width, 1):
    #     for y in range(0, height, 1):
    #         index = (x + y * width)
    #         r = noise(xoff) * 255
    #         if random(1) > 0:
    #             pixels[index] = color(r)
    #         else:
    #             pixels[index] = color(255)
    #         xoff += 0.02
    # updatePixels()
    # noLoop()
    
    # To add cloudy effect
    # yoff = 0
    # loadPixels()
    # for x in range(0, width, 1):
    #     xoff = 0
    #     for y in range(0, height, 1):
    #         index = (x + y * width)
    #         r = noise(xoff, yoff) * 255
    #         if random(1) > 0:
    #             pixels[index] = color(r)
    #         else:
    #             pixels[index] = color(255)
    #         xoff += 0.02
    #     yoff += 0.02
    # updatePixels()
    # noLoop()
    
    
