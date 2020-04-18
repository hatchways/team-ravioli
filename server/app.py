# import necessary libraries
from flask import Flask
from database.db import initialize_db
from config import CONNECTION_STRING
from api.signup_handler import signup_handler
from api.login_handler import login_handler
from api.createReceipt_handler import createReceipt_handler
from api.updateReceipt_handler import updateReceipt_handler
from api.getReceipt_handler import getReceipt_handler
from api.getReceipts_handler import getReceipts_handler
from api.viewAllReceipts_handler import viewAllReceipts_handler
from api.topCategories_handler import topCategories_handler


# Initialize flask app
app = Flask(__name__)

# bcrypt=Bcrypt(app)
app.config.from_object(__name__)
app.config['MONGODB_SETTINGS'] = {
    'host': CONNECTION_STRING
}
# Initialize database
initialize_db(app)

app.register_blueprint(signup_handler)
app.register_blueprint(login_handler)
app.register_blueprint(createReceipt_handler)
app.register_blueprint(updateReceipt_handler)
app.register_blueprint(getReceipt_handler)
app.register_blueprint(getReceipts_handler)
app.register_blueprint(viewAllReceipts_handler)
app.register_blueprint(topCategories_handler)
