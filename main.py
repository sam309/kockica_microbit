Random = 0

def on_gesture_shake():
    global Random
    Random = randint(1, 6)
    if Random == 1:
        images.create_image("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """).show_image(1)
    if Random == 2:
        images.create_image("""
            . . . . .
            . . . . .
            . # # . .
            . . . . .
            . . . . .
            """).show_image(1)
    if Random == 3:
        images.create_image("""
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            """).show_image(1)
    if Random == 4:
        images.create_image("""
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            """).show_image(1)
    if Random == 5:
        images.create_image("""
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            """).show_image(1)
    if Random == 6:
        images.create_image("""
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            """).show_image(1)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
