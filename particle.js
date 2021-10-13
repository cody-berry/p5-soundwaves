

class Particle{
    constructor(x, y) {
        // we have a position
        this.x = x
        this.y = y
        // and a radius.
        this.r = 3
    }

    show() {
        fill(0, 0, 100)
        noStroke()
        circle(this.x, this.y, this.r)
    }
}



