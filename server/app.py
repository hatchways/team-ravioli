from flask import Flask
from api.ping_handler import ping_handler
from api.home_handler import home_handler
from database.db import initialize_db
from ..config import CONNECTION_STRING

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'host': CONNECTION_STRING
}

initialize_db(app)

app.register_blueprint(home_handler)
app.register_blueprint(ping_handler)



