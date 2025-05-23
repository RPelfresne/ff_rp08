radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(1000)
    radio.setGroup(2)
    radio.sendString(receivedString)
})
radio.setGroup(1)
basic.showIcon(IconNames.Tortoise)
basic.forever(function () {
	
})
