/*
The MIT License (MIT)

Copyright (c) 2013-2016 The MicroPython-on-micro:bit Developers, as listed
in the accompanying AUTHORS file

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// Images from file microbitconstimage.cpp https://github.com/bbcmicrobit/micropython

enum IconNames {
    //% block="heart"
    //% jres=icons.heart
    Heart = 0,
    //% block="small heart"
    //% jres=icons.smallheart
    SmallHeart,
    //% block="yes"
    //% jres=icons.yes
    Yes,
    //% block="no"
    //% jres=icons.no
    No,
    //% block="happy"
    //% jres=icons.happy
    Happy,
    //% block="sad"
    //% jres=icons.sad
    Sad,
    //% block="confused"
    //% jres=icons.confused
    Confused,
    //% block="angry"
    //% jres=icons.angry
    Angry,
    //% block="asleep"
    //% jres=icons.asleep
    Asleep,
    //% block="surprised"
    //% jres=icons.surprised
    Surprised,
    //% block="silly"
    //% jres=icons.silly
    Silly,
    //% block="fabulous"
    //% jres=icons.fabulous
    Fabulous,
    //% block="meh"
    //% jres=icons.meh
    Meh,
    //% block="t-shirt"
    //% jres=icons.tshirt
    TShirt,
    //% block="roller skate"
    //% jres=icons.rollerskate
    Rollerskate,
    //% block="duck"
    //% jres=icons.duck
    Duck,
    //% block="house"
    //% jres=icons.house
    House,
    //% block="tortoise"
    //% jres=icons.tortoise
    Tortoise,
    //% block="butterfly"
    //% jres=icons.butterfly
    Butterfly,
    //% block="stick figure"
    //% jres=icons.stickfigure
    StickFigure,
    //% block="ghost"
    //% jres=icons.ghost
    Ghost,
    //% block="sword"
    //% jres=icons.sword
    Sword,
    //% block="giraffe"
    //% jres=icons.giraffe
    Giraffe,
    //% block="skull"
    //% jres=icons.skull
    Skull,
    //% block="umbrella"
    //% jres=icons.umbrella
    Umbrella,
    //% block="snake"
    //% jres=icons.snake
    Snake,
    //% block="rabbit"
    //% jres=icons.rabbit
    Rabbit,
    //% block="cow"
    //% jres=icons.cow
    Cow,
    //% block="quarter note"
    //% jres=icons.quarternote
    QuarterNote,
    //% block="eigth note"
    //% jres=icons.eigthnote
    EigthNote,
    //% block="pitchfork"
    //% jres=icons.pitchfork
    Pitchfork,
    //% block="target"
    //% jres=icons.target
    Target,
    //% block="triangle"
    //% jres=icons.triangle
    Triangle,
    //% block="left triangle"
    //% jres=icons.lefttriangle
    LeftTriangle,
    //% block="chess board"
    //% jres=icons.chessboard
    Chessboard,
    //% block="diamond"
    //% jres=icons.diamond
    Diamond,
    //% block="small diamond"
    //% jres=icons.smalldiamond
    SmallDiamond,
    //% block="square"
    //% jres=icons.square
    Square,
    //% block="small square"
    //% jres=icons.smallsquare
    SmallSquare,
    //% block="scissors"
    //% jres=icons.scissors
    Scissors
}

enum ArrowNames {
    //% blockIdentity=arrowNumber block="North"
    North = 0,
    //% blockIdentity=arrowNumber block="North East"
    NorthEast,
    //% blockIdentity=arrowNumber block="East"
    East,
    //% blockIdentity=arrowNumber block="South East"
    SouthEast,
    //% blockIdentity=arrowNumber block="South"
    South,
    //% blockIdentity=arrowNumber block="South West"
    SouthWest,
    //% blockIdentity=arrowNumber block="West"
    West,
    //% blockIdentity=arrowNumber block="North West"
    NorthWest,
}

function createImage(s: string) { return s; }

function showImage(s: string, interval: number) {
    let x = 0
    let y = 0;
    for(let i =0; i<s.length; i++) {
        if (s[i] == "." || s[i] == "#") {
            if (s[i] == ".") {
                microbit.unplot(x,y)
            } else {
                microbit.plot(x,y)
            }
            x += 1;
            if (x ==5 ) {
                y += 1;
                x = 0;
            }
        }
    }
}

namespace microbit {

    /**
     * Draws the selected icon on the LED screen
     * @param icon the predefined icon id
     * @param interval the amount of time (milliseconds) to show the icon. Default is 600.
     */
    //% weight=90 blockGap=8
    //% blockId=basic_show_icon
    //% block="show icon %i" icon="\uf00a"
    export function showIcon(icon: IconNames, interval = 600) {
        let res = images.iconImage(icon)
        showImage(res, interval)
    }

    /**
     * Draws an arrow on the LED screen
     * @param direction the direction of the arrow
     * @param interval the amount of time (milliseconds) to show the icon. Default is 600.
     */
    //% weight=50 blockGap=8
    //% blockId=basic_show_arrow
    //% block="show arrow %i=device_arrow"
    //% parts="ledmatrix"
    //% advanced=true
    //% help=basic/show-arrow
    export function showArrow(direction: number, interval = 600) {
        let res = images.arrowImage(direction)
        showImage(res, interval)
    }
}


namespace images {

    //% weight=50 blockGap=8
    //% help=images/arrow-image
    //% blockId=builtin_arrow_image block="arrow image %i=device_arrow"
    export function arrowImage(i: ArrowNames) {
        switch (i) {
            // compass directions
            case ArrowNames.North: return createImage(`
                                        . . # . .
                                        . # # # .
                                        # . # . #
                                        . . # . .
                                        . . # . .`);
            case ArrowNames.NorthEast: return createImage(`
                                        . . # # #
                                        . . . # #
                                        . . # . #
                                        . # . . .
                                        # . . . .`);
            case ArrowNames.East: return createImage(`
                                        . . # . .
                                        . . . # .
                                        # # # # #
                                        . . . # .
                                        . . # . .`);
            case ArrowNames.SouthEast: return createImage(`
                                        # . . . .
                                        . # . . .
                                        . . # . #
                                        . . . # #
                                        . . # # #`);
            case ArrowNames.South: return createImage(`
                                        . . # . .
                                        . . # . .
                                        # . # . #
                                        . # # # .
                                        . . # . .`);
            case ArrowNames.SouthWest: return createImage(`
                                        . . . . #
                                        . . . # .
                                        # . # . .
                                        # # . . .
                                        # # # . .`);
            case ArrowNames.West: return createImage(`
                                        . . # . .
                                        . # . . .
                                        # # # # #
                                        . # . . .
                                        . . # . .`);
            case ArrowNames.NorthWest: return createImage(`
                                        # # # . .
                                        # # . . .
                                        # . # . .
                                        . . . # .
                                        . . . . #`);
            default: return createImage(`
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        `);
        }
    }

    //% weight=50 blockGap=8
    //% help=images/icon-image
    //% blockId=builtin_image block="icon image %i"
    //% i.fieldEditor="imagedropdown"
    //% i.fieldOptions.columns="5"
    //% i.fieldOptions.width="380"
    //% i.fieldOptions.maxRows=4
    export function iconImage(i: IconNames) {
        switch (i) {
            case IconNames.Heart: return createImage(`
                                        . # . # .
                                        # # # # #
                                        # # # # #
                                        . # # # .
                                        . . # . .`);

            case IconNames.SmallHeart: return createImage(`
                                        . . . . .
                                        . # . # .
                                        . # # # .
                                        . . # . .
                                        . . . . .`);
            //faces
            case IconNames.Happy: return createImage(`
                                        . . . . .
                                        . # . # .
                                        . . . . .
                                        # . . . #
                                        . # # # .`);
            case IconNames.Sad: return createImage(`
                                        . . . . .
                                        . # . # .
                                        . . . . .
                                        . # # # .
                                        # . . . #`);
            case IconNames.Confused: return createImage(`
                                        . . . . .
                                        . # . # .
                                        . . . . .
                                        . # . # .
                                        # . # . #`);
            case IconNames.Angry: return createImage(`
                                        # . . . #
                                        . # . # .
                                        . . . . .
                                        # # # # #
                                        # . # . #`);
            case IconNames.Asleep: return createImage(`
                                        . . . . .
                                        # # . # #
                                        . . . . .
                                        . # # # .
                                        . . . . .`);
            case IconNames.Surprised: return createImage(`
                                        . # . # .
                                        . . . . .
                                        . . # . .
                                        . # . # .
                                        . . # . .`);
            case IconNames.Silly: return createImage(`
                                        # . . . #
                                        . . . . .
                                        # # # # #
                                        . . . # #
                                        . . . # #`);
            case IconNames.Fabulous: return createImage(`
                                        # # # # #
                                        # # . # #
                                        . . . . .
                                        . # . # .
                                        . # # # .`);
            case IconNames.Meh: return createImage(`
                                        # # . # #
                                        . . . . .
                                        . . . # .
                                        . . # . .
                                        . # . . .`);
            case IconNames.Yes: return createImage(`
                                        . . . . .
                                        . . . . #
                                        . . . # .
                                        # . # . .
                                        . # . . .`);
            case IconNames.No: return createImage(`
                                        # . . . #
                                        . # . # .
                                        . . # . .
                                        . # . # .
                                        # . . . #`);
            case IconNames.Triangle: return createImage(`
                                        . . . . .
                                        . . # . .
                                        . # . # .
                                        # # # # #
                                        . . . . .`);
            case IconNames.LeftTriangle: return createImage(`
                                        # . . . .
                                        # # . . .
                                        # . # . .
                                        # . . # .
                                        # # # # #`);
            case IconNames.Chessboard: return createImage(`
                                        . # . # .
                                        # . # . #
                                        . # . # .
                                        # . # . #
                                        . # . # .`);
            case IconNames.Diamond: return createImage(`
                                        . . # . .
                                        . # . # .
                                        # . . . #
                                        . # . # .
                                        . . # . .`);
            case IconNames.SmallDiamond: return createImage(`
                                        . . . . .
                                        . . # . .
                                        . # . # .
                                        . . # . .
                                        . . . . .`);
            case IconNames.Square: return createImage(`
                                        # # # # #
                                        # . . . #
                                        # . . . #
                                        # . . . #
                                        # # # # #`);
            case IconNames.SmallSquare: return createImage(`
                                        . . . . .
                                        . # # # .
                                        . # . # .
                                        . # # # .
                                        . . . . .`);

            case IconNames.Scissors: return createImage(`
                                        # # . . #
                                        # # . # .
                                        . . # . .
                                        # # . # .
                                        # # . . #`);
            // The following images were designed by Abbie Brooks.
            case IconNames.TShirt: return createImage(`
                                        # # . # #
                                        # # # # #
                                        . # # # .
                                        . # # # .
                                        . # # # .`);
            case IconNames.Rollerskate: return createImage(`
                                        . . . # #
                                        . . . # #
                                        # # # # #
                                        # # # # #
                                        . # . # .`);
            case IconNames.Duck: return createImage(`
                                        . # # . .
                                        # # # . .
                                        . # # # #
                                        . # # # .
                                        . . . . .`);
            case IconNames.House: return createImage(`
                                        . . # . .
                                        . # # # .
                                        # # # # #
                                        . # # # .
                                        . # . # .`);
            case IconNames.Tortoise: return createImage(`
                                        . . . . .
                                        . # # # .
                                        # # # # #
                                        . # . # .
                                        . . . . .`);
            case IconNames.Butterfly: return createImage(`
                                        # # . # #
                                        # # # # #
                                        . . # . .
                                        # # # # #
                                        # # . # #`);
            case IconNames.StickFigure: return createImage(`
                                        . . # . .
                                        # # # # #
                                        . . # . .
                                        . # . # .
                                        # . . . #`);
            case IconNames.Ghost: return createImage(`
                                        . # # # .
                                        # . # . #
                                        # # # # #
                                        # # # # #
                                        # . # . #`);
            case IconNames.Sword: return createImage(`
                                        . . # . .
                                        . . # . .
                                        . . # . .
                                        . # # # .
                                        . . # . .`);
            case IconNames.Giraffe: return createImage(`
                                        # # . . .
                                        . # . . .
                                        . # . . .
                                        . # # # .
                                        . # . # .`);
            case IconNames.Skull: return createImage(`
                                        . # # # .
                                        # . # . #
                                        # # # # #
                                        . # # # .
                                        . # # # .`);
            case IconNames.Umbrella: return createImage(`
                                        . # # # .
                                        # # # # #
                                        . . # . .
                                        # . # . .
                                        # # # . .`);
            case IconNames.Snake: return createImage(`
                                        # # . . .
                                        # # . # #
                                        . # . # .
                                        . # # # .
                                        . . . . .`);
            // animals
            case IconNames.Rabbit: return createImage(`
                                        # . # . .
                                        # . # . .
                                        # # # # .
                                        # # . # .
                                        # # # # .`);
            case IconNames.Cow: return createImage(`
                                        # . . . #
                                        # . . . #
                                        # # # # #
                                        . # # # .
                                        . . # . .`);
            // musical notes
            case IconNames.QuarterNote: return createImage(`
                                        . . # . .
                                        . . # . .
                                        . . # . .
                                        # # # . .
                                        # # # . .`);
            case IconNames.EigthNote: return createImage(`
                                        . . # . .
                                        . . # # .
                                        . . # . #
                                        # # # . .
                                        # # # . .`);
            // other icons
            case IconNames.Pitchfork: return createImage(`
                                        # . # . #
                                        # . # . #
                                        # # # # #
                                        . . # . .
                                        . . # . .`);
            case IconNames.Target: return createImage(`
                                        . . # . .
                                        . # # # .
                                        # # . # #
                                        . # # # .
                                        . . # . .`);
            default: return createImage(`
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        `);
        }
    }

    //% weight=50 blockGap=8
    //% help=images/arrow-number
    //% blockId=device_arrow block="%arrow"
    //% shim=TD_ID
    export function arrowNumber(arrow: ArrowNames): number {
        return arrow;
    }
}
 