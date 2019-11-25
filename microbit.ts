//%
namespace microbit {

let microbit = img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f . . .
    . . 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 f 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f . .
    . 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 5 5 5 5 5 f f f 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 5 5 5 5 f f f f 5 5 f f f f f f f 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 5 5 5 f f f f f 5 f f f f f f f 5 f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 5 5 f f f f f f f f f f f f f f 5 f 5 f f f 5 f 5 f f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 5 f f f f f f f f f f f f f f f 5 f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f .
    . 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . 5 f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 f f f f f .
    . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 f f f f f f .
    . f f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f 5 f f f f f f f .
    . f f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f c b b b b c f f f f f f f f f f f f f f f f f f f f f f f f f f f c b b b b c f f f f f .
    . f f f f b b f f b b f f f f f f f f f f f f f f f f f f f f f f f f f f f b b f f b b f f f f f .
    . f f 8 f b f f f f b f f f f f c f f f c f f f c f f f c f f f c f f f f f b f f f f b f 8 f f f .
    . f f f f b f f f f b f f f f f c f f f c f f f c f f f c f f f c f f f f f b f f f f b f f f f f .
    . f f f f b b f f b b f f f f f f f f f f f f f f f f f f f f f f f f f f f b b f f b b f f f f f .
    . f f f f c b b b b c f f f f f f f f f f f f f f f f f f f f f f f f f f f c b b b b c f f f f f .
    . f f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f f f 5 f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f f 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . f f f f 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . f f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . f f f f 4 4 4 4 f f f f f 4 4 4 4 f f f f f 4 4 4 4 f f f f f 4 4 4 4 f f f f f 4 4 4 4 f f f f .
    . f f f 4 4 f f 4 4 f f f 4 4 f f 4 4 f f f 4 4 f f 4 4 f f f 4 4 f f 4 4 f f f 4 4 f f 4 4 f f f .
    . f f f 4 f f f f 4 f f f 4 f f f f 4 f f f 4 f f f f 4 f f f 4 f f f f 4 f f f 4 f f f f 4 f f f .
    . f f f 4 f f f f 4 f f f 4 f f f f 4 f f f 4 f f f f 4 f f f 4 f f f f 4 f f f 4 f f f f 4 f f f .
    . 4 4 f 4 4 f f 4 4 f 4 f 4 4 f f 4 4 f 4 f 4 4 f f 4 4 f 4 f 4 4 f f 4 4 f 4 f 4 4 f f 4 4 f 4 4 .
    . 4 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 4 .
    . 4 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 4 .
    . . 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 . .
    . . . f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
` 

function scaleUp(img: Image, s: number) {
    let largeOne = image.create(160, 120)
    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++) {
            let color = img.getPixel(x, y);
            let xs = s * x + s * 2
            let ys = s * y;
            largeOne.fillRect(xs, ys, s, s, color)
        }
    }
    return largeOne;
}

let scale = 3
let background = scaleUp(microbit, scale)
    scene.setBackgroundImage(background)
scene.setBackgroundColor(1)

// create led sprites
let led0X = 55
let led0Y = 36
let red = 2
let leds: Sprite[] = []
let flags: boolean[] = []
for (let z = 0; z <= 4; z++) {
    for (let a = 0; a <= 4; a++) {
        let led = image.create(scale, scale * 2)
        led.fill(red)
        let ledSprite = sprites.create(led)
        ledSprite.x = led0X + z * (4 * scale)
        ledSprite.y = led0Y + a * (4 * scale)
        ledSprite.setFlag(SpriteFlag.Invisible, true)
        flags.push(true);
        leds.push(ledSprite)
    }
}

//% block
export function plot(x: number, y: number) {
    let index = 5 * x + y
    if (0 <= index && index < 25) {
        leds[index].setFlag(SpriteFlag.Invisible, false)
        flags[index] = false
    }
}

//% block
export function unplot(x: number, y: number) {
    let index = 5 * x + y
    if (0 <= index && index < 25) {
        leds[index].setFlag(SpriteFlag.Invisible, true)
        flags[index] = true;
    }
}

//% block
export function point(x: number, y: number) {
    let index = 5 * x + y;
    if (0 <= index && index < 25) {
        return !flags[index]
    }
    return false;
}


/**
 * Toggles a particular pixel
 * @param x pixel column
 * @param y pixel row
 */
//% weight=77
//% blockId=device_led_toggle block="toggle|x %x|y %y" icon="\uf204" blockGap=8
//% x.min=0 x.max=4 y.min=0 y.max=4
//% x.fieldOptions.precision=1 y.fieldOptions.precision=1
export function toggle(x: number, y: number): void {
    if (point(x, y)) {
        unplot(x, y);
    } else {
        plot(x, y);
    }
}

/**
 * Turns all LEDS on
 */
//% block
export function plotAll(): void {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            plot(i, j);
        }
    }
}

/**
 * Inverts the current LED display
 */
//% block 
export function toggleAll(): void {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            toggle(i, j);
        }
    }
}

// what's the current high value
let barGraphHigh = 0;
// when was the current high value recorded
let barGraphHighLast = 0;

/**
 * Displays a vertical bar graph based on the `value` and `high` value.
 * If `high` is 0, the chart gets adjusted automatically.
 * @param value current value to plot
 * @param high maximum value. If 0, maximum value adjusted automatically, eg: 0
 */
//% help=led/plot-bar-graph weight=20
//% blockId=device_plot_bar_graph block="plot bar graph of %value up to %high" icon="\uf080" blockExternalInputs=true
//% parts="ledmatrix"
export function plotBarGraph(value: number, high: number): void {
    const now = game.runtime();
    console.logValue("", value);
    value = Math.abs(value);

    // auto-scale "high" is not provided
    if (high > 0) {
        barGraphHigh = high;
    } else if (value > barGraphHigh || now - barGraphHighLast > 10000) {
        barGraphHigh = value;
        barGraphHighLast = now;
    }

    // normalize lack of data to 0..1
    if (barGraphHigh < 16 * Number.EPSILON)
        barGraphHigh = 1;

    // normalize value to 0..1
    const v = value / barGraphHigh;
    const dv = 1 / 16;
    let k = 0;
    for (let y = 4; y >= 0; --y) {
        for (let x = 0; x < 3; ++x) {
            if (k > v) {
                unplot(2 - x, y);
                unplot(2 + x, y);
            } else {
                plot(2 - x, y);
                plot(2 + x, y);
            }
            k += dv;
        }
    }
}


}