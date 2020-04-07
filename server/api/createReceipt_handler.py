# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture
import uuid


createReceipt_handler = Blueprint('createReceipt_handler',__name__)

# Create a route for '/createReceipt'
@createReceipt_handler.route('/createReceipt',methods=['POST'])
def createReceipt():
    # Get Receipt inputs
    id=uuid.uuid1()
    receipt_id=str(id).replace("-", "")
    user_id=request.get_json()['user_id']
    title=request.get_json()['title']
    amount=request.get_json()['amount']
    category=request.get_json()['category']
    receipt_date=request.get_json()['receipt_date']
    create_date=request.get_json()['create_date']
    picture_url=request.get_json()['picture_url']

    userid = receipt(receipt_id=receipt_id, user_id=user_id ,title=title, amount=amount, category=category,receipt_date=receipt_date,date_created=create_date,picture_url=picture_url ).save()
    if not userid:
        responseObject = {
            'status': 'fail',
            'message': 'Please try again.'
        }
        return make_response(jsonify(responseObject)), 400
    else:
        responseObject = {            
            'status': 'success',
            'message': 'Receipt Created Successfully.',
        }
        return make_response(jsonify(responseObject)), 201