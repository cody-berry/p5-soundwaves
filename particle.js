

class particle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.r = 1
    }

    show() {
        fill(0, 0, 100)
        stroke(0, 0, 100)
        strokeWeight(1)
        circle(this.pos.x, this.pos.y, this.r*2)
    }
}

