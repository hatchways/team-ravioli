import os ,io
from config import GOOGLE_APPLICATION_CREDENTIALS
from google.cloude import vision
from google.cloude.vision import types

client= vision.ImageAnnotatorClient()



with open("https://teamfirsttestbucket.s3.ca-central-1.amazonaws.com/img1.jpg", 'rb') as image_file:
    content = image_file.read()

image=vision.types.Image(content=content)

response=client.text_detection(image=image)