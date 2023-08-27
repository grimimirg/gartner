from flask import Flask
import RPi.GPIO as GPIO

import time

from response import Response
from constants import ResponseCode, ResponseMessages

# ---------------------------------------------------------------------

app = Flask(__name__)

GPIO.setmode(GPIO.BCM)

pin = 10

GPIO.setup(pin, GPIO.OUT)

# ---------------------------------------------------------------------


@app.route('/on')
def turn_on():
    try:
        GPIO.output(pin, GPIO.HIGH)
        time.sleep(2)
        GPIO.output(pin, GPIO.LOW)
    except:
        GPIO.output(pin, GPIO.LOW)
        return Response(ResponseCode.INTERNAL_SERVER_ERROR, ResponseMessages.INTERNAL_SERVER_ERROR)

    return Response(ResponseCode.OK, ResponseMessages.OK)


@app.route('/off')
def turn_off():
    GPIO.output(pin, GPIO.LOW)
    return Response(ResponseCode.OK, ResponseMessages.OK)


# ---------------------------------------------------------------------
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
