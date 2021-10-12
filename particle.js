

class particle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.r = 3
        this.originalx = x
        // and we want some more color.
        this.hue = map(this.originalx, 0, width, 0, 360)
        // and how about a delay?
        this.delay = 0
        // and we need an activated.
        this.activated = false
        // and we want the particles to steadily move.
        this.offset = 0
        // what is our angle? an angle instance variable will help
        this.angle = 0
    }

    show() {
        // if (abs(this.pos.x - this.originalX) >= 5) {
        //     fill(this.hue % 360, 50, 100)
        //     stroke(this.hue % 360, 50, 100)
        // }
        // else {
        fill(210, 100, 100)
        noStroke()
        fill(0, 0, 100, 30)
        // }
        // strokeWeight(1)
        circle(this.pos.x, this.pos.y, this.r * 2)
    }

    activate(amp, period, delay) {
        this.amp = amp
        this.T = period
        this.delay = delay
        this.activated = true
    }

    update() {
        if (this.activated) {
            let DELTA = 0.03
            // we don't oscillate unless our countdown timer has run off
            if (this.delay <= 0) {
                // what is our angle? We need to increment it.
                // we need our ω.
                let ω = 2 * PI / this.T
                // we need our x position!
                this.pos.x = this.originalx + this.amp * sin(ω*(this.angle))

                this.angle += DELTA
            } else {
                // we want us to wait this.delay frames longer
                this.delay -= 1
            }
        }
    }
}

