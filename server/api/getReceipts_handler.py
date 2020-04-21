# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json ,jsonify, make_response
from database.models import user,receipt,picture
from datetime import datetime


getReceipts_handler = Blueprint('getReceipts_handler',__name__)

# Create a route for '/getReceipts/<duration>'
@getReceipts_handler.route('/getReceipts',methods=['GET'])
def getReceipts():
    month = int(request.args.get('month'))
    year = int(request.args.get('year'))
    if month==None and year==None:
        responseObject = {
            'status': 'fail',
            'message': 'Please enter required parameters'
        }
        return make_response(jsonify(responseObject)),400
    else:
        auth_token=request.headers.get("auth_token")
        auth=user.decode_auth_token(auth_token)
        userid=auth['user_id']
        
    data=receipt.objects(user_id=userid)
    response=[]
    total_amt=0
    date_str=""
    for doc in data:
        
        if doc.receipt_date.month== month and doc.receipt_date.year==year:
            total_amt=total_amt+doc.amount
            date_str=str(doc.receipt_date.day) +'-'+ str(doc.receipt_date.month)+'-'+str(doc.receipt_date.year)
            dic={
                'receipt_id':doc.receipt_id,
            'title':doc.title,
            'amount':doc.amount,
            'category':doc.category,
            'receipt_date':date_str,
            'picture_url':doc.picture_url
            }
            response.append(dic)
    
            
        else:
            pass
    response.reverse()
    responseObject = {
            'status': 'success',
            'response':response,
            'total_amount':total_amt
            }
    return make_response(jsonify(responseObject)),201
        