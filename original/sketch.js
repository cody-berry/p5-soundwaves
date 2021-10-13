/*
@author Cody
@date 2021-10-10
This is a simulation of a longitudinal wave and a sound wave, or what Zz has it
like. Inspired by the Physics Khan Academy teachers and Zz.

version comments:
.   grid of particles and Particle class
.   update—sine wave
.   delay for sound wave
 */

let font
let particles = []
let ROWS
let COLUMNS
let PADDING_X
let PADDING_Y
let SPACING

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    frameRate(144)

    PADDING_X = 50
    PADDING_Y = 50

    SPACING = 10
    ROWS = (width - 2*PADDING_X)/SPACING
    COLUMNS = (height - 2*PADDING_X)/SPACING

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLUMNS; col++) {
            particles.push(new particle(PADDING_X + SPACING*row,
                PADDING_Y + SPACING*col))
        }
    }
}

function draw() {
    background(209, 80, 30)
    particles.forEach(function(p) {
        p.show()
        p.update()
    })
}


function mousePressed() {

    if (particles[0].activated) {

    } else {
        for (let p of particles) {
            // we want every particle to hit another one, so we need to make it
            // this.originalX.
            p.activate(
                20,
                6,
                p.originalx)
        }
    }
}
