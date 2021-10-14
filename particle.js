

class Particle{
    constructor(x, y, deltaAngle=3) {
        // we have a position x
        this.x = x
        // y
        this.y = y
        // an original x
        this.initialX = x
        // a radius
        this.r = 3
        // an angle
        this.angle = 0
        // a Δ angle
        this.deltaAngle = deltaAngle
        // a delay
        this.delay = 0
        // and an activated boolean variable.
        this.activated = false
    }

    // Hey, cody. Activate! Cody (as a robot): Setting period...setting
    // amplitude...setting delay...setting activated...done. Cody will then
    // set a timer and when that timer rings, cody starts oscillating.
    activate(T, amp, delay) {
        this.T = T
        this.amp = amp
        this.delay = delay
        this.activated = true
    }

    show() {
        fill(0, 0, 100, 13)
        noStroke()
        circle(this.x, this.y, this.r*2)
    }

    update() {
        if (this.activated) {
            if (this.delay <= 0) {
                // we should be oscillating. What is our omega?
                let omega = TAU / this.T
                // We've got the concepts! Let's type in the x.
                this.x = this.initialX + this.amp * sin(omega * this.angle)
                this.angle += this.deltaAngle
            } else {
                this.delay--
            }
        }
    }
}



