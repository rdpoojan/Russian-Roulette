let outcome = 0
input.onButtonPressed(Button.A, function () {
    outcome = randint(1, 6)
    if (outcome == 1) {
        // Player loses
        basic.showIcon(IconNames.Skull)
    } else {
        // Player is safe
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(2000)
    basic.clearScreen()
})
