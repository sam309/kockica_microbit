let Random = 0
input.onGesture(Gesture.Shake, function () {
    Random = randint(1, 6)
    if (Random == 1) {
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(1)
    }
    if (Random == 2) {
        images.createImage(`
            . . . . .
            . . . . .
            . # # . .
            . . . . .
            . . . . .
            `).showImage(1)
    }
    if (Random == 3) {
        images.createImage(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `).showImage(1)
    }
    if (Random == 4) {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `).showImage(1)
    }
    if (Random == 5) {
        images.createImage(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `).showImage(1)
    }
    if (Random == 6) {
        images.createImage(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `).showImage(1)
    }
})
