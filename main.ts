controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    microbit.showIcon(IconNames.Sad)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    microbit.showIcon(IconNames.Happy)
})
