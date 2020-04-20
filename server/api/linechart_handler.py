# import necessary libraries
from flask import jsonify, Blueprint
from flask import Flask, request, json , make_response
from database.models import user,receipt,picture
import datetime
import pandas as pd

linechart_handler = Blueprint('linechart_handler',__name__)

# Create a route for '/getReceipts/<duration>'
@linechart_handler.route('/linechart',methods=['GET'])
def linechart():
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
        
        now = datetime.datetime.now()
    
        amount=[]
        month=[]

        for doc in data:

            if doc.receipt_date.year== now.year :
                amount.append(doc.amount)
                month.append(doc.receipt_date.month)
                dictionary={'amount':amount,'month':month}
        
        df=pd.DataFrame(dictionary)
        anc=df.groupby('month').amount.sum()
        df1=pd.DataFrame(anc)
        df1.reset_index(level=0, inplace=True)
        response={'month':df1['month'].tolist(),'amount':df1['amount'].tolist()}
        print(response)
    responseObject = {
            'status': 'success',
            'response':response}
    return make_response(jsonify(responseObject)), 200


