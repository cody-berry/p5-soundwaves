

class particle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.r = 1
        this.originalx = x
        // and we want some more color.
        this.hue = map(this.originalx, 0, width, 0, 360)
        // and how about a delay?
        this.delay = Infinity
        this.originald = 0
        // and we need an activated.
        this.activated = false
        // and we want the particles to steadily move.
        this.offset = 0
    }

    show() {
        // if (abs(this.pos.x - this.originalX) >= 5) {
        //     fill(this.hue % 360, 50, 100)
        //     stroke(this.hue % 360, 50, 100)
        // }
        // else {
            fill(210, 100, 100)
            stroke(210, 100, 100)
        // }
        // strokeWeight(1)
        circle(this.pos.x, this.pos.y, this.r * 2)
    }

    activate(amp, period, delay) {
        this.amp = amp
        this.T = period
        this.delay = delay
        this.originald = delay
    }

    update() {
        // we don't oscillate unless our countdown timer has run off
        if (this.delay <= 0) {
            this.activated = true
        }

        if (this.activated) {
            // we need our ω.
            let ω = 2*PI/this.T
            // we need our x position!
            this.pos.x =
                this.originalx + this.amp * sin(ω*(frameCount/5 - this.originald))
        } else {
            if (this.delay !== Infinity)
                this.delay -= 1
        }
    }
}

