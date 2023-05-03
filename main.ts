input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100000000; index++) {
        music.setVolume(100)
        music.playMelody("C5 - C5 B C5 A B - ", 260)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 100000000; index++) {
        music.setVolume(100)
        music.playMelody("G E A G - A E D ", 260)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 100000000; index++) {
        music.setVolume(100)
        music.playMelody("A D E F D G - F ", 260)
    }
})
