

class particle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.r = 1
        this.originalx = x

        // we need our period for us to oscillate
        this.T = 100
        // and we want some more color.
        this.hue = map(this.originalx, 0, width, 0, 360)
    }

    show() {
        // if (abs(this.pos.x - this.originalx) >= 5) {
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

    update() {
        // what is our omega?
        let ω = 2*PI/this.T

        // what is our amplitude?
        let amp = map(sin(ω*this.originalx), -1, 1, 0, 10)

        // and now we just need our x position!
        this.pos.x = this.originalx + amp*sin(frameCount/5)
    }
}

