

class Particle{
    constructor(x, y) {
        // we have a position x
        this.x = x
        // y
        this.y = y
        // an original x
        this.initialX = x
        // a radius
        this.r = 3
        // and a period
        this.T = 100
    }

    show() {
        fill(0, 0, 100)
        noStroke()
        circle(this.x, this.y, this.r)
    }

    update() {
        // we should be oscillating. What is our omega?
        let omega = TAU/this.T
        // and now we need to figure out our amp.
        let amp = 20
        // We've got the concepts! Let's type in the x.
        this.x = this.initialX + amp*sin(omega*frameCount/5)
    }
}



