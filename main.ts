let buttonVal = 0
let item = 0
function button () {
    buttonVal = pins.analogReadPin(AnalogPin.P2)
    if (buttonVal < 256) {
        item = 1
    } else if (buttonVal < 597) {
        item = 2
    } else if (buttonVal < 725) {
        item = 3
    } else {
        item = 0
    }
}
basic.forever(function () {
    button()
    if (item) {
        basic.showNumber(item)
    } else if (pins.analogReadPin(AnalogPin.P0) < 400) {
        basic.showString("-X")
    } else if (pins.analogReadPin(AnalogPin.P0) < 600) {
        basic.showString("+X")
    } else {
        basic.clearScreen()
    }
})
