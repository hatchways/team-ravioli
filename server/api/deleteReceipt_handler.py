# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture


deleteReceipt_handler = Blueprint('deleteReceipt_handler',__name__)

# Create a route for '/updateReceipt/<id>'
@deleteReceipt_handler.route('/deleteReceipt',methods=['DELETE'])
def deleteReceipt():
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
        receipt_id=request.get_json()['receipt_id']
        
        if not receipt.objects(user_id=userid,receipt_id=receipt_id):
            responseObject = {
                'status': 'fail',
                'message': 'Receipt not found.'
            }
            return make_response(jsonify(responseObject)), 400
        else:
            data=receipt.objects.get(user_id=userid,receipt_id=receipt_id)

            data.delete()
            print(data.title)
            responseObject = {
                    'status': 'success',
                    'message': 'Receipt deleted.'
                }
    return make_response(jsonify(responseObject)), 200
        

    