# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture
import uuid
from flask_expects_json import expects_json
from datetime import datetime
import time
import os, boto3
from botocore.client import Config
from config import ACCESS_KEY_ID, ACCESS_SECRET_KEY, BUCKET_NAME

createReceipt_handler = Blueprint('createReceipt_handler',__name__)


# Create a route for '/createReceipt'
@createReceipt_handler.route('/createReceipt',methods=['POST'])
def createReceipt():
    # Get Receipt inputs
    
    try:
        auth_token=request.headers.get("auth_token")
        auth=user.decode_auth_token(auth_token)
        user_id=auth['user_id']
        id=uuid.uuid1()
        receipt_id=str(id).replace("-", "")
        data=request.form
        data1=data.to_dict(flat=False)
        title=data1['title'][0]
        amount=data1['amount'][0]
        category=data1['category'][0]
        receipt_date=data1['receipt_date'][0]
        create_date=data1['date_created'][0]
        pict_file=request.files['picture_url']
        p=pict_file.filename
        
        # Storing the data in aws s3 buckets
        s3=boto3.resource('s3',aws_access_key_id=ACCESS_KEY_ID,aws_secret_access_key=ACCESS_SECRET_KEY,config=Config(signature_version='s3v4'))
        location=s3.Bucket(BUCKET_NAME).put_object(Key=p,Body=pict_file)
        # Url where we store our file
        picture_url = 'https://%s.s3.ca-central-1.amazonaws.com/%s' % (BUCKET_NAME, p)
    

    except KeyError:
        responseObject = {
                'status': 'fail',
                'message': 'Some Key values Missing, Please enter all details.'
            }
        return make_response(jsonify(responseObject)), 400

    # Inserting into the database
    userid = receipt(receipt_id=receipt_id, user_id=user_id ,title=title, amount=amount, category=category,receipt_date=receipt_date,date_created=create_date,picture_url=picture_url ).save()
    #print(userid)'''
    responseObject = {            
                    'status': 'success',
                    'message': 'Receipt Created Successfully.',
                }
    return make_response(jsonify(responseObject)), 201
    
    
    
        