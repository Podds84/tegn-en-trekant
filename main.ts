radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        for (let index = 0; index < 3; index++) {
            bitbot.goms(BBDirection.Forward, 60, 500)
            bitbot.rotatems(BBRobotDirection.Right, 60, 360)
        }
    } else if (receivedNumber == 2) {
        Lag_en_ny()
    }
})
function Lag_en_ny () {
    bitbot.rotatems(BBRobotDirection.Left, 60, 360)
    bitbot.goms(BBDirection.Forward, 60, 500)
    bitbot.rotatems(BBRobotDirection.Left, 60, 540)
    for (let index = 0; index < 3; index++) {
        bitbot.rotatems(BBRobotDirection.Right, 60, 360)
        bitbot.goms(BBDirection.Forward, 60, 500)
    }
}
radio.setGroup(22)
