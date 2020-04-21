# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture
from flask_expects_json import expects_json
from datetime import datetime
from botocore.client import Config
from config import ACCESS_KEY_ID, ACCESS_SECRET_KEY, BUCKET_NAME
from google.cloud import vision
from google.cloud.vision import types
import pandas as pd
import time, os, io, boto3, re


createReceiptVision_handler = Blueprint('createReceiptVision_handler',__name__)


# Create a route for '/createReceipt'
@createReceiptVision_handler.route('/createReceiptVision',methods=['POST'])
def createReceiptVision():
    # Get Receipt inputs
    
    try:
        auth_token=request.headers.get("auth_token")
        auth=user.decode_auth_token(auth_token)
        user_id=auth['user_id']
        
        pict_file=request.files['picture_url']
        p=pict_file.filename
        
        # Storing the data in aws s3 buckets
        s3=boto3.resource('s3',aws_access_key_id=ACCESS_KEY_ID,aws_secret_access_key=ACCESS_SECRET_KEY,config=Config(signature_version='s3v4'))
        location=s3.Bucket(BUCKET_NAME).put_object(Key=p,Body=pict_file)
        # Url where we store our file
        picture_url = 'https://%s.s3.ca-central-1.amazonaws.com/%s' % (BUCKET_NAME, p)

        # Google cloud vision API for text detection in image receipts
        client = vision.ImageAnnotatorClient()
        image = vision.types.Image()
        image.source.image_uri = picture_url

        response = client.text_detection(image=image)
        texts = response.text_annotations

        # Parse the text from receipts
        
        texts_list=list(texts)
        for i in range(len(texts_list)):
            if "{}".format(texts_list[i].description).lower() in ['fuel', 'gas','restaurant']:
                title=texts_list[i].description
            else:
                pass
        if title==None:
            title=""   
        else: 
            pass

        for i in range(len(texts_list)):
            if "{}".format(texts_list[i].description).lower() in ['total', 'total amount', 'sub-total']:
                new_lst=texts_list[i:]
            
                for j in range(len(new_lst)):
                    digit="{}".format(new_lst[j].description)
                    
                    dig=re.findall('\d*\.?\d+',digit)
                    
                    if len(dig)!=0:
                        amount=dig[0]
                        break
                    else:
                        amount=0
                break
        if amount==None:
            amount=0   
        else: 
            pass

        response={
            'title':title,
            'amount':amount,
            'picture_url':picture_url
            }
        responseObject = {            
                    'status': 'success',
                    'response': response
                }
        return make_response(jsonify(responseObject)), 201
    

    except KeyError:
        responseObject = {
                'status': 'fail',
                'message': 'Some Key values Missing, Please enter all details.'
            }
        return make_response(jsonify(responseObject)), 400

    
    
    
    
    
        