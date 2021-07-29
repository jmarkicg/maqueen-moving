let brojac = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
let prva = strip.range(0, 1)
let druga = strip.range(1, 1)
let treca = strip.range(2, 1)
let cetvrta = strip.range(3, 1)
prva.showColor(neopixel.hsl(15, 15, 50))
druga.showColor(neopixel.hsl(30, 30, 50))
treca.showColor(neopixel.hsl(45, 45, 50))
cetvrta.showColor(neopixel.hsl(60, 60, 50))
while (brojac < 10) {
    music.setBuiltInSpeakerEnabled(true)
    basic.pause(1000)
    while (maqueen.Ultrasonic(PingUnit.Centimeters) >= 10) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorStop(maqueen.Motors.All)
        music.playMelody("C E G C5 - - - - ", 500)
        strip.rotate(1)
        strip.show()
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        if (randint(1, 2) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        }
        basic.pause(randint(5, 20 * 200))
        brojac = brojac + 1
    }
}
music.playMelody("F A F A F A F A ", 500)
maqueen.motorStop(maqueen.Motors.All)
