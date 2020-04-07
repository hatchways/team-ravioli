# import necessary libraries
from .db import db
import datetime
import jwt
from flask import Flask
from config import SECRET_KEY


# Data Model User
class user(db.Document):
    user_id=db.StringField(required=True, unique=True)
    name = db.StringField(required=True)
    email = db.StringField(required=True, unique=True)
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
class receipt(db.Document):
    receipt_id=db.StringField(required=True, unique=True)
    user_id=db.StringField(required=True)
    title = db.StringField(required=True)
    amount = db.IntField(required=True)
    category = db.StringField()
    receipt_date = db.StringField()
    date_created = db.StringField(required=True)
    picture_url = db.ListField()

# Data Model picture
class picture(db.Document):
    receipt_id = db.IntField(required=True)
    picture_url = db.ListField(required=True)


