# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture


getReceipt_handler = Blueprint('getReceipt_handler',__name__)

# Create a route for '/getReceipt/<id>'
@getReceipt_handler.route('/getReceipt',methods=['GET'])
def getReceipt():
    id = request.args.get('receipt_id')
    print(id)
    # Validating if receipt id present in database
    if not id:
        responseObject = {
            'status': 'fail',
            'message': 'Please enter required parameters'
        }
        return make_response(jsonify(responseObject)),400
    else:
        auth_token=request.headers.get("auth_token")
        auth=user.decode_auth_token(auth_token)
        userid=auth['user_id']
    
    data=receipt.objects.get(user_id=userid)
    if data.receipt_id==id:
        responseObject = {
            'status': 'success',
            'receipt_id': data.receipt_id,
            'picture_url':[data.picture_url]
        }
        return make_response(jsonify(responseObject)),201
    else:
        responseObject = {
            'status': 'fail',
            'message': 'Invalid Receipt id'
        }
        return make_response(jsonify(responseObject)),400






    
        