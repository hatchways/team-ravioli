# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture


updateReceipt_handler = Blueprint('updateReceipt_handler',__name__)

# Create a route for '/updateReceipt/<id>'
@updateReceipt_handler.route('/updateReceipt',methods=['POST'])
def updateReceipt():
    # Get Receipt inputs
    auth_token=request.headers.get("auth_token")
    
    if not auth_token:    
        #data=receipt.objects(user_id=userid)
        responseObject = {
                'status': 'fail',
                'message': 'Something is wrong.'
            }
        return make_response(jsonify(responseObject)), 400
    else:
        auth=user.decode_auth_token(auth_token)
        userid=auth['user_id']
        data=receipt.objects(user_id=userid)
        data_len=len(list(data))
        
        if data_len==0:
            responseObject = {
            'status': 'success',
            'message': 'Something is wrong.'
            }
            return make_response(jsonify(responseObject)), 200

        else:
    
            receipt_id=request.get_json()['receipt_id']
            title=request.get_json()['title']
            amount=request.get_json()['amount']
            category=request.get_json()['category']
            receipt_date=request.get_json()['receipt_date']
            create_date=request.get_json()['date_created']
            
            # Inserting into the database
            userid = receipt.objects(receipt_id=receipt_id).update_one(set__title=title, set__amount=amount, set__category=category,set__receipt_date=receipt_date,set__date_created=create_date )
            responseObject = {            
                            'status': 'success',
                            'message': 'Receipt Updated Successfully.',
                        }
            return make_response(jsonify(responseObject)), 201