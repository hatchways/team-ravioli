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
        data=request.form
        data1=data.to_dict(flat=False)
        #receipt_id=data1['receipt_id'][0]
        title=data1['title'][0]
        amount=data1['amount'][0]
        category=data1['category'][0]
        receipt_date=data1['receipt_date'][0]
        create_date=data1['date_created'][0]
        picture_url=data1['picture_url'][0]
    
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
    
    
    
        