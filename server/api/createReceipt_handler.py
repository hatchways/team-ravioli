# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture
import uuid
from flask_expects_json import expects_json



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
        title=request.get_json()['title']
        amount=request.get_json()['amount']
        category=request.get_json()['category']
        receipt_date=request.get_json()['receipt_date']
        create_date=request.get_json()['date_created']
        picture_url=request.get_json()['picture_url']
    
    except KeyError:
        responseObject = {
                'status': 'fail',
                'message': 'Some Key values Missing, Please enter all details.'
            }
        return make_response(jsonify(responseObject)), 400

    
    # Inserting into the database
    userid = receipt(receipt_id=receipt_id, user_id=user_id ,title=title, amount=amount, category=category,receipt_date=receipt_date,date_created=create_date,picture_url=picture_url ).save()
    
    responseObject = {            
                    'status': 'success',
                    'message': 'Receipt Created Successfully.',
                }
    return make_response(jsonify(responseObject)), 201
    
    
    
        