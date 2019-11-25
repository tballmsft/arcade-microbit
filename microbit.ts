// Add your code here
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

export function plot(x: number, y: number) {
    let index = 5 * x + y
    if (0 <= index && index < 25) {
        leds[index].setFlag(SpriteFlag.Invisible, false)
        flags[index] = false
    }
}

export function toggle(x: number, y: number) {
    let index = 5 * x + y
    if (0 <= index && index < 25) {
        flags[index] = !flags[index];
        leds[index].setFlag(SpriteFlag.Invisible, flags[index])
    }
}

export function unplot(x: number, y: number) {
    let index = 5 * x + y
    if (0 <= index && index < 25) {
        leds[index].setFlag(SpriteFlag.Invisible, true)
        flags[index] = true;
    }
}

export function point(x: number, y: number) {
    let index = 5 * x + y;
    if (0 <= index && index < 25) {
        return flags[index]
    }
    return false;
}

}