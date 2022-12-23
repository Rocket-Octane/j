input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.showLeds(`
    . . . . #
    . # . # .
    . # # . .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    radio.setGroup(1)
})
