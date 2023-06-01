input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("" + (input.temperature()))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    input.calibrateCompass()
    basic.clearScreen()
})
radio.setGroup(255)
basic.forever(function () {
    radio.sendValue("temp", input.temperature())
    radio.sendValue("light", input.lightLevel())
    radio.sendValue("dir", input.compassHeading())
    basic.showIcon(IconNames.Yes)
})
