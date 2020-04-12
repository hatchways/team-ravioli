# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture
import hashlib, binascii, os

login_handler = Blueprint('login_handler',__name__)

# Methode to hash the password
def hash_password(password):
    """Hash a password for storing."""
    salt = hashlib.sha256(os.urandom(60)).hexdigest().encode('ascii')
    pwdhash = hashlib.pbkdf2_hmac('sha512', password.encode('utf-8'), 
                                salt, 100000)
    pwdhash = binascii.hexlify(pwdhash)
    return (salt + pwdhash).decode('ascii')

# Methode to unhash the password
def verify_password(stored_password, provided_password):
    """Verify a stored password against one provided by user"""
    salt = stored_password[:64]
    stored_password = stored_password[64:]
    pwdhash = hashlib.pbkdf2_hmac('sha512', 
                                  provided_password.encode('utf-8'), 
                                  salt.encode('ascii'), 
                                  100000)
    pwdhash = binascii.hexlify(pwdhash).decode('ascii')
    return pwdhash == stored_password

# Create a route for '/login'
@login_handler.route('/login',methods=['POST'])
def login():
    # Get login inputs
    email=request.get_json()['email']
    password=request.get_json()['password']
    
    # Validating if registered user 
    if not user.objects(email=email):
        responseObject = {
            'status': 'fail',
            'message': 'Invalid Username or Password'
        }
        return make_response(jsonify(responseObject)),400
    else:
        data=user.objects.get(email=email)
        print(data.password)
        verify=verify_password(data.password,password)
        print(verify)
        if verify == True :
            auth_token = user().encode_auth_token(email,data.user_id)
            #print(type(auth_token))
            responseObject = {            
            'status': 'success',
            'message': 'Successfully logged in.',            
            'auth_token': auth_token.decode('utf-8'),
            'user_id': data.user_id
            }
            return make_response(jsonify(responseObject)), 201
        else:
            responseObject = {
            'status': 'fail',
            'message': 'Invalid Username or Password'
            }
            return make_response(jsonify(responseObject)),400

