input.onButtonPressed(Button.A, function () {
    music.playMelody("A B A G - G F E ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C C C D E - D - ", 120)
    music.playMelody("C E D D C - - - ", 120)
})
music.playTone(262, music.beat(BeatFraction.Breve))
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
