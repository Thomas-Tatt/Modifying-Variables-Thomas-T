let Hunger = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Hunger = Hunger + 3
        basic.showNumber(Hunger)
    } else if (input.buttonIsPressed(Button.B)) {
        Hunger = 0
        basic.showNumber(Hunger)
    }
})
