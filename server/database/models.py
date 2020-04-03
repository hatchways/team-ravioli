# import necessary libraries
from .db import db
import datetime
import jwt
from flask import Flask
from config import SECRET_KEY

# Data Model User
class user(db.Document):
    name = db.StringField(required=True, unique=True)
    email = db.StringField(required=True)
    password = db.StringField(required=True)

    # Method for encoding authentication token
    def encode_auth_token(self, user_id):
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1, seconds=5),
                'iat': datetime.datetime.utcnow(),
                'sub': user_id
            }
            return jwt.encode(payload,SECRET_KEY,algorithm='HS256')
        except Exception as e:
            return e
    
    # Method for decoding authentication token
    @staticmethod
    def decode_auth_token(auth_token):
        try:
            payload = jwt.decode(auth_token, SECRET_KEY)
            return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'
    
# Data Model reciept
class reciept(db.Document):
    title = db.StringField(required=True)
    amount = db.IntField(required=True)
    category = db.ListField()
    reciept_date = db.StringField()
    date_created = db.StringField(required=True)
    picture_url = db.StringField()

# Data Model picture
class picture(db.Document):
    reciept_id = db.IntField(required=True)
    picture_url = db.StringField(required=True)


