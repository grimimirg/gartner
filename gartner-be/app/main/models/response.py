import json


class Response:
    def __init__(self, code, message):
        self.code = code
        self.message = message

    def __str__(self):
        return json.dumps(self.__dict__)
