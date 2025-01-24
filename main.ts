let strip: neopixel.Strip = null
function rgb_led (color: string) {
    strip = neopixel.create(DigitalPin.P14, 4, NeoPixelMode.RGB)
    if (color == "red") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (color == "green") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (color == "blue") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (color == "black") {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
}
basic.forever(function () {
	
})
