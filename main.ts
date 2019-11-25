
let smallOne = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f . .
    . 5 5 5 5 5 f 5 5 5 f 5 f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 5 f f 5 5 f f f f f 5 5 5 5 5 f f f f f f f f f f f f .
    . 5 5 5 f f f 5 f f f f f 5 f 5 f 5 f 5 f f f f f f f f f f f .
    . 5 5 f f f f f f f f f f 5 f f f f f 5 f f f f f f f f f f f .
    . 5 f f f f f f f f f f f f 5 5 5 5 5 f f f f f f f f f f f f .
    . f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 f f .
    . f f f f f f f f f f f c f c f c f c f c f f f f f f 5 f f f .
    . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . f f b b b f f f f f f c f 2 f c f 2 f c f f f f f b b b f f .
    . f f b f b f f f f f f f f f f f f f f f f f f f f b f b f f .
    . f f b b b f f f f f f c f c f c f c f c f f f f f b b b f f .
    . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . f f f 5 f f f f f f f 2 f c f c f c f 2 f f f f f f f f f f .
    . f f 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . f f f f f f f f f f f c f 2 f 2 f 2 f c f f f f f f f f f f .
    . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . f f 4 4 f f f f 4 4 f f f f 4 4 f f f f 4 4 f f f f 4 4 f f .
    . f 4 f f 4 f f 4 f f 4 f f 4 f f 4 f f 4 f f 4 f f 4 f f 4 f .
    . f 4 f f 4 f f 4 f f 4 f f 4 f f 4 f f 4 f f 4 f f 4 f f 4 f .
    . 4 4 4 4 4 c 4 4 4 4 4 c 4 4 4 4 4 c 4 4 4 4 4 c 4 4 4 4 4 4 .
    . 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 4 .
    . . c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 c 4 . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`)
smallOne.setFlag(SpriteFlag.Invisible, true)
let mediumOne = sprites.create(img`
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
`)

let mbitPerson = sprites.create(img`
    . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . .
    . . . . . 5 5 5 5 5 5 5 . . . . . .
    . . . . 5 f f f f f f f 5 . . . . .
    . . . . 5 f 5 f f f 5 f 5 . . . . .
    . . . . 5 f f f f f f f 5 . . . . .
    . . . . . 5 5 5 5 5 5 5 . . . . . .
    . . . . . . . 5 5 5 . . . . . . . .
    . . . . . . . 5 5 5 . . . . 5 5 5 .
    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . .
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . .
    . . 5 5 . . . 5 5 5 . . . . . . . .
    . 5 5 5 . . . 5 5 5 . . . . . . . .
    . 5 5 . . . . 5 5 5 . . . . . . . .
    . 5 . . . . 5 5 5 5 5 . . . . . . .
    . . . . . . 5 5 5 5 5 . . . . . . .
    . . . . . . 5 5 5 5 5 . . . . . . .
    . . . . . 5 5 5 5 5 5 5 . . . . . .
    . . . . 5 5 5 5 5 5 5 5 5 . . . . .
    . . . . 5 5 . . . . . 5 5 . . . . .
    . . . . 5 5 . . . . . 5 5 . . . . .
    . . . . 5 5 . . . . . 5 5 . . . . .
    . . . . 5 5 . . . . . 5 5 . . . . .
    . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
mbitPerson.setFlag(SpriteFlag.Invisible, true)

mediumOne.setFlag(SpriteFlag.Invisible, true)
let largeOne = image.create(160, 120)

function scaleUp(img: Image, s: number) {
    for (let x = 0; x < mediumOne.width; x++) {
        for (let y = 0; y < mediumOne.height; y++) {
            let color = mediumOne.image.getPixel(x, y);
            let xs = s * x + s * 2
            let ys = s * y;
            largeOne.fillRect(xs, ys, s, s, color)
        }
    }
}
let scale = 3
scaleUp(mediumOne.image, scale)
scene.setBackgroundImage(largeOne)
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

function plot(x: number, y: number) {
    let index = 5 * x + y
    if (0 <= index && index < 25) {
        leds[index].setFlag(SpriteFlag.Invisible, false)
        flags[index] = false
    }
}

function toggle(x: number, y: number) {
    let index = 5 * x + y
    if (0 <= index && index < 25) {
        flags[index] = !flags[index];
        leds[index].setFlag(SpriteFlag.Invisible, flags[index])
    }
}

function unplot(x: number, y: number) {
    let index = 5 * x + y
    if (0 <= index && index < 25) {
        leds[index].setFlag(SpriteFlag.Invisible, true)
        flags[index] = true;
    }
}

function point(x: number, y: number) {
    let index = 5 * x + y;
    if (0 <= index && index < 25) {
        return flags[index]
    }
    return false;
}

for (let i = 0; i <= 4; i++) {
    plot(i, i)
}

for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
        toggle(x, y)
    }
}

for (let i = 0; i <= 4; i++) {
    unplot(4 - i, i)
}


