import os

TEAM_NAME = os.environ['TEAM_NAME']
CONNECTION_STRING = os.environ['MONGO_CONNECTION_STRING']
SECRET_KEY = os.getenv('SECRET_KEY')
ACCESS_KEY_ID = os.getenv('ACCESS_KEY_ID')
ACCESS_SECRET_KEY = os.getenv('ACCESS_SECRET_KEY')
BUCKET_NAME = os.getenv('BUCKET_NAME')
GOOGLE_APPLICATION_CREDENTIALS = os.getenv('GOOGLE_APPLICATION_CREDENTIALS')
SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
SENDER_EMAIL = os.getenv('SENDER_EMAIL')