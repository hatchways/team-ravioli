# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture
import hashlib, binascii, os
from config import SECRET_KEY
import uuid

signup_handler = Blueprint('signup_handler',__name__)

# Method to hash the password
def hash_password(password):
    """Hash a password for storing."""
    salt = hashlib.sha256(os.urandom(60)).hexdigest().encode('ascii')
    pwdhash = hashlib.pbkdf2_hmac('sha512', password.encode('utf-8'), 
                                salt, 100000)
    pwdhash = binascii.hexlify(pwdhash)
    return (salt + pwdhash).decode('ascii')

# Create a route for '/signup'
@signup_handler.route('/signup',methods=['POST'])
def signup():
    # Get signup inputs
    id=uuid.uuid1()
    name=request.get_json()['name']
    email=request.get_json()['email']
    password=hash_password(request.get_json()['password'])
    user_id=str(id).replace("-", "")
    # Validating if User already register or not
    if not user.objects(email=email):
        # Inserting into the database
        userid = user(user_id=user_id , name=name , email=email, password=password).save()
        auth_token = user().encode_auth_token(email,user_id)
        # Sending authentication token and success message
        responseObject = {            
            'status': 'success',
            'message': 'Successfully registered.',
            'auth_token': auth_token.decode('utf-8'),
            'user_id': user_id
        }
        return make_response(jsonify(responseObject)), 201
    else:
        # Sending message
        responseObject = {
            'status': 'fail',
            'message': 'User already exists. Please Log in.'
        }
        return make_response(jsonify(responseObject)), 202