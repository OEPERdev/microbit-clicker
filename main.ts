input.onButtonPressed(Button.A, function () {
    if (Level == 0) {
        Money += 1
        music.playMelody("F - - F - - - - ", 1500)
    }
    if (Level == 1) {
        Money += 2
        music.playMelody("F - - F - - - - ", 1500)
    }
    if (Level == 2) {
        Money += 5
        music.playMelody("F - - F - - - - ", 1500)
    }
    if (Level == 3) {
        Money += 15
        music.playMelody("F - - F - - - - ", 1500)
    }
})
let Money = 0
let Level = 0
music.playMelody("C A D F - - - - ", 180)
basic.forever(function () {
    basic.showNumber(Money)
})
basic.forever(function () {
    if (Money < 9) {
        Level = 0
    }
    if (Money > 9) {
        Level = 1
    }
    if (Money > 24) {
        Level = 2
    }
    if (Money > 49) {
        Level = 3
    }
})
