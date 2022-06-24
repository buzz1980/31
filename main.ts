let antwoord = 0
input.onButtonPressed(Button.A, function () {
    antwoord = randint(0, 3)
    if (antwoord == 0) {
        basic.showString("XXL")
        basic.clearScreen()
    }
    if (antwoord == 1) {
        basic.showString("XL")
        basic.clearScreen()
    }
    if (antwoord == 2) {
        basic.showString("X")
        basic.pause(500)
        basic.clearScreen()
    }
    if (antwoord == 3) {
        basic.showString("L")
        basic.pause(500)
        basic.clearScreen()
    }
})
