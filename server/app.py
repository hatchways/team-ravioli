# import necessary libraries 
from flask import Flask, render_template, url_for, request, session, redirect, json ,jsonify, make_response
from datetime import datetime
from flask_bcrypt import Bcrypt
import jwt
from mongoengine.queryset import DoesNotExist
from database.db import initialize_db
from config import CONNECTION_STRING
from database.models import user,reciept,picture

# Initialize flask app
app = Flask(__name__)

bcrypt=Bcrypt(app)
app.config.from_object(__name__)
app.config['MONGODB_SETTINGS'] = {
    'host': CONNECTION_STRING
}
# Initialize database
initialize_db(app)

# Create a route /signup
@app.route('/signup',methods=['POST'])
def signup():
    # Get signup inputs
    name=request.get_json()['name']
    email=request.get_json()['email']
    password=bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')

    # Validating if User already register or not
    if not user.objects(name=name):
        # Inserting into the database
        user_id = user(name=name , email=email, password=password).save()
        auth_token = user().encode_auth_token(name)
        # Sending authentication token and success message
        responseObject = {            
            'status': 'success',
            'message': 'Successfully registered.',
            'auth_token': auth_token.decode('utf-8')
        }
        return make_response(jsonify(responseObject)), 201
    else:
        # Sending message
        responseObject = {
            'status': 'fail',
            'message': 'User already exists. Please Log in.'
        }
        return make_response(jsonify(responseObject)), 202
       
# Create a route /login
@app.route('/login', methods=['POST'])
def login():
    # Get login inputs
    email=request.get_json()['email']
    password=request.get_json()['password']

    # Decrypting the hashed password from database
    try:
        user_pass=user.objects.get(email=email)
        dcr_pass=bcrypt.check_password_hash(user_pass.password,password)
        print(dcr_pass)
    except DoesNotExist:
        responseObject = {
            'status': 'fail',
            'message': 'Invalid Username or Password'
        }
        return make_response(jsonify(responseObject)),400
    # Validating if registered user 
    if not user.objects(email=email):
        responseObject = {
            'status': 'fail',
            'message': 'Invalid Username or Password'
        }
        return make_response(jsonify(responseObject)),400
    elif dcr_pass == False:
        responseObject = {
            'status': 'fail',
            'message': 'Invalid Username or Password'
        }
        return make_response(jsonify(responseObject)),400
            
    else:
        auth_token = user().encode_auth_token(email)
        #print(type(auth_token))
        responseObject = {            
        'status': 'success',
        'message': 'Successfully logged in.',            
        'auth_token': auth_token.decode('utf-8')
        }
        return make_response(jsonify(responseObject)), 201
        

        
    
    

    