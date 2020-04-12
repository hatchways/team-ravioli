# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture


updateReceipt_handler = Blueprint('updateReceipt_handler',__name__)

# Create a route for '/updateReceipt/<id>'
@updateReceipt_handler.route('/updateReceipt/<id>',methods=['PUT'])
def updateReceipt(id):
    # Get Receipt inputs
    try:
        receipt_id=id
        user_id=request.get_json()['user_id']
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
    userid = receipt.objects(receipt_id=receipt_id).update_one(set__user_id=user_id,set__title=title, set__amount=amount, set__category=category,set__receipt_date=receipt_date,set__date_created=create_date,set__picture_url=picture_url )
    responseObject = {            
                    'status': 'success',
                    'message': 'Receipt Updated Successfully.',
                }
    return make_response(jsonify(responseObject)), 201