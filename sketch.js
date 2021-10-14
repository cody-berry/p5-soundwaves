/*
@author Cody
@date 2021-10-13

version comments
.   grid of particles
.   update—sine wave
    sound wave—activate and delay

bugs
    hidden particles from background
 */
let font
let particles = []
let SPACING
let ROWS
let COLUMNS
let PADDING_X
let PADDING_Y

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    PADDING_X = 50
    PADDING_Y = 50

    SPACING = 10
    ROWS = (width - 2*PADDING_X)/SPACING
    COLUMNS = (height - 2*PADDING_Y)/SPACING

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLUMNS; col++) {
            let x = PADDING_X + row*SPACING
            let y = PADDING_Y + col*SPACING
            particles.push(new Particle(x, y))
        }
    }
}

function draw() {
    background(209, 80, 30)
    background(234, 34, 24)
    particles.forEach(p => p.show())
    particles.forEach(p => p.update())
}

function mousePressed() {
    if (!particles[0].activated) {
        particles.forEach(p => p.activate(250, //amplitude
            9, //period
            p.initialX))
    } else {
        noLoop()
    }
}

