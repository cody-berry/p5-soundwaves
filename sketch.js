/*
@author Cody
@date 2021-10-10
This is a simulation of a longitudinal wave and a sound wave, or what Zz has it
like. Inspired by the Physics Khan Academy teachers and Zz.

version comments:
.   grid of particles and Particle class
    update—sine wave
    delay for sound wave
 */

let font
let particles = []
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

    ROWS = 55
    COLUMNS = 28

    PADDING_X = 50
    PADDING_Y = 50

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLUMNS; col++) {
            particles.push(new particle(PADDING_X + 10*row, PADDING_Y + 10*col))
        }
    }
}

function draw() {
    background(209, 80, 30)
    particles.forEach(p => p.show())
    particles.forEach(p => p.update())
}