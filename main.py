buttonVal = 0
item = 0
def button():
    global buttonVal, item
    buttonVal = pins.analog_read_pin(AnalogPin.P2)
    if buttonVal < 256:
        item = 1
    elif buttonVal < 597:
        item = 2
    elif buttonVal < 725:
        item = 3
    else:
        item = 0

def on_forever():
    button()
    if item:
        basic.show_number(item)
    elif pins.analog_read_pin(AnalogPin.P0) < 400:
        basic.show_string("-X")
    elif pins.analog_read_pin(AnalogPin.P0) < 600:
        basic.show_string("+X")
    else:
        basic.clear_screen()
basic.forever(on_forever)
