def setup():
    background(230)
    size(500, 800)
   
    smooth()
    
    
def draw():
    smooth();

    
    
    ctr = 0.05
    st = 220
    ins = 0
    for k in range(6):
        for i in range(ins, 500 - ins):
            strokeWeight(ctr)
            if random(1) > 0.8:
                line(i, 0, i, 800)
                stroke(st)
        ctr += 0.2
        st -= 5
        ins += 40
    
    ctr2 = 0.03
    st2 = 150
    ins2 = 100
    for m in range(3):
        for i in range(ins2, 500 - ins2):
            strokeWeight(ctr2)
            if random(1) > 0.8:
                line(i, random(0,200), i, random(500, 800))
                stroke(st2)
        ctr2 += 0.03
        st2 -= 30
        ins2 += 40
    
    for i in range(0, 500):
        if random(1) > 0.95:
            strokeWeight(2)
            line(i, 0, i, 800)
            stroke(220)


    colors = ["#295e8f", "#44729a", "#adbbc6", "#19223b"]
    for j in range(0,5):
        for i in range(200, 400):
            if random(1) > 0.9:
                strokeWeight(0.04)
                line(i,30,i,770)
                stroke(colors[int(random(0, 4))])

    colors2 = ["#0c1e4e", "#cfba3b", "#3e5269", "#adbbc6", "#78a293"]
    for j in range(0, 10):
        for i in range(280, 350):
            if random(1) > 0.7:
                strokeWeight(0.05)
                line(i, 30, i, 770)
                stroke(colors2[int(random(0, 5))])
    stroke(30)
    strokeWeight(10)
    line(300, 0, 300, 800)
    
    colors3 = ["#222227", "#636566", "#353334", "#797876"]
    l = 100
    
    for i in range(3):
        for j in range(150, 400):
            if random(1) > 0.9:
                strokeWeight(0.01)
                line(j, 0, j, l)
                stroke(colors3[int(random(0, 4))])
            if j > 300:
                l -= 3
            else:
                l += 3
    x = 0

    colors4 = ["#7e8187", "#969aa3", "#71726d", "#959ba1"]
       
    for i in range(3):
        for j in range(200, 450):
            if random(1) > 0.2:
                strokeWeight(0.01)
                line(j, 0, j, 800)
                tint(255, 200)
                stroke(colors4[int(random(0, 4))])
    colors5 = ["#4f4d4e", "#909699", "#545966"]
    
    for i in range(3):
        for j in range(0, 200):
            if random(1) > 0.8:
                strokeWeight(1)
                line(j, random(200), j, random(500, 700))
                tint(255, 200)
                stroke(220)
              
    

    noLoop()
    
    
