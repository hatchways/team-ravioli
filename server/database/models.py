from .db import db

class user(db.Document):
    user_id = db.StringField(required=True, unique=True)
    password = db.StringField(required=True)
    jwt = db.StringField(required=True)

class reciept(db.Document):
    title = db.StringField(required=True)
    amount = db.IntField(required=True)
    category = db.ListField()
    reciept_date = db.StringField()
    date_created = db.StringField(required=True)
    picture_url = db.StringField()

class picture(db.Document):
    reciept_id = db.IntField(required=True)
    picture_url = db.StringField(required=True)